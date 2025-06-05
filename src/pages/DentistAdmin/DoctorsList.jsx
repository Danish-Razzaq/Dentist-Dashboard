import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

const doctorsMock = [
  {
    id: 1,
    name: "Dr. Lillie Kennedy",
    specialty: "Periodontist",
    experience: 9,
    rating: 5.0,
    image:
      "https://c8.alamy.com/comp/2FJR92X/flat-male-doctor-avatar-in-medical-face-protection-mask-and-stethoscope-healthcare-vector-illustration-people-cartoon-avatar-profile-character-icon-2FJR92X.jpg", // replace with actual images
  },
  {
    id: 2,
    name: "Dr. Kerri Myers",
    specialty: "Endodontist",
    experience: 6,
    rating: 4.9,
    image:
      "https://c8.alamy.com/comp/2FJR92X/flat-male-doctor-avatar-in-medical-face-protection-mask-and-stethoscope-healthcare-vector-illustration-people-cartoon-avatar-profile-character-icon-2FJR92X.jpg",
  },
  {
    id: 3,
    name: "Dr. Tobias Wong",
    specialty: "Orthodontist",
    experience: 8,
    rating: 4.8,
    image:
      "https://c8.alamy.com/comp/2FJR92X/flat-male-doctor-avatar-in-medical-face-protection-mask-and-stethoscope-healthcare-vector-illustration-people-cartoon-avatar-profile-character-icon-2FJR92X.jpg",
  },
];

// DoctorCard component styles
const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-white border border-primary/25 rounded-lg p-4 w-full shadow-sm hover:shadow-md transition ">
      <div className="flex items-center gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-600">{doctor.name}</h4>
          <p className="text-sm text-muted-foreground text-gray-500 ">
            {doctor.specialty} - {doctor.experience} yrs
          </p>
          <div className="flex items-center text-sm  mt-1">
            <Star size={14} className="fill-primary mr-1" />
            {doctor.rating}
          </div>
        </div>
      </div>
      <Link
        to={`/doctors/${doctor.id}`}
        className="text-primary/40 hover:text-primary/15 transition"
        title="View Details of the doctor"
      >
        <ChevronRight size={35} />
      </Link>
    </div>
  );
};

// DoctorsList component styles
const DoctorsList = () => {
  return (
      <div className="border border-primary/25 rounded-lg p-4 w-full shadow-sm ">
      <h2 className="text-lg font-semibold mb-4">Available Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctorsMock.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
