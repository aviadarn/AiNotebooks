// Sample Data for Doctor Marketplace - MongoDB
// Use database: clinic

use clinic;

// Clear existing data (optional - uncomment if needed)
// db.doctors.deleteMany({});
// db.patients.deleteMany({});
// db.schedules.deleteMany({});
// db.appointments.deleteMany({});
// db.caseHistory.deleteMany({});

// Insert Doctors with Israeli names
const doctors = [
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    name: "Dr. David Cohen",
    specialty: "Cardiology",
    phone: "+972-50-1234567",
    email: "david.cohen@clinic.co.il",
    experienceYears: 15,
    consultationFee: 500,
    profileDescription: "Senior Cardiologist specializing in interventional cardiology and heart failure management.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"),
    name: "Dr. Sarah Levi",
    specialty: "Cardiology",
    phone: "+972-50-1234568",
    email: "sarah.levi@clinic.co.il",
    experienceYears: 10,
    consultationFee: 450,
    profileDescription: "Specialist in non-invasive cardiology and preventive heart care.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    name: "Dr. Yosef Mizrahi",
    specialty: "Pulmonology",
    phone: "+972-50-1234569",
    email: "yosef.mizrahi@clinic.co.il",
    experienceYears: 12,
    consultationFee: 400,
    profileDescription: "Expert in respiratory diseases, asthma, and COPD management.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"),
    name: "Dr. Rachel Peretz",
    specialty: "Pulmonology",
    phone: "+972-50-1234570",
    email: "rachel.peretz@clinic.co.il",
    experienceYears: 8,
    consultationFee: 380,
    profileDescription: "Specialist in sleep disorders and critical care pulmonology.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"),
    name: "Dr. Moshe Biton",
    specialty: "Gastroenterology",
    phone: "+972-50-1234571",
    email: "moshe.biton@clinic.co.il",
    experienceYears: 18,
    consultationFee: 480,
    profileDescription: "Senior gastroenterologist specializing in liver diseases and endoscopy.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"),
    name: "Dr. Tamar Friedman",
    specialty: "Gastroenterology",
    phone: "+972-50-1234572",
    email: "tamar.friedman@clinic.co.il",
    experienceYears: 11,
    consultationFee: 420,
    profileDescription: "Expert in inflammatory bowel disease and digestive disorders.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"),
    name: "Dr. Noa Shapiro",
    specialty: "Nutrition",
    phone: "+972-50-1234573",
    email: "noa.shapiro@clinic.co.il",
    experienceYears: 7,
    consultationFee: 300,
    profileDescription: "Clinical nutritionist specializing in diabetes and weight management.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"),
    name: "Dr. Avi Katz",
    specialty: "Nutrition",
    phone: "+972-50-1234574",
    email: "avi.katz@clinic.co.il",
    experienceYears: 9,
    consultationFee: 320,
    profileDescription: "Sports nutrition and therapeutic diet specialist.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"),
    name: "Dr. Eitan Goldstein",
    specialty: "Neurology",
    phone: "+972-50-1234575",
    email: "eitan.goldstein@clinic.co.il",
    experienceYears: 20,
    consultationFee: 550,
    profileDescription: "Senior neurologist with expertise in stroke and epilepsy management.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0ea"),
    name: "Dr. Miriam Ben-David",
    specialty: "Neurology",
    phone: "+972-50-1234576",
    email: "miriam.bendavid@clinic.co.il",
    experienceYears: 13,
    consultationFee: 480,
    profileDescription: "Specialist in headache disorders and movement disorders.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"),
    name: "Dr. Noam Rosenberg",
    specialty: "Nephrology",
    phone: "+972-50-1234577",
    email: "noam.rosenberg@clinic.co.il",
    experienceYears: 16,
    consultationFee: 470,
    profileDescription: "Expert in kidney disease management and dialysis.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0ec"),
    name: "Dr. Leah Weinstein",
    specialty: "Nephrology",
    phone: "+972-50-1234578",
    email: "leah.weinstein@clinic.co.il",
    experienceYears: 10,
    consultationFee: 430,
    profileDescription: "Specialist in kidney transplantation and chronic kidney disease.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"),
    name: "Dr. Uri Schwartz",
    specialty: "Endocrinology",
    phone: "+972-50-1234579",
    email: "uri.schwartz@clinic.co.il",
    experienceYears: 14,
    consultationFee: 460,
    profileDescription: "Specialist in diabetes, thyroid disorders, and hormone imbalances.",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"),
    name: "Dr. Shira Levy",
    specialty: "Endocrinology",
    phone: "+972-50-1234580",
    email: "shira.levy@clinic.co.il",
    experienceYears: 9,
    consultationFee: 410,
    profileDescription: "Expert in pediatric endocrinology and growth disorders.",
    createdAt: new Date()
  }
];

