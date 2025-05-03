import React from 'react'


const NavBar = () => {
  return (
    <nav>
    <a href="#hero"><img src="/LOGO.png" alt="LOGO"></img></a>
    <div className="desktop">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
    </div>
    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" alt="MENU" className="menu"></img>
</nav>
  )
}

export default NavBar
