import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import "../css/Gradient.css"

function GradientPick() {
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');

  const handleColorChange = (color) => {
    setBackgroundGradient(color);
  };

  const customLocales = {
    CONTROLS: {
      SOLID: 'Solido',
      GRADIENT: 'Gradiente',
    },
  }

  return (
    <div className='div-Gradient'>
     <div className='card mt-5 p-2'>
     <ColorPicker
        value={backgroundGradient}
        onChange={handleColorChange}
        hideColorTypeBtns={false}
        hidePresets={true}
        hideEyeDrop={false}
        hideOpacity={true}
        hideGradientAngle={false}
        hideGradientControls={false}
        hideGradientStop={false}
        hideColorGuide={true}
        hideInputType={true}
        locales={customLocales}
      />
      
     </div>
        <div style={{ background: backgroundGradient, minHeight: '60vh', padding: '20px' }}>
        </div>
    </div>
  );
}

export default GradientPick;