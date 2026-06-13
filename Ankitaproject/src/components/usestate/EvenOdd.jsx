import React, { useState } from 'react';

function EvenOdd() {
  const [even, setchecker] = useState(8);

  const evenorodd = () => {
    setchecker(even + 1);
  };

  return (
    <div>
      <h1>{even % 2 === 0 ? "Even" : "Odd"}</h1>
      <button onClick={evenorodd}>EvenOdd</button>
    </div>
  );
}

export default EvenOdd;