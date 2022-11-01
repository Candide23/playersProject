import React from 'react'
import { Link } from 'react-router-dom'
//import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
           <li>
             <Link to='/services'>Services</Link>
           </li>
           <li>
             <Link to='/login'>Login</Link>
           </li>
           <li>
             <Link to='/register'>Register</Link>
           </li>
          
        </ul>
      </div>
    </nav>
  )
}
