import {  CheckCircle, Upload} from 'lucide-react';
const Timeline = () => {
  const activities = [
    {
      time: '30 MINS AGO',
      doctor: 'Dr. Kermit Shah',
      action: 'uploaded a prescription',
      patient: 'Ann Jordan',
      icon: Upload
    },
    {
      time: 'ONE HOUR AGO',
      doctor: 'Dr. Tameka Mccoy',
      action: 'Task marked as complete',
      patient: 'Jody Ashley',
      icon: CheckCircle
    },
    {
      time: '3 HOURS AGO',
      doctor: 'Dr. Vito Rivers',
      action: 'Task marked as complete',
      patient: 'Nellie Christian',
      icon: CheckCircle
    },
    {
      time: '5 HOURS AGO',
      doctor: 'Dr. Kermit Shah',
      action: 'uploaded a prescription',
      patient: 'Ann Jordan',
      icon: Upload
    },
    {
      time: '6 HOURS AGO',
      doctor: 'Dr. Tameka Mccoy',
      action: 'Task marked as complete',
      patient: 'Jody Ashley',
      icon: CheckCircle
    },
    {
      time: '8 HOURS AGO',
      doctor: 'Dr. Vito Rivers',
      action: 'Task marked as complete',
      patient: 'Nellie Christian',
      icon: CheckCircle
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 border-primary/20">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Timeline</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary "></div>
        <div className="space-y-8 overflow-y-scroll h-96">
          {activities?.map((activity, index) => (
            <div key={index} className="relative flex items-start space-x-4 ">
              <div className="relative z-10 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <p className="text-xs text-gray-500 font-medium mb-1  border-gray-900 border-b-2 border-dashed w-fit">{activity.time}</p>
                <p className="text-sm text-gray-900">
                  <span  className='text-primary' >{activity.doctor}</span> - {activity.action}.
                </p>
                <p className="text-sm ">
                  Patient Name - <span className='text-red-500'> {activity.patient}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;