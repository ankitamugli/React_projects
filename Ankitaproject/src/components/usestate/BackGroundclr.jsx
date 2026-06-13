import React, { useState } from 'react';

function BackGroundclr() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    if (color === "white") {
      setColor("yellow");
    } else {
      setColor("white");
    }
  };

  return (
    <div style={{ backgroundColor: color }}>
      <p>Background Color is: {color}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default BackGroundclr;