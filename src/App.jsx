import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="content">
        {/* Contenido del resto de tu aplicación */}
        {/* Por ejemplo: */}
        <h1>Bienvenido a mi aplicación</h1>
        </div>
    </div>
  );
}

export default App;