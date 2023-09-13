import { useState } from "react";
import { nanoid } from "nanoid";

function Filter(){
    const names = ["Suhaan", 'sahil', 'bhoumik', 'sharada', 'sridhar', 'divya'];

    const [display, setDisplay] = useState(names);
    const [search, setSearch] = useState('');

    function handleChange(event){
        setSearch(event.target.value);
        const newArray = display.filter(item => item.toLowerCase().includes(event.target.value));
        setDisplay(newArray);
    }

    function handleChangeButton(event){
        const newArray = display.filter(item => item.toLowerCase().includes(event.target.value));
        setDisplay(newArray);
    }

    return(
        <div className="filter--container">
            <input type="text" onChange={handleChange} value={search}/>
            <button value="bhoumik" onClick={handleChangeButton}><p>Bhoumik</p></button>
            <button value="suhaan" onClick={handleChangeButton}><p>suhaan</p></button>
            {display.map((item) => {
                return(
                    <h1 key={item}>{item}</h1>
                )
            })}
        </div>
    )
}

export default Filter;