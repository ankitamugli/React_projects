import React, { useState } from 'react';

function NameChange() {
  const [name, ChangeName] = useState("Ankita");

  return (
    <div>
      <p>My name is: {name}</p>

      <button onClick={() => ChangeName("doremon")}>
        Change Name
      </button>
    </div>
  );
}

export default NameChange;