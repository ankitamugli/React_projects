import React, { useState } from 'react';

function Display() {
  const [name, ChangeName] = useState("raj");

  return (
    <div>
      <p>My name is: {name}</p>
      <button onClick={() => ChangeName("kumar")}>update</button>
    </div>
  );
}

export default Display;