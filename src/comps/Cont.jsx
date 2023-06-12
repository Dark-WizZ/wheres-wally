import { CoordsContext } from '../context/CoordsContext';
import fruitFight from '../images/fruit_fight.jpg'
import Options from './Options';
import { useState, useEffect, useContext } from 'react';

function Cont() {
  const [showOpt, setShowOpt] = useState(false)
  const {setX, setY} = useContext(CoordsContext)
 
  const imgClk = (e) => {
    setX(e.nativeEvent.layerX)
    setY(e.nativeEvent.layerY)
    if (showOpt) setShowOpt(false)
    else setShowOpt(true)
  }

  return ( <div className='cont'>
    <img src={fruitFight} alt="fruit fight" onClick={imgClk}/>
    <Options setShowOpt={setShowOpt} showOpt={showOpt}/>
  </div>);
}

export default Cont;