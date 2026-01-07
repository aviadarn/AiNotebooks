# MongoDB Doctor Marketplace Database

This document explains how to set up and populate the MongoDB database for the doctor marketplace application.

## Database Structure

The database consists of 5 collections:

1. **doctors** - Doctor profiles with specialty, experience, and consultation fees
2. **patients** - Patient demographic information
3. **schedules** - Weekly availability slots for each doctor
4. **appointments** - Confirmed bookings (both regular and follow-up appointments)
5. **caseHistory** - Medical records, diagnoses, prescriptions, and follow-up tracking

## Sample Data Overview

- **14 doctors** across 7 specialties (2 per specialty):
  - Cardiology, Pulmonology, Gastroenterology, Nutrition, Neurology, Nephrology, Endocrinology
- **25 patients** with Israeli names from various cities
- **40+ weekly schedules** for all doctors with different time slots
- **30 appointments** - mix of completed, scheduled, and follow-up appointments
- **10 case history records** with realistic diagnoses and prescriptions

## Setup Instructions

### 1. Start MongoDB with Docker Compose

```bash
# Copy environment variables
cp .env.example .env

# Start MongoDB and Mongo Express
docker-compose up -d

# Verify services are running
docker-compose ps
```

### 2. Load the Schema

```bash
# Connect to MongoDB container and create collections
docker exec -i mongodb mongosh -u admin -p strongpassword123 < mongodb-schema.js
```

### 3. Load Sample Data

```bash
# Insert sample data with Israeli names
docker exec -i mongodb mongosh -u admin -p strongpassword123 < mongodb-sample-data.js
```

## Accessing the Database

### Using Mongo Express Web UI

1. Open browser: http://localhost:8081
2. Login with credentials from `.env` file (default: admin/admin123)
3. Navigate to `clinic` database
4. Browse collections: doctors, patients, schedules, appointments, caseHistory

### Using mongosh (MongoDB Shell)

```bash
# Connect to MongoDB
docker exec -it mongodb mongosh -u admin -p strongpassword123

# Switch to clinic database
use clinic

# Example queries
db.doctors.find().pretty()
db.patients.find({gender: "Female"}).pretty()
db.appointments.find({isFollowUp: true}).pretty()
db.caseHistory.find({followUpNeeded: true}).pretty()

# Count documents
db.doctors.countDocuments()
db.appointments.countDocuments({status: "scheduled"})

# Find doctors by specialty
db.doctors.find({specialty: "Cardiology"}).pretty()

# Find appointments for a specific doctor
db.appointments.find({doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1")}).pretty()

# Join-like query (using aggregation)
db.appointments.aggregate([
  {
    $lookup: {
      from: "doctors",
      localField: "doctorId",
      foreignField: "_id",
      as: "doctor"
    }
  },
  {
    $lookup: {
      from: "patients",
      localField: "patientId",
      foreignField: "_id",
      as: "patient"
    }
  },
  { $limit: 5 }
])
```

### Using MongoDB Connection String

```javascript
// For Node.js applications
const connectionString = "mongodb://admin:strongpassword123@localhost:27017/clinic?authSource=admin";

// Using MongoDB Driver
const { MongoClient } = require('mongodb');
const client = new MongoClient(connectionString);

// Using Mongoose
const mongoose = require('mongoose');
mongoose.connect(connectionString);
```

## Data Relationships

- **appointments** reference **doctors** and **patients** via `doctorId` and `patientId`
- **schedules** reference **doctors** via `doctorId`
- **caseHistory** references **appointments**, **doctors**, and **patients**
- Follow-up appointments are linked through `isFollowUp: true` flag and matching patient/doctor IDs

## Key Features

- **Israeli Names**: All sample data uses authentic Israeli names and locations
- **Follow-up System**: Some appointments are marked as follow-ups with corresponding case history
- **Status Tracking**: Appointments have status (scheduled/completed/cancelled)
- **Weekly Schedules**: Doctors have recurring weekly availability patterns
- **Medical Records**: Case history includes diagnosis, prescriptions, and follow-up requirements

## Stopping the Environment

```bash
# Stop services but keep data
docker-compose down

# Stop services and remove all data
docker-compose down -v
```

## Notes

- All ObjectIds are pre-defined for consistent references
- Appointments dates range from December 2025 to January 2026
- Consultation fees are in Israeli Shekels (ILS)
- Phone numbers use Israeli format (+972-xx-xxxxxxx)
- Email addresses use `.co.il` domain for authenticity
