import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Calendar, Clock, DollarSign, Award, ThumbsUp } from 'lucide-react';
import { doctors, schedules } from '@/lib/mockData';
import BookingModal from '@/components/BookingModal';

export default function DoctorProfile() {
    const { id } = useParams();
    const doctor = doctors.find(d => d._id === id);
    const doctorSchedules = schedules.filter(s => s.doctorId === id);

    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    if (!doctor) return <div className="text-center py-12">Doctor not found</div>;

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
        setIsBookingModalOpen(true);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Doctor Info */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-slate-50 mb-4"
                    />
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h1>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        {doctor.specialty}
                    </span>

                    <div className="flex justify-center gap-6 mt-4 text-sm text-slate-600">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-slate-900 text-lg">4.9</span>
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>Rating</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-slate-900 text-lg">{doctor.experienceYears}+</span>
                            <span>Years</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-slate-900 text-lg">1k+</span>
                            <span>Patients</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
                    <h3 className="font-semibold text-slate-900">About</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {doctor.profileDescription}
                    </p>

                    <div className="pt-4 border-t border-slate-100 open space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span>Tel Aviv Medical Center</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                            <DollarSign className="w-4 h-4 text-slate-400" />
                            <span>₪{doctor.consultationFee} Consultation Fee</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Schedule */}
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Available Slots
                    </h2>

                    {doctorSchedules.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {doctorSchedules.map(schedule => (
                                <button
                                    key={schedule._id}
                                    onClick={() => handleSlotClick(schedule)}
                                    className="flex flex-col items-center p-4 border border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                                >
                                    <span className="font-medium text-slate-900 group-hover:text-primary mb-1">{schedule.dayOfWeek}</span>
                                    <div className="flex items-center gap-1 text-sm text-slate-500">
                                        <Clock className="w-3 h-3" />
                                        <span>{schedule.startTime} - {schedule.endTime}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                            No schedules available for this doctor yet.
                        </div>
                    )}
                </div>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                doctor={doctor}
                slot={selectedSlot}
                onConfirm={() => {
                    // Refresh logic or state update if needed
                }}
            />
        </div>
    );
}
