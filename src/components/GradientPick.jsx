import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import "../css/Gradient.css"

function GradientPick() {
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');

  const handleColorChange = (color) => {
    setBackgroundGradient(color);
  };

  return (
    <div>
     <div className='card p-2'>
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
      />
     </div>
        <div style={{ background: backgroundGradient, minHeight: '60vh', padding: '20px' }}>
        </div>
    </div>
  );
}

export default GradientPick;