export const doctors = [
    {
        _id: "65a1b2c3d4e5f6a7b8c9d0e1",
        name: "Dr. David Cohen",
        specialty: "Cardiology",
        phone: "+972-50-1234567",
        email: "david.cohen@clinic.co.il",
        experienceYears: 15,
        consultationFee: 500,
        profileDescription: "Senior Cardiologist specializing in interventional cardiology and heart failure management.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        _id: "65a1b2c3d4e5f6a7b8c9d0e2",
        name: "Dr. Sarah Levi",
        specialty: "Cardiology",
        phone: "+972-50-1234568",
        email: "sarah.levi@clinic.co.il",
        experienceYears: 10,
        consultationFee: 450,
        profileDescription: "Specialist in non-invasive cardiology and preventive heart care.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        _id: "65a1b2c3d4e5f6a7b8c9d0e3",
        name: "Dr. Yosef Mizrahi",
        specialty: "Pulmonology",
        phone: "+972-50-1234569",
        email: "yosef.mizrahi@clinic.co.il",
        experienceYears: 12,
        consultationFee: 400,
        profileDescription: "Expert in respiratory diseases, asthma, and COPD management.",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        _id: "65a1b2c3d4e5f6a7b8c9d0e5",
        name: "Dr. Moshe Biton",
        specialty: "Gastroenterology",
        phone: "+972-50-1234571",
        email: "moshe.biton@clinic.co.il",
        experienceYears: 18,
        consultationFee: 480,
        profileDescription: "Senior gastroenterologist specializing in liver diseases and endoscopy.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        _id: "65a1b2c3d4e5f6a7b8c9d0e7",
        name: "Dr. Noa Shapiro",
        specialty: "Nutrition",
        phone: "+972-50-1234573",
        email: "noa.shapiro@clinic.co.il",
        experienceYears: 7,
        consultationFee: 300,
        profileDescription: "Clinical nutritionist specializing in diabetes and weight management.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300"
    }
];

export const schedules = [
    {
        _id: "sched1",
        doctorId: "65a1b2c3d4e5f6a7b8c9d0e1",
        dayOfWeek: "Monday",
        startTime: "09:00",
        endTime: "13:00",
        slotDuration: 30,
        isAvailable: true
    },
    {
        _id: "sched2",
        doctorId: "65a1b2c3d4e5f6a7b8c9d0e1",
        dayOfWeek: "Wednesday",
        startTime: "09:00",
        endTime: "13:00",
        slotDuration: 30,
        isAvailable: true
    },
    {
        _id: "sched3",
        doctorId: "65a1b2c3d4e5f6a7b8c9d0e2",
        dayOfWeek: "Tuesday",
        startTime: "10:00",
        endTime: "14:00",
        slotDuration: 30,
        isAvailable: true
    }
];

export const patients = [
    {
        _id: "65a1c2d3e4f5a6b7c8d9e0f1",
        name: "Ariel Cohen",
        phone: "+972-52-1111111",
        email: "ariel.cohen@email.co.il",
        dateOfBirth: "1985-03-15",
        gender: "Male"
    }
];

export const appointments = [
    {
        _id: "appt1",
        doctorId: "65a1b2c3d4e5f6a7b8c9d0e1",
        patientId: "65a1c2d3e4f5a6b7c8d9e0f1",
        appointmentDate: "2026-01-15T09:00:00Z",
        startTime: "09:00",
        endTime: "09:30",
        status: "scheduled",
        isFollowUp: false,
        doctorName: "Dr. David Cohen",
        patientName: "Ariel Cohen"
    }
];

export const caseHistory = [
    {
        _id: "case1",
        patientId: "65a1c2d3e4f5a6b7c8d9e0f1",
        doctorId: "65a1b2c3d4e5f6a7b8c9d0e1",
        date: "2025-12-15",
        diagnosis: "Hypertension",
        prescription: "Ramipril 5mg daily",
        notes: "BP 150/95. Advised salt reduction.",
        followUpNeeded: true,
        followUpDate: "2026-01-15"
    }
];
