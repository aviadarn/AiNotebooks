"""
Test suite for Doctor Marketplace API
Run after starting the Flask server with: python app.py
"""

import requests
import json
from datetime import datetime, timedelta

# Base URL for API
BASE_URL = 'http://localhost:5001'

# Color codes for terminal output
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'


def print_test_header(test_name):
    """Print formatted test header"""
    print(f"\n{BLUE}{'=' * 60}{RESET}")
    print(f"{BLUE}TEST: {test_name}{RESET}")
    print(f"{BLUE}{'=' * 60}{RESET}")


def print_result(success, message):
    """Print test result"""
    if success:
        print(f"{GREEN}✓ PASS: {message}{RESET}")
    else:
        print(f"{RED}✗ FAIL: {message}{RESET}")


def test_health_check():
    """Test health check endpoint"""
    print_test_header("Health Check")
    try:
        response = requests.get(f'{BASE_URL}/')
        success = response.status_code == 200
        print_result(success, f"Health check returned status {response.status_code}")
        if success:
            print(f"Response: {response.json()}")
        return success
    except Exception as e:
        print_result(False, f"Health check failed: {str(e)}")
        return False


def test_get_all_doctors():
    """Test getting all doctors"""
    print_test_header("Get All Doctors")
    try:
        response = requests.get(f'{BASE_URL}/doctors')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved {len(data)} doctors")
        if success and len(data) > 0:
            print(f"Sample doctor: {data[0]['name']} - {data[0]['specialty']}")
        return success, data
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False, []


def test_get_doctors_by_specialty():
    """Test getting doctors by specialty"""
    print_test_header("Get Doctors by Specialty")
    specialties = ['Cardiology', 'Neurology', 'Pulmonology']
    all_success = True

    for specialty in specialties:
        try:
            response = requests.get(f'{BASE_URL}/doctors/specialty/{specialty}')
            success = response.status_code == 200
            data = response.json()
            print_result(success, f"{specialty}: Found {len(data)} doctors")
            if not success:
                all_success = False
        except Exception as e:
            print_result(False, f"{specialty}: {str(e)}")
            all_success = False

    return all_success


def test_get_all_patients():
    """Test getting all patients"""
    print_test_header("Get All Patients")
    try:
        response = requests.get(f'{BASE_URL}/patients')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved {len(data)} patients")
        if success and len(data) > 0:
            print(f"Sample patient: {data[0]['name']} - {data[0]['email']}")
        return success, data
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False, []


def test_get_all_schedules():
    """Test getting all schedules"""
    print_test_header("Get All Schedules")
    try:
        response = requests.get(f'{BASE_URL}/schedules')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved {len(data)} schedules")
        if success and len(data) > 0:
            print(f"Sample schedule: {data[0]['dayOfWeek']} {data[0]['startTime']}-{data[0]['endTime']}")
        return success, data
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False, []


def test_get_schedules_by_doctor(doctor_id):
    """Test getting schedules by doctor"""
    print_test_header("Get Schedules by Doctor")
    try:
        response = requests.get(f'{BASE_URL}/schedules/doctor/{doctor_id}')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Doctor {doctor_id}: Found {len(data)} schedules")
        if success and len(data) > 0:
            for schedule in data[:3]:  # Show first 3
                print(f"  - {schedule['dayOfWeek']}: {schedule['startTime']}-{schedule['endTime']}")
        return success
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False


def test_get_schedules_by_specialty():
    """Test getting schedules by specialty"""
    print_test_header("Get Schedules by Specialty")
    specialties = ['Cardiology', 'Nutrition']
    all_success = True

    for specialty in specialties:
        try:
            response = requests.get(f'{BASE_URL}/schedules/specialty/{specialty}')
            success = response.status_code == 200
            data = response.json()
            print_result(success, f"{specialty}: Found {len(data)} schedules")
            if not success:
                all_success = False
        except Exception as e:
            print_result(False, f"{specialty}: {str(e)}")
            all_success = False

    return all_success


def test_get_doctors_by_slot():
    """Test getting doctors by time slot"""
    print_test_header("Get Doctors by Time Slot")
    test_cases = [
        ('Monday', '09:00'),
        ('Wednesday', '14:00'),
        ('Friday', '10:00')
    ]
    all_success = True

    for day, time in test_cases:
        try:
            response = requests.get(f'{BASE_URL}/doctors/slot?dayOfWeek={day}&time={time}')
            success = response.status_code == 200
            data = response.json()
            print_result(success, f"{day} at {time}: Found {len(data)} available doctors")
            if not success:
                all_success = False
        except Exception as e:
            print_result(False, f"{day} at {time}: {str(e)}")
            all_success = False

    return all_success


def test_get_all_appointments():
    """Test getting all appointments"""
    print_test_header("Get All Appointments")
    try:
        response = requests.get(f'{BASE_URL}/appointments')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved {len(data)} appointments")
        if success and len(data) > 0:
            print(f"Sample appointment: {data[0]['appointmentDate']} at {data[0]['startTime']}")
        return success, data
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False, []


def test_get_appointments_by_doctor(doctor_id):
    """Test getting appointments by doctor"""
    print_test_header("Get Appointments by Doctor")
    try:
        response = requests.get(f'{BASE_URL}/appointments/doctor/{doctor_id}')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Doctor {doctor_id}: Found {len(data)} appointments")
        if success and len(data) > 0:
            for apt in data[:3]:  # Show first 3
                patient_name = apt.get('patient', {}).get('name', 'Unknown')
                print(f"  - {apt['appointmentDate']} at {apt['startTime']} with {patient_name}")
        return success
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False


