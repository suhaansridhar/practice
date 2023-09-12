import { useEffect, useState } from "react";

function Stopwatch(){
    const [flag, setFlag] = useState(false);

    function startWatch(){
        setFlag(prev => !prev);
    }
    const [time, setTime] = useState(0);

    useEffect(() => {
        if(flag){
            const watch = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
    }, [flag]);

    return(
        <div className="stopwatch--container">
            <h2>{time}</h2>
            <button onClick = {startWatch}>Start</button>
        </div>
    )
}

export default Stopwatch;