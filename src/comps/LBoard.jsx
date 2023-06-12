import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function LBoard(p) {
  const {showLBoard, score, name, setGameover, setShowLBoard, setScore} = useContext(UserContext)

  const replay = (e) => {
    setScore(0)
    setShowLBoard(false)
    setGameover(false)
  }

  return showLBoard && ( <div className="lboard_layout">
    <div className="wrapper">
      <div className="score">YOUR SCORE: {score}</div>
      <div className="lboard">
        <label>LEADERBOARD</label>
        <div className="players">
          <div className="user1">
            #1 ARUN: 1090
          </div>
          <div className="user2">
            #2 VASANTH: 2000
          </div>
          <div className="user2">
            #3 DIAMNA: 9090
          </div>
        </div>
      </div>
      <div className="user_rank">
        <label htmlFor="user_rank">YOUR RANK</label>
        <div id="user_rank">#12 {name}: {score}</div>
      </div>
      <button onClick={replay}>{'<<REPLAY'}</button>
    </div>
  </div> );
}

export default LBoard;