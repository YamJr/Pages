import React from "react";
import "./Section.css";
import melbourneImg from '../../images/melbourneImg.png'
import parisImg from '../../images/parisImg.png'
import londonImg from '../../images/londonImg.png'
import columbiaImg from '../../images/columbiaImg.png'
import gallary1 from '../../images/gallary1.jpg'
import gallary2 from '../../images/gallary2.jpg'

const FlightCard = ({ backgroundImg, title, description, price }) => {
  return (
    <div
      className="flight__card"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flight__content">
        <div className="card__detail">
        <p className="card__title">{title}</p>
        <p className="card__desc">{description}</p>
        </div>
        <p className="card__price">{price}</p>
        {/* <button className="flight__btn">book now</button> */}
      </div>
      <button className="flight__btn">book flight</button>
    </div>
  );
};

const Section = () => {
  const flightData = [
    {
      title: "Melbourne",
      backgroundImg: melbourneImg,
      description: "An amazing journey",
      price: "$ 700",
    },
    {
      title: "Paris",
      backgroundImg: parisImg,
      description: "A Paris Adventure",
      price: "$ 600",
    },
    {
      title: "London",
      backgroundImg: londonImg,
      description: "London eye adventure",
      price: "$ 350",
    },
    {
      title: "Columbia",
      backgroundImg: columbiaImg,
      description: "Amazing streets",
      price: "$ 700",
    },
  ];
  const renderFlight = () => {
  return  flightData.map((flight,index) => (
      <FlightCard
        key={index}
        title={flight.title}
        backgroundImg={flight.backgroundImg}
        description={flight.description}
        price={flight.price}
      />
  ))
  }
  return (
    <div className="section">
    <div className="travel__section">
      <div className="travel__detail">
        <p className="travel__title">Fall into travel</p>
        <br />
        <p className="travel__desc">
          Going somewhere to celebrate this season? Whether you're going home or
          somewhere to roam, we've got the travel tools to get you to your
          destination.
        </p>
      </div>
      <div className="see__btn">
        <button className="seeall__btn">see all</button>
      </div>
    </div>
    <div className="flight__cards">
      {renderFlight()}
    </div>
    <div className="travel__section">
      <div className="travel__detail">
        <p className="travel__title">Fall into travel</p>
        <br />
        <p className="travel__desc">
          Going somewhere to celebrate this season? Whether you're going home or
          somewhere to roam, we've got the travel tools to get you to your
          destination.
        </p>
      </div>
      <div className="see__btn">
        <button className="seeall__btn">see all</button>
      </div>
    </div>

      <div className="backpack__section">
        <div className="content__backpack">
            <div className="backpack__title">
                  <p className="backpack__heading">backpacking sir lanka</p>
                  <div className="book__type">
                    <p>from $ 700</p>
                  </div>
            </div>
            <div className="backpack__details">
              <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
            </div>
            <button className="book__flight">book flight</button>
        </div>
        <div className="content__gallery">
            <img src={gallary1} alt="photo_collection"/>
            <img src={gallary2} alt="photo_collection"/>
            <img src={gallary2} alt="photo_collection"/>
            <img src={gallary2} alt="photo_collection"/>
        </div>
      </div>

    </div>
  );
};

export default Section ;
