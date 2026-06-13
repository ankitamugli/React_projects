import React from 'react'
import { useState } from 'react'

function FnState() {
    const[count,setCount]=useState(0)
    const incCounter=()=>{
        setCount(count+1);
    }
  return (
    
    <div>
        <h1>countis:{count+1}</h1>
        <button onClick={incCounter}>increment</button>
      
    </div>
  )
}

export default FnState
