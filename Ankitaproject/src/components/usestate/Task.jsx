import React, { useState } from 'react';

function Task() {
  const [arr, setArr] = useState([
    { name: "raj", age: 26 },
    { name: "naga", age: 42 },
    { name: "nagaraj", age: 32 }
  ]);

  const addPerson = () => {
    setArr([...arr, { name: "javascript", age: 10 }]);
  };

  return (
    <div>
      <ul>
        {arr.map((person, index) => (
          <li key={index}>{person.name} - {person.age}</li>
        ))}
      </ul>

      <button onClick={addPerson}>Add Person</button>
    </div>
  );
}

export default Task;