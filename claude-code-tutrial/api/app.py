"""
Doctor Marketplace REST API
A minimalistic Flask API for doctor appointment booking system with MongoDB
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
MONGO_URI = os.getenv('MONGO_URI', 'mongodb://admin:strongpassword123@localhost:27017/clinic?authSource=admin')
client = MongoClient(MONGO_URI)
db = client['clinic']

# Collections
doctors_collection = db['doctors']
patients_collection = db['patients']
schedules_collection = db['schedules']
appointments_collection = db['appointments']
case_history_collection = db['caseHistory']


# Helper function to convert ObjectId to string
def serialize_doc(doc):
    """Convert MongoDB document to JSON-serializable format"""
    if doc is None:
        return None
    if isinstance(doc, list):
        return [serialize_doc(d) for d in doc]
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    for key, value in doc.items():
        if isinstance(value, ObjectId):
            doc[key] = str(value)
        elif isinstance(value, datetime):
            doc[key] = value.isoformat()
    return doc


# ==================== DOCTORS CRUD ====================

@app.route('/doctors', methods=['GET'])
def get_all_doctors():
    """Get all doctors"""
    doctors = list(doctors_collection.find())
    return jsonify(serialize_doc(doctors)), 200


@app.route('/doctors/<doctor_id>', methods=['GET'])
def get_doctor(doctor_id):
    """Get a specific doctor by ID"""
    try:
        doctor = doctors_collection.find_one({'_id': ObjectId(doctor_id)})
        if doctor:
            return jsonify(serialize_doc(doctor)), 200
        return jsonify({'error': 'Doctor not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/doctors', methods=['POST'])
def create_doctor():
    """Create a new doctor"""
    try:
        data = request.get_json()
        data['createdAt'] = datetime.now()
        result = doctors_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id), 'message': 'Doctor created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/doctors/<doctor_id>', methods=['PUT'])
def update_doctor(doctor_id):
    """Update a doctor"""
    try:
        data = request.get_json()
        result = doctors_collection.update_one(
            {'_id': ObjectId(doctor_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Doctor updated successfully'}), 200
        return jsonify({'error': 'Doctor not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/doctors/<doctor_id>', methods=['DELETE'])
def delete_doctor(doctor_id):
    """Delete a doctor"""
    try:
        result = doctors_collection.delete_one({'_id': ObjectId(doctor_id)})
        if result.deleted_count:
            return jsonify({'message': 'Doctor deleted successfully'}), 200
        return jsonify({'error': 'Doctor not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== PATIENTS CRUD ====================

@app.route('/patients', methods=['GET'])
def get_all_patients():
    """Get all patients"""
    patients = list(patients_collection.find())
    return jsonify(serialize_doc(patients)), 200


@app.route('/patients/<patient_id>', methods=['GET'])
def get_patient(patient_id):
    """Get a specific patient by ID"""
    try:
        patient = patients_collection.find_one({'_id': ObjectId(patient_id)})
        if patient:
            return jsonify(serialize_doc(patient)), 200
        return jsonify({'error': 'Patient not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/patients', methods=['POST'])
def create_patient():
    """Create a new patient"""
    try:
        data = request.get_json()
        if 'dateOfBirth' in data:
            data['dateOfBirth'] = datetime.fromisoformat(data['dateOfBirth'].replace('Z', '+00:00'))
        data['createdAt'] = datetime.now()
        result = patients_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id), 'message': 'Patient created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/patients/<patient_id>', methods=['PUT'])
def update_patient(patient_id):
    """Update a patient"""
    try:
        data = request.get_json()
        if 'dateOfBirth' in data:
            data['dateOfBirth'] = datetime.fromisoformat(data['dateOfBirth'].replace('Z', '+00:00'))
        result = patients_collection.update_one(
            {'_id': ObjectId(patient_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Patient updated successfully'}), 200
        return jsonify({'error': 'Patient not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/patients/<patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    """Delete a patient"""
    try:
        result = patients_collection.delete_one({'_id': ObjectId(patient_id)})
        if result.deleted_count:
            return jsonify({'message': 'Patient deleted successfully'}), 200
        return jsonify({'error': 'Patient not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== SCHEDULES CRUD ====================

@app.route('/schedules', methods=['GET'])
def get_all_schedules():
    """Get all schedules"""
    schedules = list(schedules_collection.find())
    return jsonify(serialize_doc(schedules)), 200


@app.route('/schedules/<schedule_id>', methods=['GET'])
def get_schedule(schedule_id):
    """Get a specific schedule by ID"""
    try:
        schedule = schedules_collection.find_one({'_id': ObjectId(schedule_id)})
        if schedule:
            return jsonify(serialize_doc(schedule)), 200
        return jsonify({'error': 'Schedule not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/schedules', methods=['POST'])
def create_schedule():
    """Create a new schedule"""
    try:
        data = request.get_json()
        data['doctorId'] = ObjectId(data['doctorId'])
        data['createdAt'] = datetime.now()
        result = schedules_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id), 'message': 'Schedule created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/schedules/<schedule_id>', methods=['PUT'])
def update_schedule(schedule_id):
    """Update a schedule"""
    try:
        data = request.get_json()
        if 'doctorId' in data:
            data['doctorId'] = ObjectId(data['doctorId'])
        result = schedules_collection.update_one(
            {'_id': ObjectId(schedule_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Schedule updated successfully'}), 200
        return jsonify({'error': 'Schedule not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/schedules/<schedule_id>', methods=['DELETE'])
def delete_schedule(schedule_id):
    """Delete a schedule"""
    try:
        result = schedules_collection.delete_one({'_id': ObjectId(schedule_id)})
        if result.deleted_count:
            return jsonify({'message': 'Schedule deleted successfully'}), 200
        return jsonify({'error': 'Schedule not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== APPOINTMENTS CRUD ====================

@app.route('/appointments', methods=['GET'])
def get_all_appointments():
    """Get all appointments"""
    appointments = list(appointments_collection.find())
    return jsonify(serialize_doc(appointments)), 200


@app.route('/appointments/<appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
    """Get a specific appointment by ID"""
    try:
        appointment = appointments_collection.find_one({'_id': ObjectId(appointment_id)})
        if appointment:
            return jsonify(serialize_doc(appointment)), 200
        return jsonify({'error': 'Appointment not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/appointments', methods=['POST'])
def create_appointment():
    """Create a new appointment"""
    try:
        data = request.get_json()
        data['doctorId'] = ObjectId(data['doctorId'])
        data['patientId'] = ObjectId(data['patientId'])
        if 'appointmentDate' in data:
            data['appointmentDate'] = datetime.fromisoformat(data['appointmentDate'].replace('Z', '+00:00'))
        data['createdAt'] = datetime.now()
        result = appointments_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id), 'message': 'Appointment created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/appointments/<appointment_id>', methods=['PUT'])
def update_appointment(appointment_id):
    """Update an appointment"""
    try:
        data = request.get_json()
        if 'doctorId' in data:
            data['doctorId'] = ObjectId(data['doctorId'])
        if 'patientId' in data:
            data['patientId'] = ObjectId(data['patientId'])
        if 'appointmentDate' in data:
            data['appointmentDate'] = datetime.fromisoformat(data['appointmentDate'].replace('Z', '+00:00'))
        result = appointments_collection.update_one(
            {'_id': ObjectId(appointment_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Appointment updated successfully'}), 200
        return jsonify({'error': 'Appointment not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/appointments/<appointment_id>', methods=['DELETE'])
def delete_appointment(appointment_id):
    """Delete an appointment"""
    try:
        result = appointments_collection.delete_one({'_id': ObjectId(appointment_id)})
        if result.deleted_count:
            return jsonify({'message': 'Appointment deleted successfully'}), 200
        return jsonify({'error': 'Appointment not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== CASE HISTORY CRUD ====================

@app.route('/case-history', methods=['GET'])
def get_all_case_history():
    """Get all case history records"""
    case_history = list(case_history_collection.find())
    return jsonify(serialize_doc(case_history)), 200


@app.route('/case-history/<case_id>', methods=['GET'])
def get_case_history(case_id):
    """Get a specific case history by ID"""
    try:
        case = case_history_collection.find_one({'_id': ObjectId(case_id)})
        if case:
            return jsonify(serialize_doc(case)), 200
        return jsonify({'error': 'Case history not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/case-history', methods=['POST'])
def create_case_history():
    """Create a new case history record"""
    try:
        data = request.get_json()
        data['appointmentId'] = ObjectId(data['appointmentId'])
        data['patientId'] = ObjectId(data['patientId'])
        data['doctorId'] = ObjectId(data['doctorId'])
        if 'followUpDate' in data and data['followUpDate']:
            data['followUpDate'] = datetime.fromisoformat(data['followUpDate'].replace('Z', '+00:00'))
        data['createdAt'] = datetime.now()
        result = case_history_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id), 'message': 'Case history created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/case-history/<case_id>', methods=['PUT'])
def update_case_history(case_id):
    """Update a case history record"""
    try:
        data = request.get_json()
        if 'appointmentId' in data:
            data['appointmentId'] = ObjectId(data['appointmentId'])
        if 'patientId' in data:
            data['patientId'] = ObjectId(data['patientId'])
        if 'doctorId' in data:
            data['doctorId'] = ObjectId(data['doctorId'])
        if 'followUpDate' in data and data['followUpDate']:
            data['followUpDate'] = datetime.fromisoformat(data['followUpDate'].replace('Z', '+00:00'))
        result = case_history_collection.update_one(
            {'_id': ObjectId(case_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Case history updated successfully'}), 200
        return jsonify({'error': 'Case history not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/case-history/<case_id>', methods=['DELETE'])
def delete_case_history(case_id):
    """Delete a case history record"""
    try:
        result = case_history_collection.delete_one({'_id': ObjectId(case_id)})
        if result.deleted_count:
            return jsonify({'message': 'Case history deleted successfully'}), 200
        return jsonify({'error': 'Case history not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== CUSTOM ENDPOINTS ====================

@app.route('/doctors/specialty/<specialty>', methods=['GET'])
def get_doctors_by_specialty(specialty):
    """Get doctors by specialty"""
    doctors = list(doctors_collection.find({'specialty': specialty}))
    return jsonify(serialize_doc(doctors)), 200


@app.route('/schedules/doctor/<doctor_id>', methods=['GET'])
def get_schedules_by_doctor(doctor_id):
    """Get schedules by doctor ID"""
    try:
        schedules = list(schedules_collection.find({'doctorId': ObjectId(doctor_id)}))
        return jsonify(serialize_doc(schedules)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/schedules/specialty/<specialty>', methods=['GET'])
def get_schedules_by_specialty(specialty):
    """Get schedules by specialty"""
    try:
        # First, get all doctors with this specialty
        doctors = list(doctors_collection.find({'specialty': specialty}))
        doctor_ids = [doc['_id'] for doc in doctors]

        # Then get all schedules for these doctors
        schedules = list(schedules_collection.find({'doctorId': {'$in': doctor_ids}}))

        # Enrich schedules with doctor information
        result = []
        for schedule in schedules:
            schedule_data = serialize_doc(schedule)
            doctor = next((d for d in doctors if d['_id'] == schedule['doctorId']), None)
            if doctor:
                schedule_data['doctor'] = serialize_doc(doctor)
            result.append(schedule_data)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/doctors/slot', methods=['GET'])
def get_doctors_by_slot():
    """Get doctors available on a specific day and time"""
    try:
        day_of_week = request.args.get('dayOfWeek')  # e.g., "Monday"
        time = request.args.get('time')  # e.g., "09:00"

        if not day_of_week or not time:
            return jsonify({'error': 'dayOfWeek and time parameters are required'}), 400

        # Find schedules matching the day and time
        schedules = list(schedules_collection.find({
            'dayOfWeek': day_of_week,
            'startTime': {'$lte': time},
            'endTime': {'$gt': time},
            'isAvailable': True
        }))

        # Get unique doctor IDs
        doctor_ids = [schedule['doctorId'] for schedule in schedules]

        # Get doctor details
        doctors = list(doctors_collection.find({'_id': {'$in': doctor_ids}}))

        return jsonify(serialize_doc(doctors)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/appointments/doctor/<doctor_id>', methods=['GET'])
def get_appointments_by_doctor(doctor_id):
    """Get appointments by doctor ID"""
    try:
        appointments = list(appointments_collection.find({'doctorId': ObjectId(doctor_id)}))

        # Enrich with patient information
        result = []
        for appointment in appointments:
            appointment_data = serialize_doc(appointment)
            patient = patients_collection.find_one({'_id': appointment['patientId']})
            if patient:
                appointment_data['patient'] = serialize_doc(patient)
            result.append(appointment_data)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/patients/doctor/<doctor_id>', methods=['GET'])
def get_patients_by_doctor(doctor_id):
    """Get patients by doctor ID (patients who have appointments with this doctor)"""
    try:
        # Find all appointments for this doctor
        appointments = list(appointments_collection.find({'doctorId': ObjectId(doctor_id)}))

        # Get unique patient IDs
        patient_ids = list(set([appointment['patientId'] for appointment in appointments]))

        # Get patient details
        patients = list(patients_collection.find({'_id': {'$in': patient_ids}}))

        return jsonify(serialize_doc(patients)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/appointments/book', methods=['POST'])
def book_appointment():
    """Book an appointment for an existing patient"""
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['doctorId', 'patientId', 'appointmentDate', 'startTime', 'endTime']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'{field} is required'}), 400

        # Verify doctor exists
        doctor = doctors_collection.find_one({'_id': ObjectId(data['doctorId'])})
        if not doctor:
            return jsonify({'error': 'Doctor not found'}), 404

        # Verify patient exists
        patient = patients_collection.find_one({'_id': ObjectId(data['patientId'])})
        if not patient:
            return jsonify({'error': 'Patient not found'}), 404

        # Check if slot is available (no conflicting appointments)
        appointment_date = datetime.fromisoformat(data['appointmentDate'].replace('Z', '+00:00'))
        conflicting_appointment = appointments_collection.find_one({
            'doctorId': ObjectId(data['doctorId']),
            'appointmentDate': appointment_date,
            'startTime': data['startTime'],
            'status': {'$ne': 'cancelled'}
        })

        if conflicting_appointment:
            return jsonify({'error': 'This time slot is already booked'}), 409

        # Create the appointment
        appointment_data = {
            'doctorId': ObjectId(data['doctorId']),
            'patientId': ObjectId(data['patientId']),
            'appointmentDate': appointment_date,
            'startTime': data['startTime'],
            'endTime': data['endTime'],
            'status': data.get('status', 'scheduled'),
            'isFollowUp': data.get('isFollowUp', False),
            'createdAt': datetime.now()
        }

        result = appointments_collection.insert_one(appointment_data)

        return jsonify({
            '_id': str(result.inserted_id),
            'message': 'Appointment booked successfully',
            'doctor': serialize_doc(doctor)['name'],
            'patient': serialize_doc(patient)['name']
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


# ==================== HEALTH CHECK ====================

@app.route('/', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Doctor Marketplace API is running',
        'version': '1.0.0'
    }), 200


# ==================== ERROR HANDLERS ====================

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
