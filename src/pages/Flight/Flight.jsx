import React from "react";
import Banner from "../../components/Banner/Banner";
import './Flight.css';
import Section from '../../components/Section/Section'
import Search from "../../components/Search/Search";
import airplane from "../../images/airplane.jpg";

const Flight = () =>{
  return (
    <>
    <div className="flight__container">
      <Banner bgImg={airplane} />
          <Search/>
      <Section />

    </div>
    </>
  )
}
export default Flight;
