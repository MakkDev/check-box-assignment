
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [allChecked, setAllChecked] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [kosherChecked, setKosherChecked] = useState(false);
  const [eggsChecked, setEggsChecked] = useState(false);
  const [dairyChecked, setDairyChecked] = useState(false);
  
  const itemList = [ "Kosher", "No Eggs", "No Dairy"]

  const handleAllChange = () => {
    // allChecked === false ? () =>
    setAllChecked(!allChecked)
    setKosherChecked(!kosherChecked);
    setEggsChecked(!eggsChecked);
    setDairyChecked(!dairyChecked)
};

  const checkHandler = (event) => {
    const targetLabel = event.target.label
    const targetChecked = event.target.checked
    if (targetChecked) {
      setCheckedValues([...checkedValues, targetLabel])
    }
  }
  const handleKosherChange = () => {
    setKosherChecked(!kosherChecked);
  };

  const handleEggsChange = () => {
    setEggsChecked(!eggsChecked);
  };
  const handleDairyChange = () => {
    setDairyChecked(!dairyChecked);
  };

  
  return (
    <> 
    <div> Selected Value: {checkedValues.map(value => 
    value
    )}</div>
      <FormGroup className='App'> 
      <FormControlLabel className='checkBox' control={<Checkbox onClick={handleAllChange} size='large'/>} label="Select All"/>
      <FormControlLabel className='checkBox' control={<Checkbox onChange={checkHandler} onClick={handleKosherChange} checked={kosherChecked} size='large'/>} label="Kosher"/>
      <FormControlLabel className='checkBox' control={<Checkbox onChange={checkHandler} onClick={handleEggsChange} checked={eggsChecked}  size='large'/>} label="No Eggs"/>
      <FormControlLabel className='checkBox' control={<Checkbox onChange={checkHandler} onClick={handleDairyChange} checked={dairyChecked} size='large'/>} label="No Dairy"/>
      </FormGroup>
      </>
  );
}

export default App;
