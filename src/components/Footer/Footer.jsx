import React from 'react'
import './Footer.css'
import footerLogo from '../../images/footerLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Subscription from '../Subscription/Subscription'
const Footer = () => {
  return (
    <>
    <Subscription/>
    <div className="footer__container">
          <div className="follow__section">
                <img src={footerLogo} alt='logo' className='footer__logo'/>
                <div className="medias">
                      <FontAwesomeIcon icon={faFacebook} className='media__icons' />
                      <FontAwesomeIcon icon={faTwitter} className='media__icons' />
                      <FontAwesomeIcon icon={faYoutube} className='media__icons' />
                      <FontAwesomeIcon icon={faSquareInstagram} className='media__icons' />
                </div>
          </div>
          <div className="quicklinks__section">
            <ul className='links'>
            <h5>our destinations</h5>
                  <li>Canada</li>
                  <li>Alaksa</li>
                  <li>France</li>
                  <li>Iceland</li>
                </ul>
                <ul className='links'>
            <h5>Our Activities</h5>
                  <li>Northern Lights</li>
                  <li>Cruising & sailing</li>
                  <li>Multi-activities</li>
                  <li>Kayaing</li>
                </ul>

                <ul className='links'>
            <h5>Travel Blogs</h5>
                  <li>Bali Travel Guide</li>
                  <li>Sri Lanks Travel Guide</li>
                  <li>Peru Travel Guide</li>
                  <li>Bali Travel Guide</li>
                </ul>
                <ul className='links'>
            <h5>About Us</h5>
                  <li>Our Story</li>
                  <li>Work with us</li>
                </ul>
                <ul className='links'>
            <h5>Contact Us</h5>
                  <li>Our Story</li>
                  <li>Work with us</li>
                </ul>
          </div>
    </div>
    </>
  )
}

export default Footer