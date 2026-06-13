import React, { useState } from 'react';

function ToggleText() {
  const [text, setText] = useState("Welcome");

  const toggleText = () => {
    if (text === "Welcome") {
      setText("Good Bye");
    } else {
      setText("Welcome");
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={toggleText}>Toggle</button>
    </div>
  );
}

export default ToggleText;