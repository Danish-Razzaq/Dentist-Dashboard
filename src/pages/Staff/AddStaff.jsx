import React from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock } from "lucide-react";

const AddStaff = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 m-2 border rounded-lg shadow-sm bg-white border-primary/20 "
    >
      <h2 className="text-lg font-semibold mb-6">Add Staff Member</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Enter fullname"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            {...register("LastName")}
            type="text"
            placeholder="Enter Last Name"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            {...register("mobile")}
            type="tel"
            placeholder="Enter mobile number"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            {...register("gender")}
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            {...register("dob")}
            type="date"
            className="w-full border rounded px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Calendar className="absolute right-3 top-9 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Qualification
          </label>
          <input
            {...register("qualification")}
            type="text"
            placeholder="Enter qualification"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <select
            {...register("department")}
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Designation
          </label>
          <input
            {...register("designation")}
            type="text"
            placeholder="Enter designation"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <textarea
          {...register("address")}
          rows={3}
          placeholder="Enter Address"
          className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            {...register("city")}
            type="text"
            placeholder="Enter city"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            {...register("state")}
            type="text"
            placeholder="Enter state"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            {...register("country")}
            type="text"
            placeholder="Enter country"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            {...register("postalCode")}
            type="text"
            placeholder="Enter postal code"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button type="button" className="btn-white">
          Cancel
        </button>
        <button type="submit" className="btn-secondary">
          Add Staff
        </button>
      </div>
    </form>
  );
};

export default AddStaff;
