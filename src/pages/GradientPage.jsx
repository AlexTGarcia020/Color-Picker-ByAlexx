import React, { useState } from 'react';
/* import './App.css'; */

import Navbar from '../components/Navbar';
/* import Footer from './components/Footer'; */
import GradientColorPicker from '../components/GradientPick';
import Scroll from '../components/Scroll';

function GradientPage() {

  return (
    <div className=''>
        <GradientColorPicker/>
        <div className='d-flex justify-content-center' style={{marginTop: "-120px"}}>
        <Scroll/>
        </div>
    </div>
  );
}

export default GradientPage;