import React from 'react';
import "../css/Navbar.css";

function Navbar({ toggleDarkMode, isDarkMode }) {

const handleToggleClick = () => {
 toggleDarkMode(!isDarkMode);
 };

  return (
    <nav className="navbar">
      <div className="brand">Tu Logo</div>
      <div className="container">
      <label class="switch">
        <input type="checkbox"  onClick={toggleDarkMode}/>
        <span class="slider"></span>
        </label>
    </div>
      {/* Otros elementos de navegación */}
    </nav>
  );
}

export default Navbar;
