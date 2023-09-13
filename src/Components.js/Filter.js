import { useState } from "react";

function Filter(){
    const names = ["Suhaan", 'sahil', 'bhoumik', 'sharada', 'sridhar', 'divya'];

    const [display, setDisplay] = useState(names);
    const [search, setSearch] = useState('');

    function handleChange(event){
        setSearch(event.target.value);
        console.log(event.target.value);
        const newArray = display.filter(item => item.includes(event.target.value));
        setDisplay(newArray);
    }

    return(
        <div className="filter--container">
            <input type="text" onChange={handleChange} value={search}/>
            {names.map((item) => {
                return(
                    <h1>{item}</h1>
                )
            })}
        </div>
    )
}

export default Filter;