import React from 'react';
import DoctorProfile from './DoctorProfile';
import AppointmentsList from './AppointmentsList';

const Appointments = () => {
  return (
   <div className="min-h-screen bg-gray-50 p-4">
      <div className=" mx-auto">
        <DoctorProfile />
        <AppointmentsList />
      </div>
    </div>
  );
}

export default Appointments;
