import React, { useState } from 'react';

const Appointments = () => {
  const [selectedDay, setSelectedDay] = useState('Sunday');
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const appointments = [
    {
      id: 1,
      name: 'Alisha Gordon',
      service: 'Dentures',
      time: '8:00',
      avatar: 'AG',
      bgColor: 'bg-cyan-500'
    },
    {
      id: 2,
      name: 'Brock Hicks',
      service: 'Orthodontics',
      time: '8:50',
      avatar: 'BH',
      bgColor: 'bg-indigo-500'
    },
    {
      id: 3,
      name: 'Mindy Spears',
      service: 'Tooth Filling',
      time: '9:00',
      avatar: 'MS',
      bgColor: 'bg-amber-600'
    },
    {
      id: 4,
      name: 'Katina Walker',
      service: 'Teeth Whitening',
      time: '9:30',
      avatar: 'KW',
      bgColor: 'bg-yellow-500'
    },
    {
      id: 5,
      name: 'Trevor Atkins',
      service: 'Dental Braces',
      time: '10:00',
      avatar: 'TA',
      bgColor: 'bg-cyan-500'
    },
    {
      id: 6,
      name: 'Gracie Lam',
      service: 'Invisalign',
      time: '10:30',
      avatar: 'GL',
      bgColor: 'bg-pink-500'
    },
    {
      id: 7,
      name: 'Darla Velasquez',
      service: 'Check up',
      time: '11:00',
      avatar: 'DV',
      bgColor: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 pt-0 border border-primary/20">
      {/* Day Selector */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-b-lg text-sm font-medium transition-colors ${
              selectedDay === day
                ? 'bg-secondary text-white'
                : 'bg-secondary/15 text-gray-600 hover:bg-secondary/30'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Appointments Section */}
      <div>
        <h2 className="text-xl  text-gray-800 mb-6 text-center">Appointments</h2>
        
        {/* Appointments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  ">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-content-start gap-3 px-3 py-2 rounded-lg border border-primary/20 hover:shadow-md transition-shadow "
            >
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full ${appointment.bgColor} flex items-center justify-center text-white text-sm font-medium`}>
                {appointment.avatar}
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm truncate">
                  {appointment.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {appointment.service}
                </p>
              </div>
              
              {/* Time Badge */}
              <div className="flex-shrink-0 -mt-5">
                <span className={`p-1 rounded text-[10px]  text-white ${
                  appointment.time === '8:00' ? 'bg-red-500' :
                  appointment.time === '8:50' ? 'bg-indigo-500' :
                  appointment.time === '9:00' ? 'bg-green-500' :
                  appointment.time === '9:30' ? 'bg-blue-500' :
                  appointment.time === '10:00' ? 'bg-orange-500' :
                  appointment.time === '10:30' ? 'bg-purple-500' :
                  'bg-red-500'
                }`}>
                  {appointment.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;