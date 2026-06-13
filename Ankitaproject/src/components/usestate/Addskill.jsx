import React, { useState } from 'react';

function Addskill() {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const addSkill = () => {
    setSkills([...skills, "JavaScript"]);
  };

  return (
    <div>
      <ul>
        {skills.map((skill, ind) => (
          <li key={ind}>{skill}</li>
        ))}
      </ul>

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}

export default Addskill;