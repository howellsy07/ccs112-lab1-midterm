import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-container">
        <Sidebar sidebarOpen={sidebarOpen} />

        <main className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;