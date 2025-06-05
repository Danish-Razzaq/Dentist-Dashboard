const AppointmentsChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const appointmentData = [
    { month: 'Jan', appointments: 15 },
    { month: 'Feb', appointments: 25 },
    { month: 'Mar', appointments: 18 },
    { month: 'Apr', appointments: 22 },
    { month: 'May', appointments: 28 },
    { month: 'Jun', appointments: 12 },
    { month: 'Jul', appointments: 20 },
    { month: 'Aug', appointments: 16 },
    { month: 'Sep', appointments: 30 },
    { month: 'Oct', appointments: 24 },
    { month: 'Nov', appointments: 8 },
    { month: 'Dec', appointments: 26 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-semibold text-gray-900">Appointments</h2>
        <span className="text-sm text-black bg-primary/30 p-2 rounded  font-medium">33% higher than last year.</span>
      </div>
      <div className="h-80 flex items-end justify-between space-x-2">
        {appointmentData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex flex-col items-center space-y-1 w-full">
              <div 
                className="bg-primary rounded-full w-3"
                style={{ 
                  height: `${(item.appointments / 30) * 120}px`,
                  minHeight: '20px'
                }}
              ></div>
              <div 
                // className="bg-primary rounded-full w-2"
                style={{ 
                  height: `${Math.max((item.appointments / 30) * 60, 10)}px`
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-medium">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsChart;