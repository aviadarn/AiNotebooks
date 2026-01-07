import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DoctorProfile from './pages/DoctorProfile';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="doctor/:id" element={<DoctorProfile />} />
                <Route path="patient-dashboard" element={<PatientDashboard />} />
                <Route path="doctor-dashboard" element={<DoctorDashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
