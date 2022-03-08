import React from 'react'
import Logo from "../images/logo.svg"

export default function Navbar() {
  return (
    <nav>
      <span className='logo'>
        <img src={Logo} alt="" />
      </span>
      <span>
        <h1>TAKUNDA.</h1>
      </span>
      <span>
        <a href="#">Register</a>
        <a href="#">Sign Up</a>
        <a href="#">Cart</a>
      </span>
    </nav>
  )
}
