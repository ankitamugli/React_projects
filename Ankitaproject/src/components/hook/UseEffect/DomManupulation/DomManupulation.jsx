import React, { useEffect, useState } from 'react'
function DomManupulation() {
    const[title,setTitle]=useState("doraproject")
    useEffect(
    ()=>{
        document.title="dhe coding lab";
    }
    )
  return (
    <div>
      dommanupulation
    </div>
  )
}

export default DomManupulation
