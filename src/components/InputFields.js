import React, {useRef} from 'react';
import ColorPicker from './ColorPicker';
import { useState, useEffect} from 'react';


function InputFields({ showInput, setMaterialName, setVolume, setColor, setEachCost, setDate, materialName, isVolume, isColor, eachCost, isDate}) {
    

    const handleMaterialNameChange = (event) => {
        setMaterialName(event.target.value);
      };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
      };

      const handleCostChange = (event) => {
        setEachCost(event.target.value);
      };

      const handleDateChange = (event) => {
        setDate(event.target.value);
      };

    
  return (
    <div className="fieldcontainer">
      {showInput && 
         <div className="input-container">
         <div className="name-input">
           <h4 className="input-heading">Name</h4>
           <input type="text" className="input-field" placeholder="New Material" value={materialName} onChange={handleMaterialNameChange}/>
         </div>
         <div className="color-picker">
           <ColorPicker setColor={setColor} isColor={isColor} />
         </div>
       </div>
      }
      {showInput && 
        <div className="input-container2">
        <div>
          <h4 className="input-heading">Volume (m<sup>3</sup>)</h4>
          <input type="number" className="input-field" placeholder="0" value={isVolume} onChange={handleVolumeChange}/>
        </div>
        <div>
            <h4 className="input-heading">Cost (USD per m<sup>3</sup>)</h4>
            <input type="number" className="input-field" placeholder="0.00" value={eachCost} onChange={handleCostChange}/>
         </div>
        </div>
      }
       {showInput && 
        <div>
          <h4 className="input-heading">Delivery Date</h4>
          <input type="date" className="input-field" plaeholder={isDate} value={isDate} onChange={handleDateChange}/>
        </div>
      }
    </div>
  );
}

export default InputFields;
