import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import DashboardLayout from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <SideBar />
        <main className='flex-1 ml-[280px]'>
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
};

export default App;
