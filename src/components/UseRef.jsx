import React, {useState, useRef, useEffect} from 'react'
import './useRef.css'






export default function UseRef() {


const [name, setName] = useState("");
const prevName = useRef('');
//const [renderCount, setRenderCount] = useState(0); 
//const count = useRef(1)
const inputRef = useRef();


useEffect(() => {
   //setRenderCount(renderCount => renderCount + 1); will cause infinite loop if executed
   //count.current = count.current + 1
   prevName.current = name

}, [name]);

function focus () {
    inputRef.current.focus()    
};

  return (
    <>
    <div className='h-screen flex flex-col bg-slate-600'>
        {/*<input value={name} onChange={e => setName(e.target.value) } id='input'></input>*/}
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value) } id='input'></input>
        <div id='text'>My name is {name} My name was {prevName.current}</div>
        {/*<div id='text'>I rendeered {count.current} times</div>*/}
        {/*<div id='text'>I rendeered {count.current} times</div>*/}
        <button onClick={focus}>focus</button>
    </div>
    
    </>
  )
}
