import React from 'react';
import { Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { appointments, caseHistory } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export default function PatientDashboard() {
    const patientId = "65a1c2d3e4f5a6b7c8d9e0f1"; // Mock Logged in patient
    const myAppointments = appointments.filter(a => a.patientId === patientId);
    const myHistory = caseHistory.filter(c => c.patientId === patientId);

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, Ariel</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upcoming Appointments */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Upcoming Appointments
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {myAppointments.length > 0 ? (
                            <div className="divide-y divide-slate-100">
                                {myAppointments.map(app => (
                                    <div key={app._id} className="p-4 hover:bg-slate-50 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium text-slate-900">{app.doctorName}</h3>
                                                <div className="text-sm text-slate-500 mt-1">
                                                    {new Date(app.appointmentDate).toLocaleDateString()} at {app.startTime}
                                                </div>
                                            </div>
                                            <span className={cn(
                                                "px-2 py-1 text-xs font-medium rounded-full",
                                                app.status === 'scheduled' ? "bg-blue-50 text-blue-700" :
                                                    app.status === 'completed' ? "bg-green-50 text-green-700" :
                                                        "bg-red-50 text-red-700"
                                            )}>
                                                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                No upcoming appointments.
                            </div>
                        )}
                    </div>
                </div>

                {/* Case History */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-secondary" />
                        Case History
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {myHistory.length > 0 ? (
                            <div className="divide-y divide-slate-100">
                                {myHistory.map(record => (
                                    <div key={record._id} className="p-4 hover:bg-slate-50 transition-colors space-y-3">
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm font-medium text-slate-500">
                                                {new Date(record.date).toLocaleDateString()}
                                            </span>
                                            {record.followUpNeeded && (
                                                <span className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                                    <AlertCircle className="w-3 h-3" />
                                                    Follow-up Needed via {record.followUpDate}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-slate-900">Diagnosis</h4>
                                            <p className="text-sm text-slate-600">{record.diagnosis}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-slate-900">Prescription</h4>
                                            <p className="text-sm text-slate-600 font-mono bg-slate-50 p-2 rounded mt-1">
                                                {record.prescription}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                No history records found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