def test_get_patients_by_doctor(doctor_id):
    """Test getting patients by doctor"""
    print_test_header("Get Patients by Doctor")
    try:
        response = requests.get(f'{BASE_URL}/patients/doctor/{doctor_id}')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Doctor {doctor_id}: Found {len(data)} patients")
        if success and len(data) > 0:
            for patient in data[:3]:  # Show first 3
                print(f"  - {patient['name']} ({patient['email']})")
        return success
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False


def test_book_appointment(doctor_id, patient_id):
    """Test booking an appointment"""
    print_test_header("Book New Appointment")
    try:
        # Create appointment for tomorrow
        tomorrow = datetime.now() + timedelta(days=1)
        appointment_data = {
            'doctorId': doctor_id,
            'patientId': patient_id,
            'appointmentDate': tomorrow.strftime('%Y-%m-%d'),
            'startTime': '10:00',
            'endTime': '10:30',
            'status': 'scheduled',
            'isFollowUp': False
        }

        response = requests.post(
            f'{BASE_URL}/appointments/book',
            json=appointment_data,
            headers={'Content-Type': 'application/json'}
        )
        success = response.status_code == 201
        data = response.json()
        print_result(success, f"Booking response: {data.get('message', 'Unknown')}")
        if success:
            print(f"Appointment ID: {data.get('_id', 'N/A')}")
            print(f"Doctor: {data.get('doctor', 'N/A')}")
            print(f"Patient: {data.get('patient', 'N/A')}")
            return success, data.get('_id')
        return success, None
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False, None


def test_get_specific_doctor(doctor_id):
    """Test getting a specific doctor"""
    print_test_header("Get Specific Doctor")
    try:
        response = requests.get(f'{BASE_URL}/doctors/{doctor_id}')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved doctor: {data.get('name', 'Unknown')}")
        if success:
            print(f"Specialty: {data.get('specialty', 'N/A')}")
            print(f"Experience: {data.get('experienceYears', 'N/A')} years")
            print(f"Fee: ₪{data.get('consultationFee', 'N/A')}")
        return success
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False


def test_get_case_history():
    """Test getting case history"""
    print_test_header("Get All Case History")
    try:
        response = requests.get(f'{BASE_URL}/case-history')
        success = response.status_code == 200
        data = response.json()
        print_result(success, f"Retrieved {len(data)} case history records")
        if success and len(data) > 0:
            print(f"Sample diagnosis: {data[0].get('diagnosis', 'N/A')}")
        return success
    except Exception as e:
        print_result(False, f"Failed: {str(e)}")
        return False


def run_all_tests():
    """Run all test cases"""
    print(f"\n{YELLOW}{'=' * 60}{RESET}")
    print(f"{YELLOW}DOCTOR MARKETPLACE API TEST SUITE{RESET}")
    print(f"{YELLOW}{'=' * 60}{RESET}")

    results = []

    # Test 1: Health check
    results.append(test_health_check())

    # Test 2: Get all doctors
    success, doctors = test_get_all_doctors()
    results.append(success)
    doctor_id = doctors[0]['_id'] if doctors else None

    # Test 3: Get doctors by specialty
    results.append(test_get_doctors_by_specialty())

    # Test 4: Get all patients
    success, patients = test_get_all_patients()
    results.append(success)
    patient_id = patients[0]['_id'] if patients else None

    # Test 5: Get all schedules
    success, schedules = test_get_all_schedules()
    results.append(success)

    # Test 6: Get schedules by doctor
    if doctor_id:
        results.append(test_get_schedules_by_doctor(doctor_id))

    # Test 7: Get schedules by specialty
    results.append(test_get_schedules_by_specialty())

    # Test 8: Get doctors by time slot
    results.append(test_get_doctors_by_slot())

    # Test 9: Get all appointments
    success, appointments = test_get_all_appointments()
    results.append(success)

    # Test 10: Get appointments by doctor
    if doctor_id:
        results.append(test_get_appointments_by_doctor(doctor_id))

    # Test 11: Get patients by doctor
    if doctor_id:
        results.append(test_get_patients_by_doctor(doctor_id))

    # Test 12: Get specific doctor
    if doctor_id:
        results.append(test_get_specific_doctor(doctor_id))

    # Test 13: Get case history
    results.append(test_get_case_history())

    # Test 14: Book appointment
    if doctor_id and patient_id:
        success, new_appointment_id = test_book_appointment(doctor_id, patient_id)
        results.append(success)

    # Summary
    print(f"\n{YELLOW}{'=' * 60}{RESET}")
    print(f"{YELLOW}TEST SUMMARY{RESET}")
    print(f"{YELLOW}{'=' * 60}{RESET}")
    total = len(results)
    passed = sum(results)
    failed = total - passed
    print(f"Total Tests: {total}")
    print(f"{GREEN}Passed: {passed}{RESET}")
    print(f"{RED}Failed: {failed}{RESET}")
    print(f"Success Rate: {(passed/total*100):.1f}%")

    if passed == total:
        print(f"\n{GREEN}🎉 All tests passed!{RESET}")
    else:
        print(f"\n{RED}⚠️  Some tests failed. Please review the output above.{RESET}")


if __name__ == '__main__':
    print("\nMake sure the Flask API server is running on http://localhost:5000")
    print("Start the server with: python app.py")
    input("\nPress Enter to start tests...")
    run_all_tests()
