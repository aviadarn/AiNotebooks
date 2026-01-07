// MongoDB Schema for Doctor Marketplace
// Use database: clinic

use clinic;

// Collections Schema Documentation

/*
1. doctors collection
{
  _id: ObjectId,
  name: String,
  specialty: String (Cardiology, Pulmonology, Gastroenterology, Nutrition, Neurology, Nephrology, Endocrinology),
  phone: String,
  email: String (unique),
  experienceYears: Number,
  consultationFee: Number,
  profileDescription: String,
  createdAt: Date
}

2. patients collection
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String (unique),
  dateOfBirth: Date,
  gender: String,
  address: String,
  createdAt: Date
}

3. schedules collection
{
  _id: ObjectId,
  doctorId: ObjectId (reference to doctors),
  dayOfWeek: String (Monday, Tuesday, etc.),
  startTime: String (HH:MM format),
  endTime: String (HH:MM format),
  slotDuration: Number (minutes),
  isAvailable: Boolean,
  createdAt: Date
}

4. appointments collection
{
  _id: ObjectId,
  doctorId: ObjectId (reference to doctors),
  patientId: ObjectId (reference to patients),
  appointmentDate: Date,
  startTime: String (HH:MM format),
  endTime: String (HH:MM format),
  status: String (scheduled, completed, cancelled),
  isFollowUp: Boolean,
  createdAt: Date
}

5. caseHistory collection
{
  _id: ObjectId,
  appointmentId: ObjectId (reference to appointments),
  patientId: ObjectId (reference to patients),
  doctorId: ObjectId (reference to doctors),
  diagnosis: String,
  prescription: String,
  notes: String,
  followUpNeeded: Boolean,
  followUpDate: Date,
  createdAt: Date
}
*/

// Create collections (MongoDB creates them automatically on first insert)
db.createCollection("doctors");
db.createCollection("patients");
db.createCollection("schedules");
db.createCollection("appointments");
db.createCollection("caseHistory");

print("Collections created successfully for clinic database");
