import { useContext, useEffect,useState } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

function LBoard(p) {
  const {showLBoard, score, name, gameover,rank,setRank} = useContext(UserContext)
  const {updateDoc, doc, db, getDoc,auth, setDoc,Timestamp} = useContext(AuthContext)
  const [top3, setTop3] = useState([])

  const calcRank = (data) => {
    let val = Object.values(data)
    let scores = [...(new Set(val))].sort()
    scores.sort()
    let rank=0
    for(let i of scores){
      rank++
      if(score <= i) break
    }
    setRank(rank)
  }

  useEffect(()=>{
    (async()=>{
      if(!gameover) return
      const docRef = doc(db,'leaderboard','scores')
      await updateDoc(docRef,{[name]:score})
      const data = (await getDoc(docRef)).data()
      let dataArr=Object.entries(data)
      dataArr=dataArr.sort((a,b)=>{return a[1]-b[1]})
      console.log(dataArr)
      setTop3(dataArr.slice(0,3))
      calcRank(data)
    })()
  },[name])

  const replay = (e) => {
    // setScore(0)
    // setShowLBoard(false)
    // setGameover(false)
    window.location.reload()
  }

  return showLBoard && ( <div className="lboard_layout">
    <div className="wrapper">
      <div className="score">YOUR DURATION: {score}</div>
      <div className="lboard">
        <label>LEADERBOARD</label>
        <div className="players">
          {top3.map((e,i)=>{
            return<div className={`user${i+1}`}>
            #{i+1} {e[0]}: {e[1]}
            </div>
          })}
        </div>
      </div>
      <div className="user_rank">
        <label htmlFor="user_rank">YOUR RANK</label>
        <div id="user_rank">#{rank} {name}: {score}</div>
      </div>
      <button onClick={replay}>{'<<REPLAY'}</button>
    </div>
  </div> );
}

export default LBoard;