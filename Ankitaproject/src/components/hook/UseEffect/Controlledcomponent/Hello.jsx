import React from 'react'
import { useEffect } from 'react'

function Hello() {
     const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
    
        const handleForm = () => {
            if (name.length < 5) {
                setError("Username contain least 5 characters");
                return;
            }
            if (password.length < 7) {
                setError("Password contain least 7 characters");
                return;
            }
            setError('');
            alert("Login Successfully");
        }
  return (
    <div>
          <h3>Login Form</h3>
            <label>Username:</label>
            <input type="text" value={name}
                onChange={(e) =>
                        setName(e.target.value)}
            />
            <br />
            <br />
            <label>Password:</label>
            <input  type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleForm}>Login</button>
            <h4>{error}</h4>


    </div>
  )
}

export default Hello