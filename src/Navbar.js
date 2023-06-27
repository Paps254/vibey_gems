import React from 'react'
import './styles.css'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'>
                <i className='fa-solid fa-font-awesome'></i>
                <a href='#'>LOGO</a>
            </div>
            <div className='menu'>
                <div className='menu-links'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#'>Blog</a>
                </div>
                <button className='log-in'>Log In</button>
            </div>
            <div className='menu-btn'>
                <i className='fa-solid fa-bars'></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar