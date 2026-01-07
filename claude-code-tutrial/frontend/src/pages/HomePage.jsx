import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Calendar } from 'lucide-react';
import { doctors } from '@/lib/mockData';

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    const specialties = [...new Set(doctors.map(d => d.specialty))];

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty ? doctor.specialty === selectedSpecialty : true;
        return matchesSearch && matchesSpecialty;
    });

    return (
        <div className="space-y-8">
            {/* Hero / Search Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center space-y-6">
                <h1 className="text-3xl font-bold text-slate-900">Find the Right Doctor for You</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Book appointments with the best specialists in Israel. Simple, fast, and reliable.
                </p>

                <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by doctor name or specialty..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                        <option value="">All Specialties</option>
                        {specialties.map(spec => (
                            <option key={spec} value={spec}>{spec}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Doctor List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map(doctor => (
                    <div key={doctor._id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-100"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-900">{doctor.name}</h3>
                                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mt-1">
                                        {doctor.specialty}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 line-clamp-2">
                                {doctor.profileDescription}
                            </p>

                            <div className="flex items-center text-sm text-slate-500 gap-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>4.8</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Tel Aviv</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{doctor.experienceYears} Years</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="font-bold text-slate-900">₪{doctor.consultationFee} <span className="text-xs font-normal text-slate-500">/ visit</span></span>
                                <Link
                                    to={`/doctor/${doctor._id}`}
                                    className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
