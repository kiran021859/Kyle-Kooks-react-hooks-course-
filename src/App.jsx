import React, { useState } from 'react';
import './App.css';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import { TextProvider } from './components/UseContext'
import UseMemo from './components/UseMemo';




function App() {
 
  



  return(
  <>
  <TextProvider>  
    <UseState/>
    <UseEffect/>
    <UseRef/>
    <UseMemo/>
  </TextProvider>  
  
  </>
  )

  
}

export default App
