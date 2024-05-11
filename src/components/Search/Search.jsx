import React from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faArrowRightArrowLeft, faCalendar, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
const Search = () => {
  return (
    <div className="search__container">
      <p className='search__heading'>Where are you flying? </p>
      <div className="search__box">
        <fieldset>
          <legend>From-To</legend>
          <div className="input__container">
          <input type='text' placeholder='Lahore - Karachi' className='inputStyle'/>
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className='iconStyle'/>
          </div>
        </fieldset>
        <fieldset>
          <legend>Depart- Return</legend>
          <div className="input__container">
          <input type='text' placeholder='Lahore - Karachi' className='inputStyle'/>
          <FontAwesomeIcon icon={faCalendarDays} className='iconStyle'/>
          </div>
        </fieldset>
        <fieldset>
          <legend>Passenger - Class</legend>
          <div className="input__container">
          <input type='text' placeholder='Lahore - Karachi' className='inputStyle' />
          <FontAwesomeIcon icon={faUser} className='iconStyle'/>
          </div>
        </fieldset>
      </div>
      <div className="button__container">
        <button className='code__btn'><FontAwesomeIcon icon={faAdd} className='searchbox__icon'/>Add Promo Code</button>
        <button className='show__btn'><FontAwesomeIcon icon={faPaperPlane} className='searchbox__icon'/>Show Flights</button>
      </div>
    </div>
  )
}

export default Search