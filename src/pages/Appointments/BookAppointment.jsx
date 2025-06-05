import React from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock } from "lucide-react";

const BookAppointmentForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 border rounded-lg shadow-sm bg-white border-primary/20 "
    >
      <h2 className="text-lg font-semibold mb-4">Book Appointment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter fullname"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter email address"
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
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            placeholder="Enter age"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Enter phone number"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <input
            {...register("date")}
            type="date"
            className="w-full border rounded px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Calendar className="absolute right-3 top-9 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Time
          </label>
          <input
            {...register("time")}
            type="time"
            className="w-full border rounded px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Clock className="absolute right-3 top-9 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialist Doctor
          </label>
          <select
            {...register("doctor")}
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Dermatologist">Dermatologist</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Problem
        </label>
        <textarea
          {...register("problem")}
          rows={3}
          placeholder="Enter Problem"
          className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button type="submit" className="btn">
          Book Appointment
        </button>
      </div>
    </form>
  );
};

export default BookAppointmentForm;
