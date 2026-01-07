# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Doctor Marketplace Application** - a fully containerized appointment booking system with:
- MongoDB database with Israeli sample data (14 doctors, 25 patients across 7 specialties)
- Python Flask REST API with CRUD operations and custom query endpoints
- Docker Compose orchestration with automatic data initialization
- Mongo Express web UI for database administration

## Architecture

### Fully Containerized Stack

The entire application runs in Docker containers orchestrated by `docker-compose.yml`:

1. **mongodb** container
   - MongoDB 8.2+ with automatic initialization
   - Mounts `mongodb-schema.js` and `mongodb-sample-data.js` to `/docker-entrypoint-initdb.d/`
   - Data auto-loads on first startup (only runs once per volume)
   - Persistent storage via `mongo_data` volume
   - Healthcheck using `mongosh --eval "db.adminCommand('ping')"`

2. **api** container
   - Flask REST API built from `api/Dockerfile`
   - Waits for MongoDB healthcheck before starting
   - Connects to MongoDB using internal Docker network (`mongodb:27017`)
   - Exposed on host port 5001

3. **mongo-express** container
   - Web-based database admin UI
   - Accessible at http://localhost:8081
   - Depends on MongoDB healthcheck

### Data Model (5 Collections)

**doctors**: `{_id, name, specialty, phone, email, experienceYears, consultationFee, profileDescription, createdAt}`
- 7 specialties: Cardiology, Pulmonology, Gastroenterology, Nutrition, Neurology, Nephrology, Endocrinology

**patients**: `{_id, name, phone, email, dateOfBirth, gender, address, createdAt}`

**schedules**: `{_id, doctorId, dayOfWeek, startTime, endTime, slotDuration, isAvailable, createdAt}`
- Weekly recurring patterns

**appointments**: `{_id, doctorId, patientId, appointmentDate, startTime, endTime, status, isFollowUp, createdAt}`

**caseHistory**: `{_id, appointmentId, patientId, doctorId, diagnosis, prescription, notes, followUpNeeded, followUpDate, createdAt}`

### Key Design Patterns

- **Single-File API**: Entire Flask app in `api/app.py` (576 lines) for simplicity
- **Auto-Initialization**: MongoDB sample data loads automatically via Docker init scripts
- **Document References**: Collections linked via ObjectId references (no embedded documents)
- **Conflict Detection**: Appointment booking prevents double-booking (returns HTTP 409)
- **Serialization Helper**: `serialize_doc()` converts ObjectIds/dates to JSON

## Common Development Commands

### Starting the Full Stack

```bash
# Start all services (from project root)
docker-compose up -d

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f api
docker-compose logs -f mongodb
```

**Important**: On first startup, MongoDB automatically runs init scripts and loads sample data. This only happens once per volume. To reload data, use `docker-compose down -v` to remove volumes.

### Stopping Services

```bash
# Stop services (preserves data)
docker-compose down

# Stop and remove all data
docker-compose down -v
```

### Rebuilding After Code Changes

```bash
# Rebuild API container after modifying app.py
docker-compose up -d --build api

# Rebuild all services
docker-compose up -d --build
```

### Running Tests

Tests run against the containerized API:

```bash
# From project root or api/ directory
cd api
source venv/bin/activate
python test_api.py
```

The test suite expects the API at `http://localhost:5001`. Ensure containers are running first.

### Local Development (Without Docker)

If developing API locally without containers:

```bash
# Start only MongoDB and Mongo Express
docker-compose up -d mongodb mongo-express

# Run API locally
cd api
source venv/bin/activate
export MONGO_URI="mongodb://admin:strongpassword123@localhost:27017/clinic?authSource=admin"
python app.py
```

### Database Operations

```bash
# Access MongoDB shell
docker exec -it mongodb mongosh -u admin -p strongpassword123 --authenticationDatabase admin

# Inside mongosh:
use clinic
db.doctors.find().limit(5)
db.appointments.countDocuments({status: "scheduled"})
```

**Mongo Express UI**: http://localhost:8081 (login: admin/admin123)

### Resetting Database

```bash
# Remove volume to trigger re-initialization
docker-compose down -v
docker-compose up -d
# Sample data automatically reloads
```

## API Endpoints

All endpoints follow RESTful conventions. Base URL: `http://localhost:5001`

**CRUD Endpoints** (for doctors, patients, schedules, appointments, case-history):
- `GET /{resource}` - List all
- `GET /{resource}/<id>` - Get by ID
- `POST /{resource}` - Create
- `PUT /{resource}/<id>` - Update
- `DELETE /{resource}/<id>` - Delete

