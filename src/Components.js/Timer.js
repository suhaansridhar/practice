import { useEffect, useState } from "react";
import Input from "../ControlledInputs/Input";

function Timer(){

    const [timerSeconds, setTimerSeconds] = useState("");
    const [flag, setFlag] = useState(true);

    function handleChange(event){
        setTimerSeconds(event.target.value);
    }

    useEffect(() => {
        if(flag){
            const timer = setInterval(() => {
                if(timerSeconds > 0){
                    setTimerSeconds(prev => prev - 1);
                }else{
                    setTimerSeconds("Timer done!");
                    clearInterval(timer);
                }
            }, 1000)
        }
    }, [flag])

    return(
        <div className="timer--container">
            <Input 
                type = "number" 
                placeholder = "Enter your timer secs"
                name = 'timer'
                value = {timerSeconds}
                handleChange = {handleChange}
            />
            <button onClick={() => setFlag(prev => !prev)}>Start</button>
            <h1>Time remaining : {timerSeconds}</h1>
        </div>
    )
}

export default Timer;