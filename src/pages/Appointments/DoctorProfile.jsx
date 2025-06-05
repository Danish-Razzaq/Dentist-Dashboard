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
} from "lucide-react";

// Doctor Profile Component
const DoctorProfile = () => {
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
            <p className="text-gray-600 text-sm">
              Location: 9 E 2nd St, New York, NY 30003, USA
            </p>
          </div>
        </div>

        {/* Right side - Stats and Actions */}
        <div className="flex flex-col gap-1 w-full  lg:border-l-2 border-gray-300 lg:pl-6">
          {/* Online Consultation and Hospital Info */}
          <div className="flex items-start max-lg:flex-col-reverse  ">
            <div className="flex flex-col sm:flex-row flex-wrap   gap-x-2 gap-y-0">
              <div className=" p-3  flex   items-center gap-2">
                <div className="flex items-center gap-2  mb-1 bg-primary/15 text-primary rounded-lg p-2 w-fit">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-nowrap">
                  Online Consultation Available
                </span>
              </div>
              <div className=" p-3  flex items-center gap-2">
                <div className="flex items-center gap-2  mb-1 bg-primary/15 text-primary rounded-lg p-2 w-fit">
                  <Factory className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-nowrap">
                  Medflex Medicals & Hospital
                </span>
              </div>
              <div className=" p-3  flex items-center gap-2">
                <div className="flex items-center gap-2  mb-1 bg-primary/15 text-primary rounded-lg p-2 w-fit">
                  <CircleUser className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-nowrap ">
                  {" "}
                  <span className="text-primary font-medium pr-1">99%</span>
                  <span className=" font-sm font-medium">Recommended</span>
                </span>
              </div>
            </div>
            <div className="flex items-center sm:ml-auto gap-2 ">
              <span className="border border-gray-400 rounded-full p-2 bg-gray-50 cursor-pointer">
                <Star className="w-6 h-6  text-primary" />
              </span>
              {/* // icons to link copy */}
              <span className="border border-gray-400 rounded-full p-2 bg-gray-50 cursor-pointer">
                <LinkIcon className="w-6 h-6  text-primary" />
              </span>
              <span className="border border-gray-400 rounded-full p-2 bg-gray-50 cursor-pointer">
                <Share2 className="w-6 h-6  text-primary" />
              </span>
            </div>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 ">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-800 text-yellow-800"
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-900">6680</span>
              <span className="text-gray-600 font-semibold text-sm">
                Reviews
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-1">
            <button className="flex items-center gap-2  p-2 border hover:text-white border-primary rounded-[6px] hover:bg-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Chat</span>
            </button>
            <button className="flex items-center gap-2  p-2 border hover:text-white border-primary rounded-[6px] hover:bg-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Audio Call</span>
            </button>
            <button className="flex items-center gap-2  p-2 border hover:text-white border-primary rounded-[6px] hover:bg-primary transition-colors">
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Video Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
