import {useEffect, useState} from 'react';

function Stopwatch(){
    const [seconds, setSeconds] = useState(30);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if(flag){
            const timer = setInterval(() => {
                if(seconds > 0){
                    setSeconds(prevValue => prevValue - 1);
                }else{
                    clearInterval(timer);
                }
            }, 1000)
        }
    }, [flag]);

    return(
        <div className="stopwatch--container">
            <h3>StopWatch Timer</h3>
            <div className='stopwatch--container--inner'>   
                <h3>{seconds} secs</h3>
            </div>
            <button onClick={() => setFlag(!flag)}>Start</button>
        </div>
    )
}

export default Stopwatch;