import React, { useState } from 'react';

function HideShow() {
  const [show, setShow] = useState(true);

  const toggleParagraph = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <p>This is a paragraph </p>}

      <button onClick={toggleParagraph}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default HideShow;