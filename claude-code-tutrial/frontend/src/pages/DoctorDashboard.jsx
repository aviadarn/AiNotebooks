import React from 'react';
import { Users, CalendarCheck, Clock, Check } from 'lucide-react';
import { appointments, patients } from '@/lib/mockData';

export default function DoctorDashboard() {
    const doctorId = "65a1b2c3d4e5f6a7b8c9d0e1"; // Mock Logged in Doctor

    // Appointments for today (mock logic - showing all for demo purposes or filtering)
    const todaysAppointments = appointments.filter(a => a.doctorId === doctorId && a.status === 'scheduled');

    // Unique patients seen by this doctor
    const myPatientIds = [...new Set(appointments.filter(a => a.doctorId === doctorId).map(a => a.patientId))];
    const myPatients = patients.filter(p => myPatientIds.includes(p._id));

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900">Dr. Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Stats Cards */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                            <CalendarCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Appointments Today</p>
                            <h3 className="text-2xl font-bold text-slate-900">{todaysAppointments.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Total Patients</p>
                            <h3 className="text-2xl font-bold text-slate-900">{myPatients.length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Today's Schedule */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900">Today's Schedule</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {todaysAppointments.length > 0 ? (
                            <div className="divide-y divide-slate-100">
                                {todaysAppointments.map(app => (
                                    <div key={app._id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-slate-100 rounded text-slate-600">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">{app.startTime} - {app.endTime}</p>
                                                <p className="text-sm text-slate-500">{app.patientName}</p>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                            Mark Complete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                No appointments for today.
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Patients */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900">My Patients</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="divide-y divide-slate-100">
                            {myPatients.map(patient => (
                                <div key={patient._id} className="p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium">
                                            {patient.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{patient.name}</p>
                                            <p className="text-xs text-slate-500">{patient.dateOfBirth}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {myPatients.length === 0 && (
                                <div className="p-8 text-center text-slate-500">No patients yet.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
