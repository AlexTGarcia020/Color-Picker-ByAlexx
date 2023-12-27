import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';;
import GradientColorPicker from './components/GradientPick';

function App() {

  return (
    <div>
      <Navbar/>
      <div className="content d-flex justify-content-start ms-4 mt-5">
        <h1 className='text-white'>Bienvenido a mi<strong className='demo rainbow'>Color Picker</strong></h1>
      </div>
    </div>
  );
}

export default App;