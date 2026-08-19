import { Link } from "react-router-dom";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <Link to="/" className="logo">
          My React App
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;