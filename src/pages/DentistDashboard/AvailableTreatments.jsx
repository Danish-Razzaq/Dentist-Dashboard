import React from "react";

const AvailableTreatments = () => {
  const treatments = [
    {
      id: 1,
      name: "Cardiology",
      src: "/images/liver.svg",
      color: "text-red-500",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
    },
    {
      id: 2,
      name: "Orthopedic",
      src: "/images/bone.svg",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 3,
      name: "Neurology",
      src: "/images/kidney.svg",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 4,
      name: "Dentist",
      src: "/images/emergency.svg",
      color: "text-green-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 5,
      name: "Pediatrics",
      src: "/images/stomach.svg",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
    },
    {
      id: 6,
      name: "Infusion",
      src: "/images/infusion.svg",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
    },
    {
      id: 7,
      name: "Lungs",
      src: "/images/lungs.svg",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      hoverColor: "hover:bg-teal-100",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-primary/20">
      <h2 className="text-xl  text-gray-800 mb-6">Available Treatments</h2>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"> */}
      <div className="flex flex-wrap justify-center gap-4">
        {treatments.map((treatment) => {
          return (
            <div
              key={treatment.id}
              className={`flex flex-col items-center p-4 px-8 rounded-xl transition-colors cursor-pointer group 
                hover:border-primary/50 border-2 border-primary/20
                `}
            >
              {/* Icon */}
              <div className="mb-3">
                <img
                  src={treatment.src}
                  alt={treatment.name}
                  className="w-12 h-12 mb-2"
                />
              </div>

              {/* Treatment Name */}
              <span className="text-sm font-medium text-gray-700 text-center">
                {treatment.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableTreatments;
