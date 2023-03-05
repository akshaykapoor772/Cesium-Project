import React from 'react';

function MyComponent({materialName, isVolume, selectedMaterial, onClick, isColor, eachCost, isDate}) {

    const containerColor = selectedMaterial === materialName ? 'rgb(0,6,65)' : 'transparent';

    const style = {
        backgroundColor: isColor,
        borderRadius: "50%",
        height: "30px",
        width: "30px",
        marginRight: "30px",
        marginLeft: "20px",
        marginTop: "30px"
      };

      const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: containerColor,
        height: '50px',
        marginTop: '10px',
        border: '0.5px solid white'
      };
    
    const handleContainerClick = () => {
        onClick({
            materialName: materialName,
            isVolume: isVolume,
            isColor: isColor,
            eachCost: eachCost,
            isDate: isDate
        })
    }
      
  return (
    <div style={containerStyle} onClick={handleContainerClick}>
    <div className="my-component">
        <div style={style}></div>
        <div>
      <h4>{materialName ? materialName:""}</h4>
      <p>{isVolume ? `${isVolume} m3` : "0 m3"}</p>
      </div>
    </div>
    </div>
  );
}

export default MyComponent;
