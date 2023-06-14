import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

function Score(p) {

  const {showScore, setShowScore, score,setScore,name,
    setName,setShowLBoard, gameover} = useContext(UserContext)
  const {updateDoc, doc, db, getDoc,auth, Timestamp} = useContext(AuthContext)

    useEffect(()=>{
      if(!auth.currentUser) return
      if(gameover){
        (async() =>{
          await updateDoc(doc(db,'users',auth.currentUser.uid),{'end':Timestamp.now().toMillis()})
          const data = (await getDoc(doc(db,'users',auth.currentUser.uid))).data()
          const duration = Math.round((data.end-data.start)/100)
          setScore(duration)
          await updateDoc(doc(db,'users',auth.currentUser.uid),{'duration':duration})
        })()
        setShowScore(true)
      }
    },[gameover])

    useEffect(()=>{
      if(!auth.currentUser) return
      (async() => {
        await updateDoc(doc(db,'users',auth.currentUser.uid),{'username':name})
      })()
    },[name])
    
    const nameSubmit = async(e) =>{
      e.preventDefault()
      const username = document.getElementById('name_ip').value
      const nameErr = document.getElementById('name_error')
      const docRef = doc(db,'leaderboard','scores')
      const data = (await getDoc(docRef)).data()
      const names = Object.keys(data)
      if(names.includes(username)) {
        nameErr.style.display = 'block'
        return
      }
      setName(username)
      setShowScore(false)
      setShowLBoard(true)
  }

  return showScore && ( <div className="score_layout">
    <div className="wrapper">
      <div className="score_label">YOUR DURATION</div>
      <div className="score">{score}</div>
      <label htmlFor="name_ip">YOUR NAME</label>
      <form onSubmit={nameSubmit}>
        <input type="text" id="name_ip" required/>
        <div className="note">Name must be unique.</div>
        <div id="name_error">Name already exists!</div>
        <button type="submit">{'SUBMIT>>'}</button>
      </form>
    </div>
  </div> );
}

export default Score;