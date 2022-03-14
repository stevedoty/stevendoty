import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div id="nav-left">
        <h3 className="navbar-item">Steven Doty</h3>
      </div>
      <div id="nav-right">
        <h3 className="navbar-item">About</h3>
        <h3 className="navbar-item">Tech</h3>
        <h3 className="navbar-item">Projects</h3>
        <h3 className="navbar-item">Contact</h3>
      </div>
    </div>
  );
}

export default Navbar;
