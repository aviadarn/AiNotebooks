import React, { useState } from 'react';
import { X, Calendar, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookingModal({ isOpen, onClose, doctor, slot, onConfirm }) {
    if (!isOpen) return null;

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleBook = async () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3);
            onConfirm(); // Callback to notify parent
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                    <h2 className="font-semibold text-lg text-slate-800">
                        {step === 3 ? 'Booking Confirmed' : 'Book Appointment'}
                    </h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100 transition-colors">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                <div className="p-6">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-4">
                                <div className="bg-white p-2 rounded-full shadow-sm">
                                    <Calendar className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{doctor.name}</h3>
                                    <p className="text-sm text-slate-500">{doctor.specialty}</p>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-700">
                                        <Clock className="w-4 h-4" />
                                        <span>{slot?.dayOfWeek}, {slot?.startTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-slate-700">Patient Details</label>
                                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-600 text-sm">
                                    <p className="font-medium text-slate-900">Ariel Cohen (You)</p>
                                    <p>ariel.cohen@email.co.il</p>
                                    <p>+972-52-1111111</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Continue
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 text-center">
                            <h3 className="text-xl font-bold text-slate-900">Confirm Booking?</h3>
                            <p className="text-slate-500">
                                You are about to book an appointment with <strong>{doctor.name}</strong> on <strong>{slot?.dayOfWeek} at {slot?.startTime}</strong>.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-3 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleBook}
                                    disabled={isSubmitting}
                                    className="flex-1 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Booking...' : 'Confirm'}
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-4 space-y-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Success!</h3>
                                <p className="text-slate-500 mt-2">
                                    Your appointment has been booked successfully. A confirmation email has been sent to you.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors mt-4"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
