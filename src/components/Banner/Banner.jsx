import React from 'react'
import './Banner.css'
import SearchBanner from '../Searchbox/SearchBanner'

const Banner = ({bgImg}) => {
  return (
    <div className="banner__container">
       <img src={bgImg} alt='background_img' className='banner__img'/>
        <div className="overlay">
        <div className="banner__detail">
        <p className='heading'>Make your travel whishlist, we’ll do the rest</p>
        <p className='banner__parag'>Special offers to suit your plan</p>
        </div>
        </div>
        {/* <SearchBanner/> */}
    </div>
  )
}

export default Banner