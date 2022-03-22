import React from 'react'

function Login() {
  return (
    <div className='register-comp'>
        <h1>Login</h1>
        
        <input type='email' placeholder='email/username' required/>
        <input type='password' placeholder='Password' required/>
        <button>Login Now</button>
    </div>
  )
}

export default Login