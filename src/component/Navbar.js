import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar= () => {
    const [resNav , setResnav] = useState('topnav')
    const navControlar =()=>{
        if (resNav === "topnav") {
            setResnav("responsive")
          } else {
            setResnav("topnav")
          }
    }
  return (
    <nav>
       <div className='nav-content'>
       <div className='logo'>
            <Link to='/'> <h1>MD TOMIZ</h1></Link>
            <i onClick={navControlar} className="fa-solid fa-bars"></i>
        </div>
        <ul className={resNav} id='nav-manu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/service'>Service</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/course'>Courses</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><Link to='/user'><i className="fa-solid fa-user"></i></Link></li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar