import React from 'react'
import logo from '../Images/mainicon1.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div class="container">
   <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <img src={logo} class="img-fluid" className='img'alt="logo-icon"/>
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link col" to='/homepage'>HOME</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link col">ABOUT</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle col" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LOGIN
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item col" to='/loginpage'>Admin</Link></li>
            <li><Link class="dropdown-item col" to='/logininstructor'>Instructor</Link></li>
            <li><Link class="dropdown-item col" to='/loginis'>Student</Link></li>
          </ul>
        
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle col" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            REGISTER
          </a>
          <ul class="dropdown-menu">
            <li><Link to='/signupinstructor' class="dropdown-item col">Instructor</Link></li>
            <li><Link to='/regpage' class="dropdown-item col">Student</Link> </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
      
    </div>
  )
}

export default Nav