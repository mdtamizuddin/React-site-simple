import React from 'react'
function Register() {
  return (
    <div className='register-comp'>
        <h1>Register Here</h1>
        <input type='name' placeholder='Name'required/>
        <input type='name' placeholder='UserName'required/>
        <input type='email' placeholder='Email Adress' required/>
        <input type='password' placeholder='Password' required/>
        <button>Register Now</button>
    </div>
  )
}

export default Register