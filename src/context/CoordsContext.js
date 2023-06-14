import {useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CoordsContext = createContext([0,0])

export const CoordsContextProvider = ({children}) => {

  const{db, getDoc, doc} = useContext(AuthContext)

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  const [wallyP, setWallyP] = useState({})
  const [wizardP, setWizardP] = useState({})
  const [wendaP, setWendaP] = useState({})
  const [odlawP, setOdlawP] = useState({})

  useEffect(()=>{
    (async()=>{
      const charsName = ['wally','wizard','wenda','odlaw']
      const charSetter = [setWallyP,setWizardP,setWendaP,setOdlawP]
      for(let i in charsName){
        const docRef=doc(db,'coords',charsName[i])
        const data = (await getDoc(docRef)).data()
        charSetter[i](data)
      }
    })()
  },[])

  return( 
  <CoordsContext.Provider value={{x, setX, y, setY,
    wallyP, wizardP, wendaP, odlawP}}>
    {children}
  </CoordsContext.Provider>)
}