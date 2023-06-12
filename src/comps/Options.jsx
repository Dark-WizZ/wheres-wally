import { useContext } from "react"
import { CoordsContext } from "../context/CoordsContext"
import wally from '../images/wally.png'
import wenda from '../images/wenda.png'
import wizard from '../images/wizard.png'
import odlaw from '../images/odlaw.png'
import { CharContext } from "../context/CharContext"

function Options(p) {

  const {x, y} = useContext(CoordsContext)
  const{setFoundWally, setFoundWizard, setFoundWenda, setFoundOdlaw,
    wallyDis, wizardDis, wendaDis, odlawDis} = useContext(CharContext)

  const optClk = (e) => {
    p.setShowOpt(false)
  }
  const wallyClk = (e) =>{
    if((x>2653 && x<2691) && (y>1263 && y<1315)){
      setFoundWally(true)
      alert('Wally Found!')
    }else{
      alert('Try again!')
    }
  }
  const wizardClk = (e) =>{
    if((x>721 && x<786) && (y>906 && y<979)){
      setFoundWizard(true)
      alert('Wizard Found!')
    }else{
      alert('Try again!')
    }
  }
  const wendaClk = (e) =>{
    if((x>378 && x<418) && (y>1619 && y<1679)){
      setFoundWenda(true)
      alert('Welda Found!')
    }else{
      alert('Try again!')
    }
  }
  const odlawClk = (e) =>{
    if((x>1959 && x<2002) && (y>1060 && y<1120)){
      setFoundOdlaw(true)
      alert('Odlaw Found!')
    }else{
      alert('Try again!')
    }
  }

  return p.showOpt && ( <div className="options" onClick={optClk} 
  style={{top:`${y}px`, left:`${x}px`}}>
    <div id="wally" onClick={wallyClk} style={{display: wallyDis}}>
      <img src={wally} alt="wally" /> WALLY</div >
    <div id="wizard" onClick={wizardClk} style={{display: wizardDis}}>
      <img src={wizard} alt="wizard" /> WIZARD</div>
    <div id="wenda" onClick={wendaClk} style={{display: wendaDis}}>
      <img src={wenda} alt="wenda" /> WENDA</div>
    <div id="odlaw" onClick={odlawClk} style={{display: odlawDis}}>
      <img src={odlaw} alt="odlaw" /> ODLAW</div>
  </div> );
}

export default Options;