db.doctors.insertMany(doctors);
print("Inserted " + doctors.length + " doctors");

// Insert Patients with Israeli names
const patients = [
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f1"),
    name: "Ariel Cohen",
    phone: "+972-52-1111111",
    email: "ariel.cohen@email.co.il",
    dateOfBirth: new Date("1985-03-15"),
    gender: "Male",
    address: "Tel Aviv, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f2"),
    name: "Maya Levi",
    phone: "+972-52-1111112",
    email: "maya.levi@email.co.il",
    dateOfBirth: new Date("1990-07-22"),
    gender: "Female",
    address: "Jerusalem, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f3"),
    name: "Dan Mizrahi",
    phone: "+972-52-1111113",
    email: "dan.mizrahi@email.co.il",
    dateOfBirth: new Date("1978-11-30"),
    gender: "Male",
    address: "Haifa, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f4"),
    name: "Tal Peretz",
    phone: "+972-52-1111114",
    email: "tal.peretz@email.co.il",
    dateOfBirth: new Date("1995-01-18"),
    gender: "Female",
    address: "Rishon LeZion, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f5"),
    name: "Ronen Biton",
    phone: "+972-52-1111115",
    email: "ronen.biton@email.co.il",
    dateOfBirth: new Date("1982-05-25"),
    gender: "Male",
    address: "Netanya, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f6"),
    name: "Yael Friedman",
    phone: "+972-52-1111116",
    email: "yael.friedman@email.co.il",
    dateOfBirth: new Date("1988-09-12"),
    gender: "Female",
    address: "Be'er Sheva, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f7"),
    name: "Oren Shapiro",
    phone: "+972-52-1111117",
    email: "oren.shapiro@email.co.il",
    dateOfBirth: new Date("1975-12-08"),
    gender: "Male",
    address: "Petah Tikva, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f8"),
    name: "Liora Katz",
    phone: "+972-52-1111118",
    email: "liora.katz@email.co.il",
    dateOfBirth: new Date("1992-04-20"),
    gender: "Female",
    address: "Holon, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0f9"),
    name: "Gal Goldstein",
    phone: "+972-52-1111119",
    email: "gal.goldstein@email.co.il",
    dateOfBirth: new Date("1980-08-14"),
    gender: "Male",
    address: "Ramat Gan, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0fa"),
    name: "Efrat Ben-David",
    phone: "+972-52-1111120",
    email: "efrat.bendavid@email.co.il",
    dateOfBirth: new Date("1987-02-28"),
    gender: "Female",
    address: "Ashdod, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0fb"),
    name: "Itai Rosenberg",
    phone: "+972-52-1111121",
    email: "itai.rosenberg@email.co.il",
    dateOfBirth: new Date("1970-06-10"),
    gender: "Male",
    address: "Rehovot, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0fc"),
    name: "Shani Weinstein",
    phone: "+972-52-1111122",
    email: "shani.weinstein@email.co.il",
    dateOfBirth: new Date("1993-10-05"),
    gender: "Female",
    address: "Herzliya, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0fd"),
    name: "Amir Schwartz",
    phone: "+972-52-1111123",
    email: "amir.schwartz@email.co.il",
    dateOfBirth: new Date("1984-03-17"),
    gender: "Male",
    address: "Kfar Saba, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0fe"),
    name: "Chen Levy",
    phone: "+972-52-1111124",
    email: "chen.levy@email.co.il",
    dateOfBirth: new Date("1991-07-29"),
    gender: "Female",
    address: "Eilat, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e0ff"),
    name: "Boaz Harel",
    phone: "+972-52-1111125",
    email: "boaz.harel@email.co.il",
    dateOfBirth: new Date("1986-11-22"),
    gender: "Male",
    address: "Bat Yam, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e100"),
    name: "Noga Avraham",
    phone: "+972-52-1111126",
    email: "noga.avraham@email.co.il",
    dateOfBirth: new Date("1989-01-14"),
    gender: "Female",
    address: "Hadera, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e101"),
    name: "Omri Dahan",
    phone: "+972-52-1111127",
    email: "omri.dahan@email.co.il",
    dateOfBirth: new Date("1977-05-03"),
    gender: "Male",
    address: "Modiin, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e102"),
    name: "Hila Stein",
    phone: "+972-52-1111128",
    email: "hila.stein@email.co.il",
    dateOfBirth: new Date("1994-09-19"),
    gender: "Female",
    address: "Raanana, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e103"),
    name: "Yuval Azulay",
    phone: "+972-52-1111129",
    email: "yuval.azulay@email.co.il",
    dateOfBirth: new Date("1981-12-26"),
    gender: "Male",
    address: "Ashkelon, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e104"),
    name: "Stav Cohen",
    phone: "+972-52-1111130",
    email: "stav.cohen@email.co.il",
    dateOfBirth: new Date("1990-04-11"),
    gender: "Female",
    address: "Nahariya, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e105"),
    name: "Dor Mizrahi",
    phone: "+972-52-1111131",
    email: "dor.mizrahi@email.co.il",
    dateOfBirth: new Date("1973-08-07"),
    gender: "Male",
    address: "Tiberias, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e106"),
    name: "Lior Malka",
    phone: "+972-52-1111132",
    email: "lior.malka@email.co.il",
    dateOfBirth: new Date("1996-02-23"),
    gender: "Female",
    address: "Akko, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e107"),
    name: "Guy Peretz",
    phone: "+972-52-1111133",
    email: "guy.peretz@email.co.il",
    dateOfBirth: new Date("1979-06-16"),
    gender: "Male",
    address: "Carmiel, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e108"),
    name: "Inbar Biton",
    phone: "+972-52-1111134",
    email: "inbar.biton@email.co.il",
    dateOfBirth: new Date("1992-10-30"),
    gender: "Female",
    address: "Afula, Israel",
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1c2d3e4f5a6b7c8d9e109"),
    name: "Liran Friedman",
    phone: "+972-52-1111135",
    email: "liran.friedman@email.co.il",
    dateOfBirth: new Date("1985-12-04"),
    gender: "Male",
    address: "Kiryat Ata, Israel",
    createdAt: new Date()
  }
];

