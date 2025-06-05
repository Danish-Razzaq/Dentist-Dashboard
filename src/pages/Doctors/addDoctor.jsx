import React, { useState } from "react";
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

const DoctorCreationForm = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const tabs = [
    { id: "personal", label: "Personal Details", icon: User },
    { id: "profile", label: "Profile and Bio", icon: FileText },
    { id: "availability", label: "Availability", icon: Calendar },
    { id: "account", label: "Account Details", icon: Settings },
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const timeSlotsFroom = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
  ];
  const timeSlotsTO = [
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const genders = ["Male", "Female", "Other"];
  const maritalStatus = ["Single", "Married", "Divorced", "Widowed"];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission
  };

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              {...register("firstName", { required: "First name is required" })}
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
              {...register("lastName", { required: "Last name is required" })}
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
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
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
                  {...register("gender", { required: "Gender is required" })}
                  type="radio"
                  value={gender}
                  className="form-radio text-primary"
                />
                <span className="ml-2 text-sm text-gray-700">{gender}</span>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
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
              {...register("createId", { required: "Create ID is required" })}
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
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              {...register("mobile", { required: "Mobile number is required" })}
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
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
            {...register("bloodGroup", { required: "Blood group is required" })}
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
    </div>
  );

  const renderProfileAndBio = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Profile Image
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary flex items-center justify-center bg-gray-50">
                <User className="w-12 h-12 text-primary" />
              </div>
            )}
          </div>
          <div>
            <label className="inline-flex items-center px-4 py-2 border border-primary rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-primary/20 cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Upload a professional photo (JPG, PNG, max 5MB)
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Write Bio
        </label>
        <textarea
          {...register("bio")}
          placeholder="Write a brief bio about yourself, your experience, and specializations..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows="8"
        />
        <p className="text-sm text-gray-500 mt-2">
          Tell patients about your background, experience, and areas of
          expertise.
        </p>
      </div>
    </div>
  );

  const renderAvailability = () => (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">
        Set your availability for each day of the week. Leave blank for days
        you're not available.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {weekDays.map((day) => (
          <div key={day} className=" p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">{day}</h4>
              <label className="inline-flex items-center space-x-2">
                <input
                  {...register(`availability.${day}.enabled`)}
                  type="checkbox"
                  className="form-checkbox text-primary"
                />
                <span className="text-sm text-gray-700">Available</span>
              </label>
            </div>

            {/* From and To Inputs Side by Side */}
            <div className="grid grid-cols-2 ">
              {/* From */}
              <div>
                <div className="relative ">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    {...register(`availability.${day}.from`)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">From</option>
                    {timeSlotsFroom.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* To */}
              <div>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    {...register(`availability.${day}.to`)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">TO</option>
                    {timeSlotsTO.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAccountDetails = () => (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              placeholder="Enter Username"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block  text-sm font-medium text-gray-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-xs py-1 text-gray-600">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters.
          </p>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-xs py-1 text-gray-600">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters.
          </p>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return renderPersonalDetails();
      case "profile":
        return renderProfileAndBio();
      case "availability":
        return renderAvailability();
      case "account":
        return renderAccountDetails();
      default:
        return renderPersonalDetails();
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white border border-primary/20 rounded">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary mb-2">
          Create Doctor Profile
        </h1>
        <p className="text-gray-600">
          Fill in the information below to create a new doctor profile
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-primary/30 text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-8">{renderTabContent()}</div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-secondary"
          >
            Create Doctor Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorCreationForm;
