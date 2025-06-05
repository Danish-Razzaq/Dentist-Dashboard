import React from "react";
import GenericTable from "../../components/common/DynamicTable";
import { BadgeX, CircleCheckBig, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

const AllAppointmentsList = () => {
  // #	Patient Name	Age	Consulting Doctor	Department	Date	Time	Disease	Actions

  const columns = [
    { key: "id", header: "# ID" },
    { key: "patientName", header: "Patient Name" },
    { key: "age", header: "Age" },
    { key: "doctor", header: "Consulting Doctor" },
    { key: "department", header: "Department" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "disease", header: "Disease" },
    {
      header: "Actions",
      key: "actions",
      render: ({ row }) => (
        <div className="flex space-x-2 justify-center  ">
          <button className="text-blue-500 hover:text-blue-700 ">
            <CircleCheckBig />
          </button>
          <button className="text-red-500 hover:text-red-700">
          <BadgeX />
          </button>
          <button className="text-green-500 hover:text-green-700">
          <SquarePen />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
        id: "1",
      patientName: "John Doe",
      age: 30,
      doctor: "Dr. Smith",
      department: "Cardiology",
      date: "2023-10-01",
      time: "10:00 AM",
      disease: "Heart Disease",
    },
    {
      id: "2",
      patientName: "Jane Doe",
      age: 25,
      doctor: "Dr. Jones",
      department: "Neurology",
      date: "2023-10-02",
      time: "11:00 AM",
      disease: "Migraine",
    },
    {
      id: "3",
      patientName: "Alice Johnson",
      age: 40,
      doctor: "Dr. Brown",
      department: "Orthopedics",
      date: "2023-10-03",
      time: "12:00 PM",
      disease: "Knee Pain",
    },
    {
      id: "4",
      patientName: "Bob Smith",
      age: 50,
      doctor: "Dr. Taylor",
      department: "Dermatology",
      date: "2023-10-04",
      time: "01:00 PM",
      disease: "Skin Rash",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Appointments</h2>
        <Link to={'/add-appointment'} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80">
          Add Appointment
        </Link>
      </div>
      <div className="overflow-x-auto">
        <GenericTable columns={columns} data={data} pagination={false} />
      </div>
    </div>
  );
};

export default AllAppointmentsList;
