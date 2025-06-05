const InsuranceCard = () => {
  const weeklyData = [
    { day: 'S', value: 50 },
    { day: 'M', value: 60 },
    { day: 'T', value: 70 },
    { day: 'W', value: 80 },
    { day: 'T', value: 70 },
    { day: 'F', value: 60 },
    { day: 'S', value: 40 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Insurance</h2>
      <div className="flex items-end justify-between mb-4" style={{ height: '200px' }}>
        {weeklyData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div 
              className={`bg-primary rounded-t-sm ${index === 1 || index === 2 ? 'bg-primary' : 'bg-primary/45'}`}
              style={{ 
                width: '50px', 
                height: `${item.value +10}px`,
              }}
            >
                <div className="text-white text-xs font-semibold  flex  justify-center pt-2">{item.value}</div>
            </div>
            <span className="text-xs text-gray-600 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-lg text-gray-600">
          Anytime you make a claim whether partial or total of{' '}
          <span className="text-primary font-semibold">$10000</span> base cover, it
          gets 100% restored for any subsequent claims in the same year.
        </p>
      </div>
    </div>
  );
};

export default InsuranceCard;