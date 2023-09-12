import Component1 from "./Component1";
import {useState} from 'react';

function App(){
  const [inputValue, setInputValue] = useState('');
  function handleChange(event){
    setInputValue(event.target.value);
  }
  return(
    <div>
      <Component1 
        type = "text" 
        placeholder = "Enter your name" 
        name = "firstName"
        value = {inputValue}
        handleChange = {handleChange}
        />
        <h1>{inputValue}</h1>
    </div>
  )
}

export default App;