import React from "react";
import "./Subscription.css";
import subscribeImg from "../../images/subscribeImg.png";

const Subscription = () => {
  return (
    <div className="subscription__box">
      <div className="subscription__detail">
        <h4>subscribe newsletter</h4>
        <p className="subbox__title">the travel</p>
        <p style={{fontSize:'14px'}}>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="mail__sample">
        <input
          type="name"
          placeholder="your email address"
          className="inputStyle"
        />
        <button className="subscribe__btn">subscribe</button>
        </div>
      </div>
      <img src={subscribeImg} alt=" subscribe_box" />
    </div>
  );
};

export default Subscription;
