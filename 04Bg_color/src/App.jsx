import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]= useState("olive");

  return (
    <>

    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >

    <div className='fixed flex flex-wrap justify-center
     bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3
      shadow-xl bg-white  px-3 py-2
      rounded-xl'> 
      <button 
      onClick={()=>setColor("red")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"red"}}
      >Red</button>
       <button 
       onClick={()=>setColor("black")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"black"}}
      >White</button>
       <button 
       onClick={()=>setColor("green")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"green"}}
      >Green</button>
       <button 
       onClick={()=>setColor("orange")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"orange"}}
      >Orange</button>
       <button 
       onClick={()=>setColor("lavender")}
      className='outline-none px-3 py-1
      rounded-full text-black shadow-lg'
      style={{background:"lavender"}}
      >Lavender</button>
        <button 
       onClick={()=>setColor("yellow")}
      className='outline-none px-3 py-1
      rounded-full text-black shadow-lg'
      style={{background:"yellow"}}
      >Yellow</button>
       <button 
       onClick={()=>setColor("violet")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"violet"}}
      >Violet</button>
       <button 
       onClick={()=>setColor("blue")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"blue"}}
      >Blue</button>
       <button 
       onClick={()=>setColor("indigo")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"indigo"}}
      >Indigo</button>
      <button 
       onClick={()=>setColor("purple")}
      className='outline-none px-3 py-1
      rounded-full text-white shadow-lg'
      style={{background:"purple"}}
      >Purple</button>
      <button 
      onClick={()=>setColor("white")}
     className='outline-none px-3 py-1
     rounded-full text-black shadow-lg'
     style={{background:"white"}}
     >White</button>
    <button 
      onClick={()=>setColor("brown")}
     className='outline-none px-3 py-1
     rounded-full text-black shadow-lg'
     style={{background:"brown"}}
     >Brown</button>
    
      </div>
     </div>
     </div>
    </>
  )
}

export default App
