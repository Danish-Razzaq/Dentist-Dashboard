import React from "react";
import {
  MessageCircle,
  Phone,
  Video,
  Star,
  Factory,
  CircleUser,
  Share2,
  Link as LinkIcon,
  Heart,
  CheckCircle2Icon,
  DollarSignIcon,
} from "lucide-react";

// Doctor Profile Component
const DoctorIntro = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border-2 p-6 mb-6 border-primary/20">
      <div className="flex flex-col lg:flex-row gap-6 justify-between ">
        {/* Left side - Doctor Image and Basic Info */}
        <div className="flex  flex-row max-md:flex-col gap-4   items-start  w-full ">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face"
              alt="Dr. Leonor Spears"
              className=" w-48 h-48 rounded-md object-cover border-[3px] border-primary"
            />
          </div>

          <div className=" ">
            <div className=" bg-primary/15  w-fit text-primary text-xs px-2 py-1 rounded-md flex items-center gap-1 mb-2">
              <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              Available
            </div>
            <h2 className="text-sm  text-gray-600 my-1">Good Morning.</h2>
            <h1 className="text-xl font-semibold text-gray-700 mb-3">
              Dr. Leonor Spears
            </h1>
            <p className="text-gray-600 mb-2">MBBS, MS - General Physician</p>
            <p className="text-gray-600 mb-2">
              Speaks: English, French, and Spanish
            </p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-800 text-yellow-800"
                />
              ))}{" "}
              <span className="ml-2  font-bold">3536</span>
            </div>
          </div>
        </div>

        {/* Right side - Stats and Actions */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 w-full  lg:pl-6">
          {/* Online Consultation and Hospital Info */}

          <div className="border border-primary/20 rounded-3xl flex flex-col items-center justify-center gap-2 p-5">
            <div className="border-2 border-primary rounded-full p-2 w-14 h-14 justify-center items-center flex">
              <Heart className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-bold">680</h3>
            <p>Total Patients</p>
            <p className="text-sm text-primary">20% Higher than last week </p>
          </div>
          <div className="border border-primary/20 rounded-3xl flex flex-col items-center justify-center gap-2 p-5">
            <div className="border-2 border-primary rounded-full p-2 w-14 h-14 justify-center items-center flex">
              <CheckCircle2Icon className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-bold">680</h3>
            <p>Total Patients</p>
            <p className="text-sm text-primary">20% Higher than last week </p>
          </div>
          <div className="border border-primary/20 rounded-3xl flex flex-col items-center justify-center gap-2 p-5">
            <div className="border-2 border-primary rounded-full p-2 w-14 h-14 justify-center items-center flex">
              <DollarSignIcon className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-bold">680</h3>
            <p>Total Patients</p>
            <p className="text-sm text-primary">20% Higher than last week </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorIntro;
