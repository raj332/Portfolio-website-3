import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <section className="top-nav">
    <h1 className='neonText4'>
       Raj
    </h1>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu neonText2">
    <li>01.Home</li>
    <li>02.Resume</li>
    <li>03.Work</li>
    <li>04.Certificates</li>
    <li>05.Contact me</li>
    </ul>
  </section>

  )
}

export default Navbar