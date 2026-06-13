import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
    <h1>welcome to sign in page</h1>
     <div>Signin</div>
    <button>Signin</button>

    <Link to="/Home">
            <button>Home</button>
          </Link>
    </>
   
  )
}

export default Signup
