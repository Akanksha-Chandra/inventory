import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Abhilasha</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory-management">Inventory</Link></li>
        <li><Link to="/order-management">Orders</Link></li>
        <li><Link to="">Bed</Link></li>
        <li><Link to="">OPD</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
