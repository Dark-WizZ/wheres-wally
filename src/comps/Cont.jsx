import { CoordsContext } from '../context/CoordsContext';
import fruitFight from '../images/fruit_fight.jpg'
import Options from './Options';
import { useState, useContext } from 'react';
import toastr from 'toastr';

function Cont() {
  const [showOpt, setShowOpt] = useState(false)
  const {setX, setY} = useContext(CoordsContext)
 
  const imgClk = (e) => {
    let x=e.nativeEvent.offsetX
    let y=e.nativeEvent.offsetY
    console.log({x,y})
    setX(e.nativeEvent.offsetX)
    setY(e.nativeEvent.offsetY)
    if (showOpt) setShowOpt(false)
    else setShowOpt(true)
  }

  return ( <div className='cont'>
    <img src={fruitFight} alt="fruit fight" onClick={imgClk}/>
    <Options setShowOpt={setShowOpt} showOpt={showOpt}/>
  </div>);
}

export default Cont;