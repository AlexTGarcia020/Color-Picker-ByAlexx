import React, { useState } from 'react';
/* import './App.css'; */

import Navbar from './components/Navbar';
/* import Footer from './components/Footer'; */
import GradientColorPicker from './components/GradientPick';

function GradientPage() {

  return (
    <div>
      <Navbar/>
      <div className='d-flex justify-content-center'>
        <GradientColorPicker/>
      </div>
    </div>
  );
}

export default GradientPage;