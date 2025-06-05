const PatientsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-semibold text-gray-900">Patients</h2>
        <span className="text-sm  bg-primary/30 p-2 rounded font-medium">20% higher than last year.</span>
      </div>
      <div className="relative h-80 w-full">
        <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path
            d="M 0 180 Q 50 160 100 140 T 200 100 T 300 80 T 400 60"
            // stroke="#3B82F6"
            className="stroke-primary"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 0 180 Q 50 160 100 140 T 200 100 T 300 80 T 400 60 L 400 200 L 0 200 Z"
            fill="url(#gradient)"
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-sm text-gray-600">New</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-sm text-gray-600">Return</span>
        </div>
      </div>
    </div>
  );
};

export default PatientsChart;