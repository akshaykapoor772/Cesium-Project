import React, { useState } from 'react';
import MyComponent from './MyComponent';

function ColorPicker({setColor, isColor}) {
  const [materialColor, setmaterialColor] = useState("#5BD2B6");

  const handleChange = (event) => {
    setmaterialColor(event.target.value);
    setColor(event.target.value);
  };

  return (
    <div>
      <label>
        <h4 className="color-heading" style={{color:"white"}}>Color</h4>
        <input type="color" value={materialColor} onChange={handleChange} />
        <span className="color-box" style={{ backgroundColor: materialColor }}></span>
      </label>
    </div>
  );
}

export default ColorPicker;