db.patients.insertMany(patients);
print("Inserted " + patients.length + " patients");

// Insert Schedules (Weekly availability for each doctor)
const schedules = [
  // Dr. David Cohen (Cardiologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"), dayOfWeek: "Monday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"), dayOfWeek: "Wednesday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"), dayOfWeek: "Friday", startTime: "14:00", endTime: "18:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Sarah Levi (Cardiologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"), dayOfWeek: "Tuesday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"), dayOfWeek: "Thursday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"), dayOfWeek: "Saturday", startTime: "09:00", endTime: "12:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Yosef Mizrahi (Pulmonologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"), dayOfWeek: "Monday", startTime: "14:00", endTime: "18:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"), dayOfWeek: "Wednesday", startTime: "14:00", endTime: "18:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"), dayOfWeek: "Friday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Rachel Peretz (Pulmonologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"), dayOfWeek: "Tuesday", startTime: "15:00", endTime: "19:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"), dayOfWeek: "Thursday", startTime: "15:00", endTime: "19:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Moshe Biton (Gastroenterologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"), dayOfWeek: "Monday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"), dayOfWeek: "Wednesday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"), dayOfWeek: "Saturday", startTime: "10:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Tamar Friedman (Gastroenterologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"), dayOfWeek: "Tuesday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"), dayOfWeek: "Thursday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"), dayOfWeek: "Friday", startTime: "14:00", endTime: "17:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Noa Shapiro (Nutritionist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"), dayOfWeek: "Monday", startTime: "11:00", endTime: "15:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"), dayOfWeek: "Wednesday", startTime: "11:00", endTime: "15:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"), dayOfWeek: "Friday", startTime: "11:00", endTime: "15:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },

  // Dr. Avi Katz (Nutritionist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"), dayOfWeek: "Tuesday", startTime: "13:00", endTime: "17:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"), dayOfWeek: "Thursday", startTime: "13:00", endTime: "17:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"), dayOfWeek: "Saturday", startTime: "10:00", endTime: "14:00", slotDuration: 45, isAvailable: true, createdAt: new Date() },

  // Dr. Eitan Goldstein (Neurologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"), dayOfWeek: "Monday", startTime: "09:00", endTime: "12:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"), dayOfWeek: "Thursday", startTime: "09:00", endTime: "12:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"), dayOfWeek: "Saturday", startTime: "14:00", endTime: "17:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Miriam Ben-David (Neurologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ea"), dayOfWeek: "Tuesday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ea"), dayOfWeek: "Friday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Noam Rosenberg (Nephrologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"), dayOfWeek: "Monday", startTime: "15:00", endTime: "19:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"), dayOfWeek: "Wednesday", startTime: "15:00", endTime: "19:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"), dayOfWeek: "Friday", startTime: "15:00", endTime: "19:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Leah Weinstein (Nephrologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ec"), dayOfWeek: "Tuesday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ec"), dayOfWeek: "Thursday", startTime: "09:00", endTime: "13:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Uri Schwartz (Endocrinologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"), dayOfWeek: "Monday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"), dayOfWeek: "Wednesday", startTime: "10:00", endTime: "14:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"), dayOfWeek: "Saturday", startTime: "09:00", endTime: "12:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },

  // Dr. Shira Levy (Endocrinologist)
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"), dayOfWeek: "Tuesday", startTime: "11:00", endTime: "15:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"), dayOfWeek: "Thursday", startTime: "11:00", endTime: "15:00", slotDuration: 30, isAvailable: true, createdAt: new Date() },
  { doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"), dayOfWeek: "Friday", startTime: "14:00", endTime: "18:00", slotDuration: 30, isAvailable: true, createdAt: new Date() }
];

db.schedules.insertMany(schedules);
print("Inserted " + schedules.length + " schedules");

// Insert Appointments (mix of completed and scheduled, including follow-ups)
const appointments = [
  // Completed appointments
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a1"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f1"),
    appointmentDate: new Date("2025-12-15"),
    startTime: "09:00",
    endTime: "09:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a2"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f7"),
    appointmentDate: new Date("2025-12-18"),
    startTime: "09:30",
    endTime: "10:00",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a3"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f2"),
    appointmentDate: new Date("2025-12-16"),
    startTime: "14:00",
    endTime: "14:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a4"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f3"),
    appointmentDate: new Date("2025-12-17"),
    startTime: "10:00",
    endTime: "10:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a5"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f4"),
    appointmentDate: new Date("2025-12-18"),
    startTime: "11:00",
    endTime: "11:45",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a6"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f5"),
    appointmentDate: new Date("2025-12-19"),
    startTime: "09:00",
    endTime: "09:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a7"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f6"),
    appointmentDate: new Date("2025-12-20"),
    startTime: "15:00",
    endTime: "15:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a8"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f8"),
    appointmentDate: new Date("2025-12-20"),
    startTime: "10:00",
    endTime: "10:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0a9"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f9"),
    appointmentDate: new Date("2025-12-21"),
    startTime: "10:00",
    endTime: "10:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0aa"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fa"),
    appointmentDate: new Date("2025-12-22"),
    startTime: "15:00",
    endTime: "15:30",
    status: "completed",
    isFollowUp: false,
    createdAt: new Date()
  },

  // Follow-up appointments (scheduled)
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0ab"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f1"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "09:00",
    endTime: "09:30",
    status: "scheduled",
    isFollowUp: true,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0ac"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f2"),
    appointmentDate: new Date("2026-01-13"),
    startTime: "14:00",
    endTime: "14:30",
    status: "scheduled",
    isFollowUp: true,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0ad"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f3"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "10:00",
    endTime: "10:30",
    status: "scheduled",
    isFollowUp: true,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0ae"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f5"),
    appointmentDate: new Date("2026-01-16"),
    startTime: "09:00",
    endTime: "09:30",
    status: "scheduled",
    isFollowUp: true,
    createdAt: new Date()
  },
  {
    _id: ObjectId("65a1d2e3f4a5b6c7d8e9f0af"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f6"),
    appointmentDate: new Date("2026-01-17"),
    startTime: "15:00",
    endTime: "15:30",
    status: "scheduled",
    isFollowUp: true,
    createdAt: new Date()
  },

  // Regular scheduled appointments
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fb"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "09:00",
    endTime: "09:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fc"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "13:00",
    endTime: "13:45",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ea"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fd"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "10:00",
    endTime: "10:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ec"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fe"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "09:00",
    endTime: "09:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0ff"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "11:00",
    endTime: "11:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e100"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "09:30",
    endTime: "10:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e101"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "10:30",
    endTime: "11:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e102"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "09:00",
    endTime: "09:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e103"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "15:30",
    endTime: "16:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e104"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "10:30",
    endTime: "11:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e6"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e105"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "09:30",
    endTime: "10:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e106"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "11:45",
    endTime: "12:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e8"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e107"),
    appointmentDate: new Date("2026-01-14"),
    startTime: "13:45",
    endTime: "14:30",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e108"),
    appointmentDate: new Date("2026-01-15"),
    startTime: "10:30",
    endTime: "11:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  },
  {
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ee"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e109"),
    appointmentDate: new Date("2026-01-16"),
    startTime: "11:30",
    endTime: "12:00",
    status: "scheduled",
    isFollowUp: false,
    createdAt: new Date()
  }
];

