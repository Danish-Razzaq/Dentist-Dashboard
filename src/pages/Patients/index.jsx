import React from 'react';
import DoctorProfile from '../Appointments/DoctorProfile';
import PatientList from './PatientsList'; 

const Patients  = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-50 p-4">
            <div className=" mx-auto">
            <DoctorProfile />
            <div className="mt-8">
              <PatientList />
            </div>
            </div>
        </div>
      
    </div>
  );
}

export default Patients ;
