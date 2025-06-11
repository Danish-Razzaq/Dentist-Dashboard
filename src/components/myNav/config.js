import {
  LayoutDashboard,
  CalendarCheck2,
  Users,
  UserCircle2,
  ShieldUser, 
  CalendarCheck2Icon,
  LayoutPanelLeft,
  Receipt,
} from "lucide-react";

const navConfig = [
  {
    title: "Dentist Admin",
    path: "/",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    title: "Dentist Dashboard",
    path: "/dentistdashboard",
    icon: LayoutPanelLeft,
  },
  // {
  //   title: "Dentist Clinics",
  //   path: "/clinics",
  //   icon: Hospital,
  // },
  {
    title: "Appointments",
    icon: CalendarCheck2,
    group: "appointments",
    children: [
      {
        title: "Appointments ",
        path: "/appointments",
        // icon: CalendarCheck2Icon,
      },
      {
        title: "Appointment Calendar",
        path: "/appointmentCalendar",
        icon: CalendarCheck2Icon,
      },
      {
        title: "Appointment List",
        path: "/appointmentList",
        icon: CalendarCheck2Icon,
      },
    ],
  },


  {
    title: "Patients",
    icon: UserCircle2,
    path: "/patients",
    // group: "patients",
    // children: [
    //   {
    //     title: "Patients",
    //     path: "/patients",
    //     icon: UserCircle2,
    //     },
    //     {
    //       title: 'Patients List',
    //       path: '/patientslist',
    //       icon: UserCircle2,
    //     }
    //   ]
    },

  {
    title: "Doctors",
    path: "/doctors",
    icon: ShieldUser,
  },
  {
    title: "Invoices",
    path: "/invoice",
    icon: Receipt,
  }
  ,
  {
    title: "Staff",
    path: "/staff",
    icon: Users ,
  }
];

export default navConfig;
