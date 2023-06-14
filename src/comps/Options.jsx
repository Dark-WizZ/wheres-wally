import { useContext } from "react"
import { CoordsContext } from "../context/CoordsContext"
import wally from '../images/wally.png'
import wenda from '../images/wenda.png'
import wizard from '../images/wizard.png'
import odlaw from '../images/odlaw.png'
import { CharContext } from "../context/CharContext"
import toast from 'toastr'

function Options(p) {

  const {x, y, wallyP, wizardP, wendaP, odlawP} = useContext(CoordsContext)
  const{setFoundWally, setFoundWizard, setFoundWenda, setFoundOdlaw,
    wallyDis, wizardDis, wendaDis, odlawDis} = useContext(CharContext)

  const optClk = (e) => {
    p.setShowOpt(false)
  }
  const wallyClk = (e) =>{
    toast.options={
      'preventDuplicates':true,
      'positionClass':'toast-top-center'
    }
    if((x>wallyP.x1 && x<wallyP.x2) && (y>wallyP.y1 && y<wallyP.y2)){
      setFoundWally(true)
      toast.success('Wally Found!')
    }else{
      toast.error('Keep looking','Try again!')
    }
  }
  const wizardClk = (e) =>{
    if((x>wizardP.x1 && x<wizardP.x2) && (y>wizardP.y1 && y<wizardP.y2)){
      setFoundWizard(true)
      toast.success('Wizard Found!')
    }else{
      toast.error('Keep looking','Try again!')
    }
  }
  const wendaClk = (e) =>{
    if((x>wendaP.x1 && x<wendaP.x2) && (y>wendaP.y1 && y<wendaP.y2)){
      setFoundWenda(true)
      toast.success('Welda Found!')
    }else{
      toast.error('Keep looking','Try again!')
    }
  }
  const odlawClk = (e) =>{
    if((x>odlawP.x1 && x<odlawP.x2) && (y>odlawP.y1 && y<odlawP.y2)){
      setFoundOdlaw(true)
      toast.success('Odlaw Found!')
    }else{
      toast.error('Keep looking','Try again!')
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