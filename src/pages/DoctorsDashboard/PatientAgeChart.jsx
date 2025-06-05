
import React from 'react';

// Patient Age Component
const PatientAgeChart = () => {
  const ageGroups = [
    { label: '0-5', value: 120, angle: 0 },
    { label: '6-10', value: 90, angle: 45 },
    { label: '11-20', value: 85, angle: 90 },
    { label: '21-30', value: 75, angle: 135 },
    { label: '31-50', value: 95, angle: 180 },
    { label: '51+', value: 110, angle: 225 },
    { label: '71-10', value: 10, angle: -70 },
    

  ];

  const centerX = 150;
  const centerY = 150;
  const maxRadius = 80;

  const getRadarPoint = (angle, value, maxValue) => {
    const radian = (angle * Math.PI) / 180;
    const radius = (value / maxValue) * maxRadius;
    const x = centerX + radius * Math.cos(radian - Math.PI / 2);
    const y = centerY + radius * Math.sin(radian - Math.PI / 2);
    return { x, y };
  };

  const maxValue = Math.max(...ageGroups.map(g => g.value));
  const points = ageGroups.map(group => getRadarPoint(group.angle, group.value, maxValue));
  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ') + ' Z';

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Age</h3>
      <div className="relative">
        <svg width="300" height="300" className="mx-auto">
          {/* Grid lines */}
          {gridLevels.map((level, index) => {
            const gridPoints = ageGroups.map(group => 
              getRadarPoint(group.angle, maxValue * level, maxValue)
            );
            const gridPath = gridPoints.map((point, i) => 
              `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
            ).join(' ') + ' Z';
            
            return (
              <path
                key={index}
                d={gridPath}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            );
          })}

          {/* Axis lines */}
          {ageGroups.map((group, index) => {
            const endPoint = getRadarPoint(group.angle, maxValue, maxValue);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            );
          })}

          {/* Data area */}
          <path
            d={pathData}
            fill="rgb(99 102 241 / 0.1)"
            stroke="rgb(99 102 241)"
            strokeWidth="2"
          />

          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="rgb(99 102 241)"
            />
          ))}

          {/* Labels */}
          {ageGroups.map((group, index) => {
            const labelPoint = getRadarPoint(group.angle, maxValue + 20, maxValue);
            return (
              <text
                key={index}
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm text-gray-600 fill-current"
              >
                {group.label}
              </text>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-gray-600">Male</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-pink-400 mr-2"></div>
            <span className="text-gray-600">Female</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
            <span className="text-gray-600">Kids</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAgeChart;