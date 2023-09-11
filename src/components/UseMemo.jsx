import React, { useState } from 'react'
import './useMemo.css'
export default function UseMemo() {

    const [number, setNumber] = useState();
    const [dark, setDark ] = useState();
    const doublenumber = slowFunction(number);
    const themeStyle = {
        backgroundColors: dark ? 'black':'white', 
        colors: dark ? 'white': 'blank'
    }


  return (
    <>
    <div className='h-screen flex flex-col bg-slate-600'>
        <input id='input' type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
        <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
        <div id='text' style={themeStyle}>double number:{doublenumber}</div>
    </div>
    </>
  )
}


function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++ ) {}
    return num * 2
}