import React from 'react'
import { useState } from 'react'

function FnState() {
    const[count,setCount]=useState(0)
    const changeCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p>count is:{count}</p>
        <button onClick={changeCount}>Increment</button>
      
    </div>
  )
}

export default FnState
