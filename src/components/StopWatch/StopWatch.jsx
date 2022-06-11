import React, { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "./stopwatch.module.css";
const StopWatch = () => {
  const [toogle, setToogle] = useState(true);
  const [time, setTime] = useState(0);
  const [milSec, setMilSec] = useState(0);
  const [active, setActive] = useState(false);
  const [reset, setReset] = useState(true);
  let timeRef = useRef();
  let milRef = useRef();
  useEffect(() => {
    if (reset == false) {
      setTime(0);
      setMilSec(0);
      clearInterval(timeRef);
      clearInterval(milRef);
      setReset(true);
    }
    if (active) {
      console.log(`started use ref for${timeRef}`);
      setToogle(false);
      timeRef = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      milRef = setInterval(() => {
        setMilSec((prev) => prev + 1);
      }, 10);
    }
    return () => {
      setToogle(true);
      console.log(`deleted use ref for${timeRef}`);
      clearInterval(timeRef);
      clearInterval(milRef);
    };
  }, [active, reset]);

  return (
    <div className={styles.stopDiv}>
      <h1>{`${time < 10 ? "0" + time : Math.floor(time % 60)}:${
        milSec < 10
          ? "0" + milSec
          : Math.floor(milSec % 60) < 10
          ? "0" + Math.floor(milSec % 60)
          : Math.floor(milSec % 60)
      }`}</h1>
      <div className={styles.btnDiv} >
        {toogle ? (
          <button onClick={() => setActive(true)}>Start</button>
        ) : (
          <button onClick={() => setActive(false)}>Stop</button>
        )}
        <button
          onClick={() => {
            setActive(false);
            setReset(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
