import React from "react";
import DoctorIntro from "./Doctorintro";
import PatientTable from "./PatientTable";
import AppointmentsChart from "../DentistDashboard/AppointmentsChart";
import PatientsChart from "../DentistDashboard/PatientsChart";
import PatientReviws from "./PatientReviews";
import IncomeChart from "./Income";
import AppointmentsCard from "../DentistDashboard/AppointmentsActivities";
import PatientAgeChart from "./PatientAgeChart";
import SurgeriesChart from "./SurgeriesChart";

const DoctorDashboard = () => {
  return (
    <>
      <DoctorIntro />
      <AppointmentsChart />
      <div className="p-4 bg-white border border-primary/20  mt-4 rounded-lg mb-5">
        <h1 className="text-xl font-bold ">Appointments </h1>
        <PatientTable />
      </div>
      <PatientsChart />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 mt-5">
        <PatientReviws />
        <IncomeChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
        <AppointmentsCard />
        <PatientAgeChart />
        <SurgeriesChart />
      </div>
    </>
  );
};

export default DoctorDashboard;
