
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [allChecked, setAllChecked] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [checked, setChecked] = useState(false);
  
  const itemList = [ 
    {id:"0",value: "Kosher"},
    {id:"1", value:"No Eggs"},
    {id:"2", value:"No Dairy"}
  ];

  const handleAllChange = () => {
    setAllChecked(!allChecked);
    setCheckedValues(itemList.map(item => item.value))
    setChecked(!checked)
    if (allChecked) {
      setCheckedValues([]);
    }
};

  const checkHandler = (event) => {
    const {id, checked, key, placeholder} = event.target;
    console.log(placeholder)
    if (checkedValues.length === 2 && checked) {
      setAllChecked(true)
    }
    setCheckedValues([...checkedValues, placeholder])
    if(!checked){
     setAllChecked(false);
     setCheckedValues(checkedValues.filter(item => item !== placeholder)) 
    }
  }

  return (
    <> 
    <div> Selected Value: {checkedValues.join(", ")}</div>
      <div className='checkBox'> 
     <label>  <input type="checkbox" checked={allChecked} onChange={handleAllChange} size='large'/> Select All </label>
      {itemList.map(({ value, id, }) => {
        return <label>  <input type="checkbox" onChange={checkHandler} key={value} id={id} checked={checkedValues.includes(value)} size='large' placeholder={value}/> {value} </label>
      })}
      </div>
      </>
  );
}

export default App;
