import React from 'react'
import { useState } from 'react'

function Like() {
    const[count,setcount]=useState(0)
    const changeCount=()=>{
        setcount(count+1)
    }
  return (
    <div>
        <p>like:{count}</p>
        <button on onClick={changeCount}>Like</button>
    </div>
  )
}

export default Like