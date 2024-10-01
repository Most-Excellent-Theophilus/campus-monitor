import React from 'react';

const LiveMap: React.FC = () => {
  return (
    <div className="bg-secondary   p-1 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Live Map</h2>
      <div className="h-64 bg-gray-200 rounded-lg">
        {/* Simulating a map */}
        <iframe
          className="w-full h-full rounded-lg"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019355407442!2d-122.41941548468123!3d37.774929779759274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f618eb69%3A0x9b7b928d7884a4b8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1638745867894!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default LiveMap;
