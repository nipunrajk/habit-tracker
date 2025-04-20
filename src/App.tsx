import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardLayout from "./pages/Dashboard";
import { SIDEBAR_WIDTH } from "./constant";

const App: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main
          className={`flex-1 ml-[${SIDEBAR_WIDTH}px] pt-10 overflow-y-auto`}
        >
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
};

export default App;
