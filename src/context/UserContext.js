import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({children}) => {

  const [name, setName] = useState('Anonymmous')
  const [score, setScore] = useState(0)
  
  const [showScore, setShowScore] = useState(false)
  const [showLBoard, setShowLBoard] = useState(false)

  const [gameover, setGameover] = useState(false)

  return<UserContext.Provider value={{name, setName, score,
  setScore, showScore, setShowScore, showLBoard, setShowLBoard,
  gameover, setGameover}}>
    {children}
  </UserContext.Provider>
}

export default UserContextProvider