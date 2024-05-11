import React from 'react'
import './Navbar.css'
import Logo from '../../images/Logo.png'
import plane_logo from '../../images/plane_logo.png'
import ion_bed from '../../images/ion_bed.png'

const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className="nav__link">
            <ul>
           <li><img src={plane_logo} alt='plane' className='nav__img'/><a href='#'>Find flight</a></li>
                <li><img src={ion_bed} alt='bed' className='nav__img'/><a href='#'>find stays</a></li>
            </ul>
        </div>
        <div className="nav__logo">
            <img src={Logo} alt='golobe'/>
        </div>
        <div className="nav__btn">
            <button className='login' style={{border:'none', background:'none', textTransform: "capitalize",fontWeight:'600',fontSize:'16px'}}>login</button>
            <button className='sign_up'>sign up</button>
        </div>
    </div>
  )
}

export default Navbar