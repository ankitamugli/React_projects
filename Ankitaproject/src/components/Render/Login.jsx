import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <label>Username:</label>
      <input type="text" /><br></br>

      <label>Password:</label>
      <input type="password" /><br />
   
       <Link to="/Signup">
        <button>Signup</button>
      </Link> 

       
    </div>
  );
}

export default Login;