import React, { useState } from 'react';
import './App.css';
import UseState from './components/useState';
import UseEffect from './components/UseEffect';
import { TextProvider } from './components/UseContext'




function App() {
 
  



  return(
  <>
  <TextProvider>  
    <UseState/>
    <UseEffect/>
  </TextProvider>  
  
  </>
  )

  
}

export default App
