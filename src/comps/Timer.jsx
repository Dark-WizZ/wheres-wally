import { useEffect, useState } from "react";

function Timer() {

  const [sec, setSec] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setSec((p)=>p+1)
    },1000)

    return () => {
      clearInterval(timer)
    }
  },[])

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