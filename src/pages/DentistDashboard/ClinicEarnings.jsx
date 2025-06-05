import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ClinicEarnings = () => {
  const earningsData = [
    {
      id: 1,
      title: 'Online Consultation',
      amount: '$4900',
      percentage: '20%',
      isPositive: true,
      color: 'text-indigo-600',
      chartColor: 'stroke-indigo-400'
    },
    {
      id: 2,
      title: 'Overall Purchases',
      amount: '$750',
      percentage: '25%',
      isPositive: false,
      color: 'text-orange-600',
      chartColor: 'stroke-orange-500'
    },
    {
      id: 3,
      title: 'Pending Invoices',
      amount: '$560',
      percentage: '38%',
      isPositive: true,
      color: 'text-green-600',
      chartColor: 'stroke-green-900'
    },
    {
      id: 4,
      title: 'Monthly Billing',
      amount: '$390',
      percentage: '30%',
      isPositive: true,
      color: 'text-yellow-600',
      chartColor: 'stroke-yellow-500'
    }
  ];

  // Simple chart components
  const CircularChart = ({ color }) => (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="#7367F0"
          strokeWidth="6"
        />
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeDasharray="72 36"
          strokeDashoffset="18"
          className={color}
          transform="rotate(-90 24 24)"
        />
      </svg>
    </div>
  );

  const HalfCircleChart = ({ color }) => (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path
          d="M 6 24 A 18 18 0 0 1 42 24"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 6 24 A 18 18 0 0 1 30 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={color}
        />
      </svg>
    </div>
  );

  const BarChart = ({ color }) => (
    <div className="w-12 h-12 flex items-end justify-center gap-1 px-2">
      <div className={`w-1.5 h-4 bg-gray-200 rounded-sm`}></div>
      <div className={`w-1.5 h-6 bg-gray-200 rounded-sm`}></div>
      <div className={`w-1.5 h-8 bg-current rounded-sm ${color}`}></div>
      <div className={`w-1.5 h-5 bg-gray-200 rounded-sm`}></div>
      <div className={`w-1.5 h-7 bg-current rounded-sm ${color}`}></div>
    </div>
  );

  const LineChart = ({ color }) => (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg width="48" height="32" viewBox="0 0 48 32">
        <polyline
          points="2,20 12,12 22,16 32,8 42,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={color}
        />
        <circle cx="42" cy="12" r="2" fill="currentColor" className={color} />
      </svg>
    </div>
  );

  const getChartComponent = (index, color) => {
    switch (index) {
      case 0:
        return <CircularChart color={color} />;
      case 1:
        return <HalfCircleChart color={color} />;
      case 2:
        return <BarChart color={color} />;
      case 3:
        return <LineChart color={color} />;
      default:
        return <CircularChart color={color} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-primary/20">
      <h2 className="text-xl  text-gray-800 mb-6">Clinic Earnings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earningsData.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 py-2 rounded-md border-2 border-primary/20 hover:shadow-md transition-shadow flex gap-2`}
          >
            {/* Chart */}
            <div className="flex justify-center mb-4">
              <div className={item.color}>
                {getChartComponent(index, item.chartColor)}
              </div>
            </div>
            
            {/* Amount */}
            <div className="text-center mb-2 ">
                <div className='flex items-start gap-2'>

              <h3 className="text-2xl font-bold text-gray-800">
                {item.amount} 
              </h3>
              <div className="flex items-center justify-center gap-1">
                {item.isPositive ? (
                  <TrendingUp size={14} className="text-green-500" />
                ) : (
                  <TrendingDown size={14} className="text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  item.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.percentage}
                </span>
              </div>
                </div>
            {/* Title and Percentage */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">
                {item.title}
              </p>
              
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicEarnings;