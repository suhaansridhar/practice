import { useEffect, useState } from "react";

function Timer1(){
    const [seconds, setSeconds] = useState(30);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if(flag){
            const timer = setInterval(() => {
                if(seconds > 0){
                    setSeconds(prevCount => prevCount - 1);
                }else{
                    setSeconds("Timer done");
                    clearInterval(timer);
                }
            }, 1000);
        }   
    }, [flag]);

    return(
        <div>
            <h2>{seconds}</h2>
            <button onClick={() => setFlag(true)}>Start</button>
            <button onClick={() => setFlag(false)}>Stop</button>
        </div>
    )
}

export default Timer1;