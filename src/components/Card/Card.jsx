import React from 'react'


const Card = ({ backgroundImg, title, description, price }) => {
    return (
      <div
        className="flight__card"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="fight__content">
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button className="flight__btn">book now</button>
        </div>
      </div>
    );
  };

export default Card