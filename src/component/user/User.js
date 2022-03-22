import React from 'react'
import { Outlet } from 'react-router-dom';
import Button from '../sub-comp/Button';
import './User.css'
function User() {

  return (
    <div className='user-page fade-down'>
      <div className='user-box-left'>
        <Button
          btnBg='white'
          color='rgb(15, 5, 56)'
          width='200px'
          id='register-btn'
          btnText='Register'
          to='register' />
        <Button btnBg='white'
          width='200px'
          color='rgb(15, 5, 56)'
          id='login-btn'
          btnText='Login'
          to='login' />
      </div>
      <div className='user-box-right'>
        <Outlet />
      </div>
    </div>
  )
}

export default User;