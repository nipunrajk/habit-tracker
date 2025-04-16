import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardLayout from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 mt-16 ml-[280px] bg-gray-100'>
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
};

export default App;
