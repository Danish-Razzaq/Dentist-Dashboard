import OverViewCards from "./OverViewCards";
import DoctorsList from "./DoctorsList";
import AppointmetsCalendor from "./AppointmetsCalendor";
import RevenueChart from "./RevenueChart";
import PatientsOverview from "./PatientsChart";
import PatientVisits from "./PatientVisits";

const Index = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6 overflow-hidden">
        {/* Left Section: Cards + Doctors List */}
        <div className="w-full  flex flex-col gap-6">
          <OverViewCards />
          <DoctorsList />
          <RevenueChart />
        </div>

        {/* Right Section: Calendar */}
        <div className="w-full xl:w-1/4 ">
          <AppointmetsCalendor />
        </div>
      </div>
      <div className=" mt-6 w-full">
        <PatientsOverview />
        <PatientVisits />
      </div>
    </>
  );
};

export default Index;
