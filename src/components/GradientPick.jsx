import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import "../css/Gradient.css";

function GradientPick() {
  const [colorStart, setColorStart] = useState({
    r: 96,
    g: 93,
    b: 93,
    a: 1,
  });

  const [colorEnd, setColorEnd] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });

  const handleColorChangeStart = (color) => {
    setColorStart(color.rgb);
  };

  const handleColorChangeEnd = (color) => {
    setColorEnd(color.rgb);
  };

  const backgroundGradient = `linear-gradient(90deg, rgba(${colorStart.r},${colorStart.g},${colorStart.b},${colorStart.a}) 0%, rgba(${colorEnd.r},${colorEnd.g},${colorEnd.b},${colorEnd.a}) 100%)`;

  return (
    <div className='div-Gradient'>
      <div className='card bg-white text-black p-3 rounded shadow'>
        <ChromePicker
          color={colorStart}
          onChange={handleColorChangeStart}
        />
        <ChromePicker
          color={colorEnd}
          onChange={handleColorChangeEnd}
          className='mt-2'
        />
      </div>
      <div className='rounded shadow ejemploGradient' style={{
        background: backgroundGradient,
        minHeight: '40vh',
        padding: '200px'
      }}>
      </div>
    </div>
  );
}

export default GradientPick;