import React from "react";
import Appointments from "./Appointments";
import AvailableTreatments from "./AvailableTreatments";
import ClinicEarnings from "./ClinicEarnings";
import Income from "./Income";
import AppointmentsCard from "./AppointmentsActivities";
import ActivityCard from "./ActivityCard";
import InsuranceCard from "./InsuranceCard";
import PatientsChart from "./PatientsChart";
import AppointmentsChart from "./AppointmentsChart";


const DentistDashboard = () => {
  return (
    <div className="space-y-4 my-2">
      <Appointments />
      <AvailableTreatments />
      <ClinicEarnings />
      <Income />

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
        <AppointmentsCard />
        <ActivityCard />
        <InsuranceCard />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatientsChart />
        <AppointmentsChart />
      </div>
    </div>
  );
};

export default DentistDashboard;
