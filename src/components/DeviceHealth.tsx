import React from 'react';

const DeviceHealth: React.FC = () => {
  return (
    <div className="bg-secondary   p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Device Health</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className='border'>
          <p className="text-2xl font-bold">4</p>
          <p>Active Geofences</p>
        </div>
        <div className='border'>
          <p className="text-2xl font-bold">2</p>
          <p>Students Out of Bounds</p>
        </div>
        <div className='border'>
          <p className="text-2xl font-bold">3</p>
          <p>Low Battery</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceHealth;
