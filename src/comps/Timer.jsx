import { useEffect, useState, useContext } from "react";
import { CharContext } from "../context/CharContext";

function Timer() {

  const{gameover} = useContext(CharContext)
  const [sec, setSec] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setSec((p)=>p+1)
    },1000)

    if(gameover) clearInterval(timer)

    return () => {
      clearInterval(timer)
    }
  },[gameover])

  const minutes = Math.floor(sec/60).toString().padStart(2,'0')
  const seconds = (sec%60).toString().padStart(2,'0') 

  return (<div className="timer">
    <div className="minutes">
      {`${minutes}. `}
    </div>
    <div className="seconds">
      {seconds}
    </div>
  </div>);
}

export default Timer;