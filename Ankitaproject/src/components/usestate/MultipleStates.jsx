// import React, { useState } from 'react';

// function Student() {
//   const [student, setStudent] = useState({
//     name: "Raj",
//     age: 20,
//     course: "React"
//   });

//   return (
//     <div>
//       <h2>{student.name}</h2>
//       <h2>{student.age}</h2>
//       <h2>{student.course}</h2>

//       <button
//         onClick={() =>
//           setStudent({ ...student, age: 25 })
//         }
//       >
//         Update Age
//       </button>
//     </div>
//   );
// }

// export default Student;

// import React, { useState } from 'react';



// import React, { useState } from 'react';

// function FontSize() {
//   const [size, setSize] = useState(20);

//   return (
//     <div>
//       <p style={{ fontSize: `${size}px` }}>
//         React
//       </p>

//       <button onClick={() => setSize(size + 5)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default FontSize;

// import React, { useState } from 'react';

// function Light() {
//   const [light, setLight] = useState(false);

//   return (
//     <div>
//       <h2>{light ? "Light ON" : "Light OFF"}</h2>

//       <button onClick={() => setLight(!light)}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// export default Light;

import React, { useState } from 'react';

function LoginLogout() {
  const [login, setLogin] = useState("Login");

  return (
    <div>
      <button
        onClick={() =>
          setLogin(
            login === "Login" ? "Logout" : "Login"
          )
        }
      >
        {login}
      </button>
    </div>
  );
}

export default LoginLogout;