import React, { useState } from 'react'

function ControlledComponent1() {
    const [name,setname]=useState('')
    const [error,setError]=useState('')
    const handleform =(e)=>{
        if(name.length>5){
            setError("must be 5 character")
        }
        else{
            Error("")
            alert("done")
        }
    }
  return (
    <div>
        
        <h1>ControlledComponent1</h1>
        
        <label>username:</label>
            <input type="text" value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <button onClick={handleForm}>login</button>
            <h1>{error}</h1>

            
    </div>
  )
}

export default ControlledComponent1