import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <div className="content">
        {/* Contenido del resto de tu aplicación */}
        {/* Por ejemplo: */}
        <h1>Bienvenido a mi aplicación</h1>
        </div>
    </div>
  );
}

export default App;