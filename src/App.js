import Component1 from "./Component1";
import {useState} from 'react';

function App(){
  const [inputValue, setInputValue] = useState({"firstName" : '', "lastName" : ''});
  function handleChange(event){
    console.log(event.target.name)
    const name = event.target.name;
    const value = event.target.value;
    setInputValue(prevValues => ({...prevValues, [name] : value}));
  }

  return(
    <div>
      <Component1 
        type = "text" 
        placeholder = "Enter your First Name" 
        name = "firstName"
        value = {inputValue.firstName}
        handleChange = {handleChange}
        />

      <Component1 
        type = "text"
        placeholder = "Enter your Last Name"
        name = "lastName"
        value = {inputValue.lastName}
        handleChange = {handleChange}
        />

        <h1>First Name is : {inputValue.firstName}</h1>
        <h1>Last Name is : {inputValue.lastName}</h1>
    </div>
  )
}

export default App;