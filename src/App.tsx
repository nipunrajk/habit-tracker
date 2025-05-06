import React from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/SideBar";
import DashboardLayout from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className={`flex-1 ml-sidebar pt-10 overflow-y-auto`}>
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
};

export default App;
