import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import "../css/Paleta.css";

const ColorExtractorS = () => {
  const [colors, setColors] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [rgbValues, setRgbValues] = useState([]);

  const renderSwatches = () => {
    if (Array.isArray(colors) && colors.length > 0) {
      return colors.map((color, id) => (
        <div
          className='rounded shadow-lg palleteResult'
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100,
          }}
        >
          <p className='text-white rgb-extractor' style={{ fontSize: '10px', paddingLeft: "10px", marginTop: "40px" }}>
            {rgbValues[id] ? `RGB: ${rgbValues[id].join(', ')}` : null}
          </p>
        </div>
      ));
    }
    return null;
  };

  const getColors = (detectedColorCodes) => {
    setColors(detectedColorCodes);
    const extractedRgbValues = detectedColorCodes.map((color) => hexToRgb(color));
    setRgbValues(extractedRgbValues);
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

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  return (
    <div className='mt-5 content'>
      <h1 className='text-white fs-3 text-center mb-4 mt-5'>Extractor De Colores</h1>
      <div className='d-flex justify-content-center'>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginBottom: '20px', color: "white" }}
          className='inputFile'
        />
      </div>
      {imageSrc && (
        <div>
          <ColorExtractor getColors={getColors}>
            <img
              src={imageSrc}
              style={{ width: 700, height: 500, objectFit: "cover" }}
              alt="sample"
              className='rounded result-Img shadow-lg mb-3'
            />
          </ColorExtractor>
        </div>
      )}
      <div
        className='paletteDiv'
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          gap: "10px",
          marginBlock: "30px",
        }}
      >
        {renderSwatches()}
      </div>
    </div>
  );
};

export default ColorExtractorS;