db.appointments.insertMany(appointments);
print("Inserted " + appointments.length + " appointments");

// Insert Case History (for completed appointments with follow-ups needed)
const caseHistory = [
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a1"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f1"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    diagnosis: "Hypertension Stage 2",
    prescription: "Tab. Amlodipine 5mg OD, Tab. Atenolol 50mg OD",
    notes: "Patient has elevated blood pressure 160/100. Started on anti-hypertensive medication. Advised lifestyle modifications including low salt diet and regular exercise.",
    followUpNeeded: true,
    followUpDate: new Date("2026-01-15"),
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a2"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f7"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    diagnosis: "Atrial Fibrillation",
    prescription: "Tab. Warfarin 5mg OD, Tab. Metoprolol 25mg BD",
    notes: "Irregular heart rhythm detected. Started on anticoagulation therapy. Monitor INR levels regularly.",
    followUpNeeded: false,
    followUpDate: null,
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a3"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f2"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    diagnosis: "Chronic Obstructive Pulmonary Disease (COPD)",
    prescription: "Inhaler Tiotropium 18mcg OD, Inhaler Formoterol-Budesonide BD",
    notes: "Patient has persistent cough and breathlessness. Spirometry shows obstruction. Started on bronchodilators. Advised smoking cessation.",
    followUpNeeded: true,
    followUpDate: new Date("2026-01-13"),
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a4"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f3"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e5"),
    diagnosis: "Gastroesophageal Reflux Disease (GERD)",
    prescription: "Tab. Pantoprazole 40mg OD (before breakfast), Tab. Domperidone 10mg TDS",
    notes: "Patient complains of heartburn and acid reflux. Endoscopy shows Grade B esophagitis. Advised dietary modifications and weight loss.",
    followUpNeeded: true,
    followUpDate: new Date("2026-01-15"),
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a5"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f4"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e7"),
    diagnosis: "Type 2 Diabetes Mellitus with Obesity",
    prescription: "Diet plan: 1500 Kcal/day with low glycemic index foods",
    notes: "Patient needs to lose 15kg. Customized meal plan provided with focus on portion control and balanced nutrition. Monitor blood sugar levels.",
    followUpNeeded: false,
    followUpDate: null,
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a6"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f5"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e9"),
    diagnosis: "Migraine with Aura",
    prescription: "Tab. Sumatriptan 50mg (SOS for acute attack), Tab. Propranolol 40mg OD (prophylaxis)",
    notes: "Patient has frequent migraine attacks (4-5 per month). Started on prophylactic therapy. Advised to maintain headache diary.",
    followUpNeeded: true,
    followUpDate: new Date("2026-01-16"),
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a7"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f6"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0eb"),
    diagnosis: "Chronic Kidney Disease Stage 3",
    prescription: "Tab. Telmisartan 40mg OD, Tab. Sodium Bicarbonate 500mg BD, Iron supplements",
    notes: "eGFR 45 ml/min. Blood pressure control essential. Advised low protein diet and adequate hydration. Monitor kidney function.",
    followUpNeeded: true,
    followUpDate: new Date("2026-01-17"),
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a8"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f8"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0ed"),
    diagnosis: "Hypothyroidism",
    prescription: "Tab. Levothyroxine 75mcg OD (empty stomach)",
    notes: "TSH elevated at 12.5 mIU/L. Started on thyroid replacement therapy. Recheck thyroid function after 6 weeks.",
    followUpNeeded: false,
    followUpDate: null,
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0a9"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0f9"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"),
    diagnosis: "Acute Coronary Syndrome",
    prescription: "Tab. Aspirin 75mg OD, Tab. Clopidogrel 75mg OD, Tab. Atorvastatin 40mg OD, Tab. Ramipril 2.5mg OD",
    notes: "Patient had chest pain. ECG shows T wave inversion. Troponin mildly elevated. Started on dual antiplatelet therapy. Scheduled for angiography.",
    followUpNeeded: false,
    followUpDate: null,
    createdAt: new Date()
  },
  {
    appointmentId: ObjectId("65a1d2e3f4a5b6c7d8e9f0aa"),
    patientId: ObjectId("65a1c2d3e4f5a6b7c8d9e0fa"),
    doctorId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e4"),
    diagnosis: "Bronchial Asthma",
    prescription: "Inhaler Salbutamol (SOS), Inhaler Fluticasone-Salmeterol BD",
    notes: "Patient has episodic breathlessness and wheezing. Peak flow meter readings suboptimal. Started on controller medication. Advised to avoid triggers.",
    followUpNeeded: false,
    followUpDate: null,
    createdAt: new Date()
  }
];

db.caseHistory.insertMany(caseHistory);
print("Inserted " + caseHistory.length + " case history records");

print("\n=== Data Import Summary ===");
print("Database: clinic");
print("Collections created: 5");
print("Total doctors: " + db.doctors.countDocuments());
print("Total patients: " + db.patients.countDocuments());
print("Total schedules: " + db.schedules.countDocuments());
print("Total appointments: " + db.appointments.countDocuments());
print("Total case history records: " + db.caseHistory.countDocuments());
print("===========================");
