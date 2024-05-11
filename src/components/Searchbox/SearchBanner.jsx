import React from 'react'
import './SearchBanner.css'

const SearchBanner = () => {
  return (
    <div className="searchBanner__container">
        <p>Where are you flying?</p>
        <div className="search__area">
          from-to
                <input 
                placeholder='Lahore - Karachi'
                className='search__style'
                />
        </div>
    </div>
  )
}

export default SearchBanner