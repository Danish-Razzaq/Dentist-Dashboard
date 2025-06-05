const IncomeChart = () => {
  const weeklyData = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 170 },
    { month: "Apr", value: 80 },
    { month: "May", value: 230 },
    { month: "Jun", value: 60 },
    { month: "Jul", value: 190 },
    { month: "Aug", value: 120 },
    { month: "Sep", value: 210 },
    { month: "Oct", value: 50 },
    { month: "Nov", value: 75 },
    { month: "Dec", value: 200 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Inome</h2>
      <div
        className="flex items-end justify-between mb-4"
        style={{ height: "300px" }}
      >
        {weeklyData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div
              className={`bg-primary rounded-t-sm ${
                index === 1 || index === 2 || index === 6 || index === 9
                  ? "bg-primary"
                  : "bg-primary/45"
              }`}
              style={{
                width: "50px",
                height: `${item.value + 10}px`,
              }}
            >
              <div className="text-white text-xs font-semibold  flex  justify-center pt-2">
                {item.value}
              </div>
            </div>
            <span className="text-xs text-gray-600 font-medium">
              {item.month}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-lg text-gray-600">
        <span className="bg-primary text-white text-sm p-1 rounded mr-1">22% </span>income has increase that last year.
        </p>
      </div>
    </div>
  );
};

export default IncomeChart;
