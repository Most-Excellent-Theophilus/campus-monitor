import React from 'react';

const Alerts: React.FC = () => {
  const alerts = [
    { name: 'Student: Lily Brooks', action: 'Panic Button', time: '1 min ago' },
    { name: 'Student: John Doe', action: 'Battery: 5%', time: '5 min ago' },
    { name: 'Student: Emma Watson', action: 'Geofence: Cafeteria', time: '15 min ago' },
    { name: 'Student: Ryan Lee', action: 'Out of Bounds', time: '20 min ago' },
  ];

  return (
    <div className="bg-secondary   p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Recent Alerts</h2>
      <ul className="space-y-4">
        {alerts.map((alert, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <div className="bg-gray-300 rounded-full w-10 h-10"></div>
            <div className="flex-1">
              <p className="font-bold">{alert.name}</p>
              <p className="text-sm text-gray-500">{alert.action}</p>
            </div>
            <div className="text-sm text-gray-500">{alert.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
