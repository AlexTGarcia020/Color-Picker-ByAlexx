import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import "../css/Paleta.css"

const ColorExtractorS = () => {
  const [colors, setColors] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  const renderSwatches = () => {
    if (Array.isArray(colors) && colors?.length > 0) {
      const swatches = colors.map((color, id) => {
        return (
          <div
            className='rounded shadow-lg'
            key={id}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100,
            }}
          />
        );
      });

      return swatches;
    }
  };

  const getColors = (detectedColorCodes) => {
    setColors(detectedColorCodes);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const loadedImageSrc = event.target.result;
      setImageSrc(loadedImageSrc);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='mt-5'>
        <h1 className='text-white fs-3 text-center mb-4 mt-5'>Extractor De Colores</h1>
        <div className='d-flex justify-content-center'>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '20px', color:"white"}}
      />
      </div>
      {imageSrc && (
         <div>
        <ColorExtractor getColors={getColors}>
          <img
            src={imageSrc}
            style={{ width: 700, height: 500, objectFit: "cover"}}
            alt="sample"
            className='rounded shadow-lg mb-3'
          />
        </ColorExtractor>
          </div>
      )}
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          gap: "10px",
          marginBlock:"30px"
        }}
      >
        {renderSwatches()}
      </div>
    </div>
  );
};

export default ColorExtractorS;