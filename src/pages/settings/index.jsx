import React from 'react';
import { Wrench } from 'lucide-react'; // or any other icon you prefer

const Settings = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Icon */}
      <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6 shadow-sm">
        <Wrench className="w-10 h-10" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
        Settings Page
      </h1>

      {/* Subtext */}
      <p className="mt-2 text-gray-600 max-w-md">
        Manage your account preferences, update your profile, and more.
      </p>

      {/* Under Construction */}
      <div className="mt-10 max-w-xl bg-yellow-50 border border-yellow-200 rounded-xl px-6 py-8 shadow-md">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">
          🚧 Page Under Construction
        </h2>
        <p className="text-gray-700">
          We're currently working on bringing you full settings functionality.
          Please check back soon for updates!
        </p>
      </div>
    </div>
  );
};

export default Settings;
