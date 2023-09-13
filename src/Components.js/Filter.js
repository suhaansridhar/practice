import { useState } from "react";
import { nanoid } from "nanoid";

function Filter(){
    const names = ["Shaun", 'simone', 'brian', 'sally', 'san jose', 'denmark'];

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
            <button value="brian" onClick={handleChangeButton}><p>brian</p></button>
            <button value="shaun" onClick={handleChangeButton}><p>shaun</p></button>
            {names.filter((item) => {
                return item.toLowerCase() === '' ? item : item.toLowerCase().includes(search)
                }).map(item => {
                    return(
                        <h1 key={item}>{item}</h1>
                    )
                })
            }
        </div>
    )
}

export default Filter;