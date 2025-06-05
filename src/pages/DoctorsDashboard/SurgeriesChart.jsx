const SurgeriesChart = () => {
  const maleCount = 18;
  const femaleCount = 12;
  const total = maleCount + femaleCount;
  const malePercentage = Math.round((maleCount / total) * 100);
  const femalePercentage = Math.round((femaleCount / total) * 100);

  // Calculate stroke-dasharray for the circle
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const maleStroke = (malePercentage / 100) * circumference;
  const femaleStroke = (femalePercentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Surgeries</h3>
      <div className="flex flex-col items-center">
        {/* Donut Chart */}
        <div className="relative mb-6">
          <svg width="180" height="180" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="20"
            />

            {/* Male segment */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="rgb(99 102 241)"
              strokeWidth="20"
              strokeDasharray={`${maleStroke} ${circumference}`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />

            {/* Female segment */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="20"
              strokeDasharray={`${femaleStroke} ${circumference}`}
              strokeDashoffset={-maleStroke}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-primary text-sm font-medium">
              Male - {maleCount}
            </div>
            <div className="text-primary text-2xl font-bold">
              {malePercentage}%
            </div>
          </div>

          {/* Dashed border effect */}
          <svg
            width="180"
            height="180"
            className="absolute inset-0 transform -rotate-90"
          >
            <circle
              cx="90"
              cy="90"
              r={radius + 15}
              fill="none"
              stroke="rgb(99 102 241)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-sm text-gray-600">Male - {maleCount}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
            <span className="text-sm text-gray-600">
              Female - {femaleCount}
            </span>
          </div>
        </div>

        {/* Change indicators */}
        <div className="flex flex-col space-y-2 text-xs">
          <div className="flex items-center">
            <div className="bg-primary text-white px-2 py-1 rounded text-xs mr-2">
              22%
            </div>
            <span className="text-gray-600">
              male patients decreased than last month
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">
              -8%
            </div>
            <span className="text-gray-600">
              female patients increase than last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgeriesChart;
