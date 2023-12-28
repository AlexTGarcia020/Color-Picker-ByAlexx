import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';

const ColorExtractorS = () => {
  const [colors, setColors] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  const renderSwatches = () => {
    if (Array.isArray(colors) && colors?.length > 0) {
      const swatches = colors.map((color, id) => {
        const rgbColor = hexToRgb(color);
        return (
          <div
            className='color-swatch'
            key={id}
            style={{
              backgroundColor: color,
            }}
          >
            <p className='color-code'>{rgbColor}</p>
          </div>
        );
      });

      return swatches;
    }
  };

  const getColors = (detectedColorCodes) => {
    setColors(detectedColorCodes);
  };

  // Función para convertir HEX a RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
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
      <h1 className='text-white mb-3 mt-4 fs-2 text-center'>Extractor de paleta de colores</h1>
      <div className='d-flex justify-content-center'>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '20px' }}
        className='w-50 fs-6'
      />
      </div>
      {imageSrc && (
        <div className='d-flex justify-content-center'>
          <ColorExtractor getColors={getColors}>
            <img
              src={imageSrc}
              style={{ width: 700, height: 500, objectFit: 'cover' }}
              alt="sample"
              className='rounded shadow-lg mb-3'
            />
          </ColorExtractor>
        </div>
      )}
      <div className='swatches-container rounded'>
        {renderSwatches()}
      </div>
    </div>
  );
};

export default ColorExtractorS;
