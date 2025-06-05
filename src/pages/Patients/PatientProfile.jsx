import React from "react";
import PatientIntro from "./PatientIntro";
import VisitsHistory from "./VisitsHistory";
import { useParams } from "react-router-dom";
import { patientsMokeData } from "../../utils/mokeData";
import CheckupCards from "./CheckupInfoCard";
import PatientsChart from "../DentistDashboard/PatientsChart";
import AppointmentsChart from "../DentistDashboard/AppointmentsChart";
import DoctorVisits from "./DoctorVisits";
import HealthActivityChart from "./HealthActivityChart";
import Timeline from "./Timeline";
import Pharmacy from "./Pharmacy";
import PatientsReports from "./PatientsReports";

const PatientProfile = () => {
  // console.log("PatientIntro component rendered", patientsMokeData);
  const { id } = useParams();
  const singlePatient = patientsMokeData.find((p) => p.id === id);
  // console.log("singlePatient", singlePatient);

  return (
    <div>
      <PatientIntro singlePatient={singlePatient} />
      <VisitsHistory singlePatient={singlePatient} />
      <CheckupCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <AppointmentsChart />
        <PatientsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <div className="p-2 border border-primary/20  rounded ">
          <DoctorVisits doctorLists={singlePatient} title="Doctor Visits" />
        </div>
        <div className="p-2 border border-primary/20  rounded">
          {/* <DoctorVisits doctorLists={singlePatient} title="Reports" /> */}
          <PatientsReports />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <HealthActivityChart />
          <Pharmacy />
          <Timeline />
      </div>
    </div>
  );
};

export default PatientProfile;
