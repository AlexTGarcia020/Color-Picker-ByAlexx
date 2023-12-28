import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import "../css/Gradient.css"

function GradientPick() {
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');

  return (
    <div className='div-Gradient'>
     <div className='card p-3 rounded shadow'>
     <ColorPicker/>
      
     </div>
        <div className='rounded shadow ejemploGradient' style={{ background: backgroundGradient, minHeight: '70vh', padding: '200px'}}>
        </div>
    </div>
  );
}

export default GradientPick;