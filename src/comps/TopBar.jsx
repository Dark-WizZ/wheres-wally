import wally from '../images/wally.png'
import wenda from '../images/wenda.png'
import wizard from '../images/wizard.png'
import odlaw from '../images/odlaw.png'
import Timer from './Timer';
import { useContext } from 'react';
import { CharContext } from '../context/CharContext';

function TopBar() {
  const {wallyOpac, wizardOpac, wendaOpac, odlawOpac}=useContext(CharContext)

  return ( <div className="top_bar">
    <div className="title">WHERE's <span>WALLY</span></div>
    <Timer />
    <div className="characters">
      <div className="text">FIND</div>
      <img src={wally} style={{opacity:wallyOpac}} alt="wally" id='wally'/>
      <img src={wizard} style={{opacity:wizardOpac}} alt="wizard" id='wizard'/>
      <img src={wenda} style={{opacity:wendaOpac}} alt="wenda" id='wenda'/>
      <img src={odlaw} style={{opacity:odlawOpac}} alt="odlaw" id='odlaw'/>
    </div>
  </div> );
}

export default TopBar;