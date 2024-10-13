import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter=0;
  let [counter,setCounter]=useState(0);

  const addValue=()=>{
    setCounter(counter+1);
      console.log("Value Added ",counter);
    
  }

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }
  const resetValue=()=>{
    setCounter(0);    
  }



  return (
    <>
      <h1>Omkar Sahane</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue} className={but1}>
        Increase Value
      </button>

      <button onClick={removeValue}>
        Decrease Value 
      </button>
      <br />
      <button onClick={resetValue}>
        Reset Value

      </button>

    </>
  )
}

export default App
