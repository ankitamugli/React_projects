import React from 'react'
import { useState } from 'react'

function ChangeAge() {
    const[student,setstudent]=useState({name:"Raj",age:52})
    const agechange=()=>{
        setstudent({...student,age:62})
    }
  return (
    <div>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <button onClick={agechange}>click to change</button>
    </div>
  )
}

export default ChangeAge