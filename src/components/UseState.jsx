import React, {useState, useContext} from 'react'
import './useStateStyle.css'
import { useText } from './UseContext';



export default function UseState() {
    
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue')

  //const [state, setState] = useState({count: 4, theme: 'blue'})
  //const count = state.count
 // const theme = state.theme

   //const [count, setcount] = useState(() => {
    //console.log("run function");
    //return 4 
   //})
    
   

  function decrese () {
    //setcount(count - 1);
    //setcount(count => count - 1)
    setCount(count => count - 1)
    //setState(prevstate => {
      //return{...prevstate, count: prevstate.count - 1}
    //})
  }

  function increase () {
    //setcount(count + 1);
    setCount(prevcount => prevcount + 1)
  }

  const testText = useText()

  console.log('ykjajbfksdnfsffleakakffjenfsnfkrs',testText);

return (
    <>

      <div className="h-screen flex justify-center align-center bg-slate-600" id='div_1'>
        <button onClick={decrese}> - </button>
        <span>{count} </span>
        <span>{theme} </span>
        <button onClick={increase}> + </button>
        <h1>{testText}</h1>
      </div>
    </>
  );
  

}
