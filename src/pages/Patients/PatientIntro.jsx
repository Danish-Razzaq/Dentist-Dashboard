import React from "react";

import {
  ArrowUpRight,
  CalendarClock,
  CalendarPlus2,
  CircleUserRound,
  Droplet,
  ShieldCheck,
  Venus,
} from "lucide-react";

const PatientIntro = ({singlePatient}) => {

  return (
    <div className="bg-white border border-primary/30 rounded-lg lg:p-6 p-4  mb-4 flex justify-center">
      {/* Patients intro part */}
      <div>
        <div className="flex gap-4  flex-wrap">
          <div className="flex  items-center gap-4">
            <div className="bg-primary/15 p-4 w-16 h-16 rounded-full items-center flex justify-center ">
              <CircleUserRound className="w-7 h-7 text-primary" />
            </div>
            <span>
              <h1 className="text-2xl font-extralight">{singlePatient.name}</h1>
              <p className="">Name</p>
            </span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="bg-primary/15 p-4 w-16 h-16 rounded-full items-center flex justify-center ">
              <Venus className="w-7 h-7 text-primary" />
            </div>
            <span>
              <h1 className="text-2xl font-extralight">
                {singlePatient.gender}
              </h1>
              <p className="">Genter</p>
            </span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="bg-primary/15 p-4 w-16 h-16 rounded-full items-center flex justify-center ">
              <ArrowUpRight className="w-7 h-7 text-primary" />
            </div>
            <span>
              <h1 className="text-2xl font-extralight">{singlePatient.age}</h1>
              <p className="">Age</p>
            </span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="bg-primary/15 p-4 w-16 h-16 rounded-full items-center flex justify-center ">
              <Droplet className="w-7 h-7 text-primary" />
            </div>
            <span>
              <h1 className="text-2xl font-extralight">
                {singlePatient.blood}
              </h1>
              <p className="">Blood Type</p>
            </span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-6">
          <div className="flex mt-12 gap-1 items-center">
            <span className="bg-primary/15 rounded-full p-2 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </span>
            Consulting Doctor:
            <span className="text-primary font-medium ml-2">
              {singlePatient?.doctor || "Dr. Elina"}
            </span>
          </div>
          <div className="flex mt-12 gap-1 items-center">
            <span className="bg-primary/15 rounded-full p-2 text-primary">
              <CalendarPlus2 className="w-6 h-6" />
            </span>
            Recent Visit:
            <span className="text-primary font-medium ml-2">
              {singlePatient?.lastVisit || "28/08/2024"}
            </span>
          </div>
          <div className="flex mt-12 gap-1 items-center">
            <span className="bg-primary/15 rounded-full p-2 text-primary">
              <CalendarClock className="w-6 h-6" />
            </span>
            Upcoming Visit:
            <span className="text-primary font-medium ml-2">
              {singlePatient?.upcomingVist || "28/08/2025"}
            </span>
          </div>
        </div>
      </div>
      <img
        src={singlePatient?.avatar}
        alt={singlePatient?.name}
        className="w-32 h-32 rounded-full  ml-auto"
      />
    </div>
  );
};

export default PatientIntro;
