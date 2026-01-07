# Doctor Marketplace REST API

A minimalistic Flask REST API for managing doctor appointments, patient records, and medical case history.

## Features

- **CRUD Operations** for all collections (doctors, patients, schedules, appointments, case history)
- **Custom Endpoints** for common queries
- **CORS Enabled** for cross-domain requests
- **MongoDB Integration** with pre-seeded Israeli sample data
- **Simple & Readable** - Everything in a single Python file

## Prerequisites

- Python 3.8+
- MongoDB running (via Docker Compose)
- Virtual environment (venv)

## Quick Start

### 1. Ensure MongoDB is Running

```bash
# From project root directory
docker-compose up -d

# Verify MongoDB is running
docker-compose ps
```

### 2. Setup Virtual Environment

```bash
cd api

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt
```

### 3. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env if needed (default values should work)
```

### 4. Start the API Server

```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Run the Flask application
python app.py
```

The API will be available at: **http://localhost:5000**

### 5. Test the API

Open a new terminal window:

```bash
cd api

# Activate virtual environment
source venv/bin/activate

# Run tests
python test_api.py
```

## API Endpoints

### Health Check
- `GET /` - API health check

### Doctors
- `GET /doctors` - Get all doctors
- `GET /doctors/<id>` - Get specific doctor
- `POST /doctors` - Create new doctor
- `PUT /doctors/<id>` - Update doctor
- `DELETE /doctors/<id>` - Delete doctor
- `GET /doctors/specialty/<specialty>` - Get doctors by specialty

### Patients
- `GET /patients` - Get all patients
- `GET /patients/<id>` - Get specific patient
- `POST /patients` - Create new patient
- `PUT /patients/<id>` - Update patient
- `DELETE /patients/<id>` - Delete patient
- `GET /patients/doctor/<doctor_id>` - Get patients by doctor

### Schedules
- `GET /schedules` - Get all schedules
- `GET /schedules/<id>` - Get specific schedule
- `POST /schedules` - Create new schedule
- `PUT /schedules/<id>` - Update schedule
- `DELETE /schedules/<id>` - Delete schedule
- `GET /schedules/doctor/<doctor_id>` - Get schedules by doctor
- `GET /schedules/specialty/<specialty>` - Get schedules by specialty
- `GET /doctors/slot?dayOfWeek=<day>&time=<time>` - Get available doctors by time slot

### Appointments
- `GET /appointments` - Get all appointments
- `GET /appointments/<id>` - Get specific appointment
- `POST /appointments` - Create new appointment
- `PUT /appointments/<id>` - Update appointment
- `DELETE /appointments/<id>` - Delete appointment
- `GET /appointments/doctor/<doctor_id>` - Get appointments by doctor
- `POST /appointments/book` - Book appointment for existing patient

### Case History
- `GET /case-history` - Get all case history records
- `GET /case-history/<id>` - Get specific case history
- `POST /case-history` - Create new case history
- `PUT /case-history/<id>` - Update case history
- `DELETE /case-history/<id>` - Delete case history

## Example API Calls

### Get Doctors by Specialty

```bash
curl http://localhost:5000/doctors/specialty/Cardiology
```

### Book an Appointment

```bash
curl -X POST http://localhost:5000/appointments/book \
  -H "Content-Type: application/json" \
  -d '{
    "doctorId": "65a1b2c3d4e5f6a7b8c9d0e1",
    "patientId": "65a1c2d3e4f5a6b7c8d9e0f1",
    "appointmentDate": "2026-01-20",
    "startTime": "10:00",
    "endTime": "10:30",
    "status": "scheduled",
    "isFollowUp": false
  }'
```

### Get Available Doctors by Time Slot

```bash
curl "http://localhost:5000/doctors/slot?dayOfWeek=Monday&time=09:00"
```

### Get Appointments for a Doctor

```bash
curl http://localhost:5000/appointments/doctor/65a1b2c3d4e5f6a7b8c9d0e1
```

## Testing

The test suite (`test_api.py`) includes comprehensive tests for all endpoints:

```bash
# Make sure API server is running first
python app.py

# In another terminal, run tests
python test_api.py
```

Tests include:
- Health check
- CRUD operations for all entities
- Custom query endpoints
- Appointment booking
- Data validation

## Project Structure

```
api/
├── app.py              # Main Flask application (all endpoints)
├── test_api.py         # Comprehensive test suite
├── requirements.txt    # Python dependencies
├── .env.example        # Environment variables template
├── venv/              # Virtual environment (git-ignored)
└── README.md          # This file
```

## Technologies Used

- **Flask 3.0.0** - Web framework
- **Flask-CORS 4.0.0** - Cross-origin resource sharing
- **PyMongo 4.6.1** - MongoDB driver
- **Python-dotenv 1.0.0** - Environment variable management
- **Requests 2.31.0** - HTTP library for testing

## Notes

- All ObjectIds are validated before database operations
- Datetime fields are automatically converted to ISO format
- CORS is enabled for all origins (configure for production)
- Error responses include descriptive messages
- The API uses MongoDB connection string from environment variables

## Troubleshooting

### MongoDB Connection Error
```
Error: Cannot connect to MongoDB
Solution: Ensure MongoDB container is running: docker-compose up -d
```

### Port Already in Use
```
Error: Address already in use
Solution: Change port in app.py or stop the conflicting process
```

### Module Not Found
```
Error: No module named 'flask'
Solution: Activate virtual environment and install dependencies:
  source venv/bin/activate
  pip install -r requirements.txt
```

## Development

To add new endpoints:
1. Add route decorator and function in `app.py`
2. Add test case in `test_api.py`
3. Update this README with endpoint documentation

## License

This is a tutorial project for learning purposes.
