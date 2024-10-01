import React from 'react';

const Notifications: React.FC = () => {
  return (
    <div className="bg-secondary   p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <div>Michael Wilson left campus</div>
          <div className="text-sm text-gray-500">20 min ago</div>
        </li>
        <li className="flex items-center justify-between">
          <div>Emily Davis entered the cafeteria</div>
          <div className="text-sm text-gray-500">15 min ago</div>
        </li>
        <li className="flex items-center justify-between">
          <div>James Johnson's device is low on battery</div>
          <div className="text-sm text-gray-500">5 min ago</div>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
