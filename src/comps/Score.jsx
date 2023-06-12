import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function Score(p) {

  const {showScore, setShowScore, score,
    setName,setShowLBoard, gameover} = useContext(UserContext)

    useEffect(()=>{
      if(gameover){
        console.log('dhittttttttt')
        setShowScore(true)
      }
    },[gameover])
    
    const nameSubmit = (e) =>{
      setName(document.getElementById('name_ip').value)
      setShowScore(false)
      setShowLBoard(true)
  }

  return showScore && ( <div className="score_layout">
    <div className="wrapper">
      <div className="score_label">YOUR SCORE</div>
      <div className="score">{score}</div>
      <label htmlFor="name_ip">YOUR NAME</label>
      <input type="text" id="name_ip" />
      <button onClick={nameSubmit}>{'SUBMIT>>'}</button>
    </div>
  </div> );
}

export default Score;