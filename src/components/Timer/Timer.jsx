import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styles from './timer.module.css';
const Timer = () => {
  const [timer, setTimer] = useState();
  const [time,setTime] = useState();
  const [status, setStatus] = useState(true);
  const [isActive, setIsActive] = useState(false);
  let timerRef = useRef();
  let prevRef =useRef(timer);
  useEffect(() => {
    if (isActive) {
      timerRef.current =
        timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
      setStatus(false);
      console.log(timer);
      if (timer == 0) {
        clearInterval(timerRef.current);
        setIsActive(false);
        setTimer(prevRef.current);
      }
    }
    else{
      clearInterval(timerRef.current);
    }
    return () => {
      setStatus(true);
      clearInterval(timerRef.current);
    };
  }, [isActive, timer]);
  return (
    <div className={styles.timerDiv} >
    <input placeholder="Enter Seconds then press Enter" type="number" onChange={(e)=>setTime(e.target.value)} onKeyUp={(e)=>{
      if(e.key=="Enter"){
        setTimer(time);
      }
    }} />
      <h1>{timer ? (timer):("-----")}</h1>
      {
        timer && <div>
        {status ? (
          <button onClick={() => setIsActive(true)}>Start</button>
  
        ) : (
          <button onClick={()=>setIsActive(false)} >Stop</button>
        )}
        </div>
      }
      
    </div>
  );
};

export default Timer;
