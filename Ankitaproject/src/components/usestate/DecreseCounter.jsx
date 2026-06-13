import React from 'react'
import { useState } from 'react';

function DecreseCounter() {
    const[count,setCount]=useState(10)
    const DecreseCounter=()=>{
        setCount(count-1);
    }

  return (
    <div>
        <p>count is:{count}</p>
       <button onClick={DecreseCounter}>decrement</button>
       
    </div>
  )
}

export default DecreseCounter

