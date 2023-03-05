import { useState, useEffect} from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import TotalCost from './components/TotalCost';
import InputFields from './components/InputFields';

function App() {
  const[totalCost, setTotalCost] = useState(0);
  const[showInput, setShowInput] = useState(false);
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const [materialName, setMaterialName] = useState("");
  const [isVolume, setVolume] = useState("");
  const [isColor, setColor] = useState("#5BD2B6");
  const [eachCost, setEachCost] = useState("");
  const [isDate, setDate] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [materials, setMaterials] = useState([]);

  const handleFetch = () => {
    fetch('http://localhost:3000/api/materials')
      .then(response =>response.json())
      .then(data => {
        alert("Check the console for data fetched from the Server");
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  const handleAddClick = () => {
    setShowInput(true);
    if (materialName === selectedMaterial){
      const updatedMaterials = materials.map((material) => {
        if (material.materialName === selectedMaterial && material.isVolume!== "" && material.eachCost!== "" && material.isDate !== "") {
          return {
            materialName: materialName,
            isVolume: isVolume,
            isColor: isColor,
            eachCost: eachCost,
            isDate: isDate
          };
        } 
        else {
          return material;
        }
      });
      setMaterials(updatedMaterials);
    }
    else if (materialName !== "" && materialName !== "No Materials" && isVolume!== "" && eachCost!== "" && isDate !== "") {
      const newMaterial = {
      materialName: materialName,
      isVolume: isVolume,
      isColor: isColor,
      eachCost: eachCost,
      isDate: isDate
    };
    setMaterials([...materials, newMaterial]);
    setIsDeleteEnabled(true);
    }
    setMaterialName("");
    setVolume("");
    setColor("#5BD2B6");
    setEachCost("");
    setDate("");
    setSelectedMaterial(null);
  };

  const handleMaterialSelect = (material, volume, color, cost, isDate) => {
    setSelectedMaterial(material);
    setMaterialName(material);
    setVolume(volume);
    setColor(color);
    setEachCost(cost);
    setDate(isDate);
  }

  const handleDeleteClick = () => {
    const updatedMaterials = materials.filter((material) => material.materialName !== selectedMaterial);
    setMaterials(updatedMaterials);
    setSelectedMaterial(null);
    setIsDeleteEnabled(updatedMaterials.length > 0);
    setMaterialName("");
    setVolume("");
    setColor(null);
    setEachCost("");
    setDate("");
    setSelectedMaterial(null);
  };

  useEffect(() => {
    const newTotalCost = materials.reduce((total, material) => {
      const cost = material.isVolume * material.eachCost;
      return total + cost;
    }, 0);
    setTotalCost(newTotalCost);
  }, [materials]);
 

  return (
    <div className="App">
      <div className="head"> 
      <p>Materials</p>
      </div>
      <div className="ButtonHolder">
        <button className="add-button" onClick={handleAddClick}>
          <i className="fa fa-plus fa-lg"></i>Add</button>
          <button className={isDeleteEnabled ? "delete-button enabled" : "delete-button"} disabled={!isDeleteEnabled} onClick={handleDeleteClick}>
            <i className="fas fa-trash fa-lg"></i>Delete</button>
        <button className="fetch-button" onClick={handleFetch}>
        <i className="fa fa-paper-plane fa-lg"></i>Fetch</button>
      </div>
      <div className="container-wrapper">
      <div className="listcontainer">
        {!showInput &&
        <div className="no-material">
          <h4>No Materials</h4>
        </div>
        }
        {showInput && materials.map((material, index) =>
        <div className="material-name" key={index} style={{ marginBottom: '20px'}}>
        <MyComponent materialName={material.materialName} 
        isVolume={material.isVolume} 
        isColor={material.isColor}
        eachCost={material.eachCost}
        isDate={material.isDate}
        selectedMaterial={selectedMaterial}
        onClick={() => handleMaterialSelect(material.materialName, material.isVolume, material.isColor, material.eachCost, material.isDate)}/>
        </div>
       ) }
      </div>
      <div className="total-cost-container">
      <TotalCost totalCost={totalCost.toFixed(2)}/>
      </div>
      <div className='field-container'>≈
      <InputFields 
      showInput={showInput} 
      setMaterialName={setMaterialName} 
      setVolume={setVolume} 
      setColor={setColor}
      setEachCost={setEachCost}
      setDate={setDate}
      setSelectedMaterial={setSelectedMaterial} 
      selectedMaterial={selectedMaterial}
      materialName={materialName}
      isVolume={isVolume}
      isColor={isColor}
      eachCost={eachCost}
      isDate={isDate}
      />
      </div>
      </div>
    </div>
  );
}

export default App;