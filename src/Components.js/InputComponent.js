
import {useState} from 'react';
import Input from './ControlledInputs/Input';

function InputComponent(){
  const [inputValue, setInputValue] = useState({"firstName" : '', "lastName" : ''});

  function handleChange(event){
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputValue(prevValues => ({...prevValues, [name] : value}));
  }

  return(
    <div>
      <Input
        type = "text" 
        placeholder = "Enter your First Name" 
        name = "firstName"
        value = {inputValue.firstName}
        handleChange = {handleChange}
        />

      <Input 
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

export default InputComponent;