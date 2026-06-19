import React from 'react'

function Btn({ setusername }) {
  const addname = () => {
    setusername("Nagaraj")
  }

  return (
    <div>
      <button onClick={addname}>Add Name</button>
    </div>
  )
}

export default Btn