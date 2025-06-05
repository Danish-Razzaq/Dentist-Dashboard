import { User } from "lucide-react";

const AppointmentsCard = () => {
  const appointments = [
    {
      id: "P0039",
      name: "Tonia Woodard",
      lastAppointment: "20 Sept 2024",
      avatar:
        "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient1.png",
      urgent: true,
    },
    {
      id: "P0063",
      name: "Roseann Kane",
      lastAppointment: "26 Sept 2024",
      avatar:
        "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient5.png",
      urgent: true,
    },
    {
      id: "P0012",
      name: "Lillie Mccall",
      lastAppointment: "30 Sept 2024",
      avatar:
        "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient3.png",
      urgent: true,
    },
    {
      id: "P0045",
      name: "Dale Mccullough",
      lastAppointment: "05 Oct 2024",
      avatar:
        "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient5.png",
      urgent: true,
    },
    {
      id: "P0028",
      name: "Michele Mcclain",
      lastAppointment: "10 Oct 2024",
      avatar:
        "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient1.png",
      urgent: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 border-primary/20">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Appointments</h2>
      <div className="space-y-4 overflow-y-scroll h-96">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center space-x-4 border border-primary/20 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
              {/* <User className="w-6 h-6 text-white" /> */}
              <img
                src={appointment.avatar}
                alt={appointment.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{appointment.name}</h3>
              <p className="text-sm text-gray-500">
                Last Appointment {appointment.lastAppointment}
              </p>
              <p className="text-sm text-primary">
                Patient ID : {appointment.id}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Need an appointment urgent.
              </p>
              <div className="flex space-x-2 pt-2">
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
                  Approve
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsCard;
