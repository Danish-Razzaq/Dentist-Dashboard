import React from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { CalendarDays } from 'lucide-react';

const appointments = [
  {
    name: "Lesley Chaney",
    category: "Laboratory",
    time: "9:00",
    color: "bg-yellow-400",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
  },
  {
    name: "Darcy May",
    category: "Emergency",
    time: "9:30",
    color: "bg-purple-500",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
  },
  {
    name: "Monroe Barron",
    category: "Emergency",
    time: "9:30",
    color: "bg-yellow-500",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
  },
  {
    name: "Allen Roth",
    category: "Appointment",
    time: "9:00",
    color: "bg-red-400",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
  },
];

const featuredDoctor = {
  name: "Dr. Tobias Wong",
  specialty: "Dentist",
  time: "Monday, 20th 9AM - 2PM",
  avatar: "https://m.media-amazon.com/images/I/31Cd9UQp6eL.jpg",
};

const AppointmetsCalendor = () => {
  return (
    <div className="border-primary/25 border-2 rounded-lg p-4 bg-white w-full">
      <h1 className="text-xl font-semibold mb-4">Appointments</h1>

      {/* Calendar */}
      <div className="rounded-lg overflow-x-auto shadow border flex  border-primary/20 mb-4 w-full">
  <Calendar
    date={new Date()}
    onChange={(date) => console.log(date)}
    className="w-fit mx-auto"
    color="#4A90E2"
    rangeColors={["#4A90E2"]}
    showDateDisplay={false}
  />
</div>


      {/* Appointment List */}
      <div className="flex flex-col gap-3">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-lg px-3 py-2 hover:bg-primary/5 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={appt.avatar}
                alt={appt.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{appt.name}</p>
                <p className="text-xs text-gray-500">{appt.category}</p>
              </div>
            </div>
            <div
              className={`text-xs text-white px-2 py-1 rounded font-semibold ${appt.color}`}
            >
              {appt.time}
            </div>
          </div>
        ))}

        {/* Featured Doctor */}
        <div className="bg-primary text-white rounded-lg p-4 mt-3 flex items-start gap-3">
          <img
            src={featuredDoctor.avatar}
            alt={featuredDoctor.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{featuredDoctor.name}</p>
            <p className="text-sm">{featuredDoctor.specialty}</p>
            <div className="bg-white/20 text-white text-xs mt-2 px-2 py-1 rounded w-fit">
              {featuredDoctor.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmetsCalendor;
