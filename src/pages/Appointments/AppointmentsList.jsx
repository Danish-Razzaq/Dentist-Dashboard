import React, { useState } from "react";
import { Search, Filter, Calendar, Grid3X3, Eye, Settings } from "lucide-react";
import { Link } from "react-router-dom";
const AppointmentsList = () => {
  const [appointments, setAppointments] = useState();
  console.log("Appointments:", appointments);


  const handlePaymentStatusChange = (index, value) => {
    console.log("Payment status changed:", index, value);
  const updated = [...appointments];
  console.log("Updated appointments:", updated);
  updated[index].status = value;
  setAppointments(updated);
};

const handleAppointmentStatusChange = (index, value) => {
  const updated = [...appointments];
  updated[index].appointmentStatus = value;
  setAppointments(updated);
};


  const appointmentsMokeData = [
    {
      id: "PT0001",
      patient: "Mcdowell",
      type: "Direct Visit",
      time: "10:30AM",
      email: "mcdowell@test.com",
      phone: "9876543210",
      status: "Paid",
      appointmentStatus: "Cancelled",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: "PT0002",
      patient: "Johana",
      type: "Video Consultation",
      time: "11:00AM",
      email: "johana@test.com",
      phone: "9876543210",
      status: "Paid",
      appointmentStatus: "Postponed",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: "PT0003",
      patient: "Braun",
      type: "Direct Visit",
      time: "11:30AM",
      email: "braun@test.com",
      phone: "9876543210",
      status: "Pending",
      appointmentStatus: "Filled",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: "PT0004",
      patient: "Mcdowell",
      type: "Direct Visit",
      time: "12:00PM",
      email: "braun@test.com",
      phone: "9876543210",
      status: "Paid",
      appointmentStatus: "Cancelled",
      status: "Pending",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: "APT242",
      patient: "Johana",
      type: "Video Consultation",
      time: "11:00AM",
      email: "johana@test.com",
      appointmentStatus: "Postponed",
      phone: "9876543210",
      status: "Paid",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center flex-wrap  gap-4 justify-between w-full">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-blue-100/90 text-blue-800 p-2 rounded-lg text-sm font-medium">
                Upcoming{" "}
                <span className="bg-blue-800 py-1 px-2 rounded-md text-white">
                  9
                </span>
              </span>
              <span className="bg-red-100/90 text-red-800 p-2 rounded-lg text-sm font-medium">
                Cancelled Upcoming{" "}
                <span className="bg-red-800 py-1 px-2 rounded-md text-white">
                  2
                </span>
              </span>
              <span className="bg-orange-100 text-orange-800 p-2 rounded-lg text-sm font-medium">
                Completed Upcoming{" "}
                <span className="bg-orange-800 py-1 px-2 rounded-md text-white">
                  21
                </span>
              </span>
            </div>
            <button className="btn-secondary">
              My Patient List
            </button>
          </div>
        </div>
      </div>

      {/* Appointments Header */}
      <div className="p-6 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center flex-wrap  sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Appointments</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Grid3X3 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

  <div className="overflow-x-auto">
  <table className="min-w-full table-auto text-sm">
    <tbody>
      {appointmentsMokeData.map((appointment, index) => (
        <tr
          key={appointment.id}
          className="border-b border-gray-200 hover:bg-gray-50"
        >
          {/* Avatar + Name */}
          <td className="flex items-center gap-4 py-4 pr-4">
            <img
              src={appointment.avatar}
              alt={appointment.patient}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <p className="text-primary font-semibold">#{appointment.id}</p>
              <p className="font-medium text-gray-800">{appointment.patient}</p>
            </div>
          </td>

          {/* Today + Type */}
          <td className="py-4 px-2">
            <p className="text-primary font-medium">Today</p>
            <p className="text-gray-800">{appointment.type}</p>
          </td>

          {/* Time */}
          <td className="py-4 px-2">
            <p className="text-primary font-medium">Time</p>
            <p className="text-gray-800">{appointment.time}</p>
          </td>

          {/* Contact Info */}
          <td className="py-4 px-2">
            <p className="text-primary">{appointment.email}</p>
            <p className="text-gray-600">📞 {appointment.phone}</p>
          </td>

          {/* Payment Status (Dropdown) */}
          <td className="py-4 px-2">
            <span className="text-primary text-sm font-medium">Payment:</span>
            <select
              value={appointment.status}
              onChange={(e) =>
                handlePaymentStatusChange(index, e.target.value)
              }
              className="block mt-1 w-full border border-gray-300 rounded px-2 py-1 text-xs font-medium bg-white text-gray-800 focus:outline-none"
            >
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </td>

          {/* Appointment Status (Dropdown) */}
          <td className="py-4 px-2">
            <span className="text-primary text-sm font-medium">Appointment:</span>
            <select
              value={appointment.appointmentStatus}
              onChange={(e) =>
                handleAppointmentStatusChange(index, e.target.value)
              }
              className={`block mt-1 w-full border border-gray-300 rounded px-2 py-1 text-xs font-semibold bg-white text-gray-800 focus:outline-none`}
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Postponed">Postponed</option>
              <option value="Filled">Filled</option>
              <option value="No-show">No-show</option>
            </select>
          </td>

          {/* Actions */}
          <td className="py-4 px-2 flex items-center gap-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              <Eye className="w-4 h-4 text-primary" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              <Settings className="w-4 h-4 text-primary" />
            </button>
            <Link
              to={`/patient/${appointment.id}`}
              className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-lg hover:bg-primary/20 transition"
            >
              Details
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    </div>
  );
};

export default AppointmentsList;
