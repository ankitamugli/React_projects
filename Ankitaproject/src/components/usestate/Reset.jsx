import React from 'react'
import { useState } from 'react'

function Reset() {
      const[count,setCount]=useState(5)
        const changeCount=()=>{
            setCount(count+1)
        }
        const changeReset=()=>{
            setCount(0)
        }
  return (
    
    <div>
        <p>reset:{count}</p>
        <button onClick={changeCount}>Increment</button>
        <button onClick={changeReset}>reset</button>
    </div>
  )
}

export default Reset