**Custom Query Endpoints**:
- `GET /doctors/specialty/<specialty>` - Filter doctors by specialty
- `GET /schedules/doctor/<doctor_id>` - Doctor's weekly schedule
- `GET /schedules/specialty/<specialty>` - Schedules with doctor info
- `GET /doctors/slot?dayOfWeek=<day>&time=<time>` - Available doctors
- `GET /appointments/doctor/<doctor_id>` - Appointments with patient details
- `GET /patients/doctor/<doctor_id>` - Unique patients per doctor
- `POST /appointments/book` - Book with conflict checking

## Environment Variables

Configure via `.env` file in project root:

```bash
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=strongpassword123
ME_CONFIG_BASICAUTH_USERNAME=admin
ME_CONFIG_BASICAUTH_PASSWORD=admin123
```

**API Container Environment** (set in docker-compose.yml):
- `MONGO_URI`: Connection string using internal Docker network
- `PORT`: 5001

## Important Implementation Details

### Automatic Data Initialization

MongoDB init scripts in `/docker-entrypoint-initdb.d/` only run when:
1. Container starts for the first time
2. Data directory is empty (no existing database)

Scripts execute in alphanumeric order:
- `01-schema.js` - Collection documentation
- `02-data.js` - Sample data insertion

To re-run initialization: `docker-compose down -v && docker-compose up -d`

### Container Networking

Services communicate via Docker internal network:
- API connects to MongoDB at `mongodb:27017` (not `localhost`)
- Host access uses `localhost:27017`, `localhost:5001`, `localhost:8081`

### ObjectId Handling

All MongoDB ObjectIds must be:
- Wrapped with `ObjectId()` when querying
- Serialized to strings via `serialize_doc()` helper in responses
- Example: `doctors_collection.find_one({'_id': ObjectId(doctor_id)})`

### Testing Behavior

Appointment booking test returns HTTP 409 (Conflict) on subsequent runs because it books the same time slot. This is **correct behavior** - demonstrating double-booking prevention.

## File Organization

```
/
├── docker-compose.yml          # Orchestrates 3 containers
├── .env                        # Credentials (gitignored)
├── .env.example                # Template
├── mongodb-schema.js           # Auto-loaded on init
├── mongodb-sample-data.js      # Auto-loaded on init
├── MONGODB-README.md           # Database documentation
└── api/
    ├── Dockerfile              # Builds API container
    ├── app.py                  # Flask API (all endpoints)
    ├── test_api.py             # 14-test suite
    ├── requirements.txt        # Python dependencies
    ├── .env.example            # API-specific config
    ├── start.sh                # Local development helper
    ├── venv/                   # For local development
    └── README.md               # API documentation
```

## Adding New Features

### Adding API Endpoints

1. Edit `api/app.py` - add route handler following existing patterns
2. Use module-level collection variables: `doctors_collection`, etc.
3. Call `serialize_doc()` on responses to handle ObjectIds
4. Add test case to `test_api.py`
5. Rebuild API container: `docker-compose up -d --build api`

### Modifying Sample Data

1. Edit `mongodb-sample-data.js`
2. Remove volume to trigger re-initialization: `docker-compose down -v`
3. Restart: `docker-compose up -d`

### Changing MongoDB Schema

1. Edit `mongodb-schema.js` (documentation only - MongoDB is schemaless)
2. Update `mongodb-sample-data.js` to match new structure
3. Update `api/app.py` to handle new fields
4. Reset database: `docker-compose down -v && docker-compose up -d`

## Troubleshooting

**Services won't start**: Check `.env` file exists with required variables

**API can't connect to MongoDB**:
- Verify MongoDB is healthy: `docker-compose ps`
- Check MongoDB logs: `docker-compose logs mongodb`
- Ensure using `mongodb:27017` not `localhost:27017` in container

**Data not loading**:
- Init scripts only run once per volume
- Solution: `docker-compose down -v && docker-compose up -d`

**Port conflicts**:
- 5001, 8081, or 27017 already in use
- Change port mappings in `docker-compose.yml`
- Restart: `docker-compose up -d`

**Tests failing**:
- Ensure containers running: `docker-compose ps`
- Check API accessible: `curl http://localhost:5001/`
- Booking test may fail on repeat (expected - conflict prevention working)

**Rebuilding not working**: Use `--no-cache` flag:
```bash
docker-compose build --no-cache api
docker-compose up -d
```
