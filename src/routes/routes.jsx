import React from "react";
import Invoice from "../pages/Invoice";
// import AddStaff from "../pages/Staff/AddStaff";
const AddStaff = React.lazy(() => import("../pages/Staff/AddStaff"));
const Staff = React.lazy(() => import("../pages/Staff"));
// import AllAppointmentsList from "../pages/Appointments/AllAppointmentsList";
const AllAppointmentsList = React.lazy(() => import("../pages/Appointments/AllAppointmentsList"));
// import AllPatientsList from "../pages/Patients/AllPatientsList";
const Appointments = React.lazy(() => import("../pages/Appointments"));
const AddAppointment = React.lazy(() => import("../pages/Appointments/BookAppointment"));
const AppointmentCalendar = React.lazy(() => import("../pages/Appointments/AppointmentCalendar"));
const DentistAdmin = React.lazy(() => import("../pages/DentistAdmin"));
const DentistDashboard = React.lazy(() => import("../pages/DentistDashboard"));
const Doctors = React.lazy(() => import("../pages/Doctors"));
const AddDoctor = React.lazy(() => import("../pages/Doctors/addDoctor"));
const DoctorDashboard = React.lazy(() => import("../pages/DoctorsDashboard"));
const Patients = React.lazy(() => import("../pages/Patients"));
const AddPatients = React.lazy(() => import("../pages/Patients/AddPatients"));
const PatientProfile = React.lazy(() => import("../pages/Patients/PatientProfile"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const RoutesLinks = [
  {
    title: "Dashboard",
    path: "/",
    component: DentistAdmin,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Dentist Admin",
    path: "/dentistadmin",
    component: DentistAdmin,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Dentist Dashboard",
    path: "/dentistdashboard",
    component: DentistDashboard,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Appointments",
    path: "/appointments",
    component: Appointments,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Patients",
    path: "/patients",
    component: Patients,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Patient Profile",
    path: "patient/:id",
    component: PatientProfile,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Doctor Dashboard",
    path: "/doctordashboard/:id",
    component: DoctorDashboard,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Doctors",
    path: "/doctors",
    component: Doctors,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Add Doctor",
    path: "/adddoctor",
    component: AddDoctor,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Add Patients",
    path: "/addPatients",
    component: AddPatients,
    exact: true,
    enableStyle: true,
  },
  // {
  //   title: "Patients List",
  //   path: "/patientslist",
  //   component: AllPatientsList,
  //   exact: true,
  //   enableStyle: true,
  // }
  // ,
  {
    title: "Appointment Calendar",
    path: "/appointmentCalendar",
    component: AppointmentCalendar,
    exact: true,
    enableStyle: true,
  },
  {
    title: "Add Appointment",
    path: "/add-appointment",
    component: AddAppointment,
    exact: true,
    enableStyle: true,
  },
{
  title: "Appointments List",
  path: "/appointmentList",
  component: AllAppointmentsList,
  exact: true,
    enableStyle: true,
}  ,
{
  title: "Staff Dashboard",
  path: "/staff",
  component: Staff,
  exact: true,
  enableStyle: true,
},
{
  title: "Invoice",
  path: "/invoice",
  component: Invoice,
  exact: true,
  enableStyle: true,
},
{
  title: "Add Staff",
  path: "/addstaff",
  component: AddStaff,
  exact: true,
  enableStyle: true,
}
,
  {
    title: "Login",
    path: 'login',
    component: Login,
    exact: true,
    enableStyle: false,
  }
];

export default RoutesLinks;
