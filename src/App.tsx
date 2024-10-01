import React from "react";
import Sidebar from "./components/Sidebar";
import Alerts from "./components/Alerts";
import LiveMap from "./components/LiveMap";
import DeviceHealth from "./components/DeviceHealth";
import Notifications from "./components/Notifications";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-secondary">
        <div className="flex flex-col w-full">
          {/* Top Bar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex flex-grow p-6 space-x-6 mt-14">
            <div className="w-1/4">
              <Alerts />
            </div>
            <div className="w-3/4 space-y-6">
              <LiveMap />
              <DeviceHealth />
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
