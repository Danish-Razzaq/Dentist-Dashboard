import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  FileText,
  Calendar,
  Settings,
  Upload,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Clock,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const AddPatients = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const fileInputRef = useRef();

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const genders = ["Male", "Female", "Other"];
  const maritalStatus = ["Single", "Married", "Divorced", "Widowed"];

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission
  };

  return (
    <>
      <div className=" mx-auto p-6 bg-white border border-primary/20 rounded">
        <h1 className=" text-xl mb-7">Add Patient Details</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("age", { required: "Age is required" })}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Age</option>
                  {Array.from({ length: 60 }, (_, i) => i + 25).map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                {errors.age && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.age.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  {genders.map((gender) => (
                    <label key={gender} className="inline-flex items-center">
                      <input
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                        type="radio"
                        value={gender}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {gender}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Create ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("createId", {
                      required: "Create ID is required",
                    })}
                    type="text"
                    placeholder="Create Unique ID"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {errors.createId && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.createId.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter Email ID"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("mobile", {
                      required: "Mobile number is required",
                    })}
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marital Status
                </label>
                <select
                  {...register("maritalStatus")}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  {maritalStatus.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification
                </label>
                <select
                  {...register("qualification")}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD">MD</option>
                  <option value="MS">MS</option>
                  <option value="DM">DM</option>
                  <option value="MCh">MCh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Designation
                </label>
                <select
                  {...register("designation")}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Senior Consultant">Senior Consultant</option>
                  <option value="HOD">HOD</option>
                  <option value="Resident">Resident</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Group <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("bloodGroup", {
                    required: "Blood group is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                {errors.bloodGroup && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.bloodGroup.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    {...register("address")}
                    placeholder="Enter Address"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows="1"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  {...register("country")}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  {...register("state")}
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="KPK">KPK</option>
                  <option value="Balochistan">Balochistan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="Enter City"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  {...register("postalCode")}
                  type="text"
                  placeholder="Enter Postal Code"
                  className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* uploade health report  */}

            <div
              className="bg-green-100/90 w-full rounded border border-gray-500 h-40 flex flex-col justify-center cursor-pointer hover:bg-green-200 transition"
              onClick={() => fileInputRef.current.click()}
            >
              <p className="text-center">
                Click here to upload or Drop your reports here.
              </p>
              <p className="text-center font-bold">
                Upload your health reports.
              </p>

              {/* Hidden File Input */}
              <input
                type="file"
                {...register("healthreport")}
                ref={(e) => {
                  register("healthreport").ref(e);
                  fileInputRef.current = e;
                }}
                className="hidden"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 font-medium"
            >
              Create Patient Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPatients;
