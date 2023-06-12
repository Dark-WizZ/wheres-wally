import { useState, createContext, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const CharContext = createContext()

function CharContextProvider({children}) {

  const [foundWally, setFoundWally] = useState(false)
  const [foundWizard, setFoundWizard] = useState(false)
  const [foundWenda, setFoundWenda] = useState(false)
  const [foundOdlaw, setFoundOdlaw] = useState(false)

  const [wallyDis, setWallyDis] = useState('flex')
  const [wizardDis, setWizardDis] = useState('flex')
  const [wendaDis, setWendaDis] = useState('flex')
  const [odlawDis, setOdlawDis] = useState('flex')

  const [wallyOpac, setWallyOpac] = useState('100%')
  const [wizardOpac, setWizardOpac] = useState('100%')
  const [wendaOpac, setWendaOpac] = useState('100%')
  const [odlawOpac, setOdlawOpac] = useState('100%')

  const{setGameover} = useContext(UserContext)

  useEffect(()=>{
    let found=0;
    if(foundWally){
      setWallyDis('none')
      setWallyOpac('35%')
      found++
    }
    if(foundWizard){
      setWizardDis('none')
      setWizardOpac('35%')
      found++
    }
    if(foundWenda){
      setWendaDis('none')
      setWendaOpac('35%')
      found++
    }
    if(foundOdlaw){
      setOdlawDis('none')
      setOdlawOpac('35%')
      found++
    }
    if(found>3){
      setGameover(true)
    }
  })

  return <CharContext.Provider value={{
    setFoundWally, setFoundWizard, setFoundWenda, setFoundOdlaw,
    wallyDis, wizardDis, wendaDis, odlawDis,
    wallyOpac, wizardOpac, wendaOpac, odlawOpac
  }}>
    {children}
  </CharContext.Provider>;
}

export default CharContextProvider;