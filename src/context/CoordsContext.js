import {useState, createContext } from "react";

export const CoordsContext = createContext([0,0])

export const CoordsContextProvider = ({children}) => {

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  return( 
  <CoordsContext.Provider value={{x, setX, y, setY}}>
    {children}
  </CoordsContext.Provider>)
}