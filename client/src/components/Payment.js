import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = (props) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/")
  }

  return (
    <div>
      <h2>PAYMENT DETAILS BELOW</h2>
      <br />
      <div className="address">
        <h5><b>Delivery Address:</b></h5>
        <div>
          <h6>{props.name}</h6>
          {props.phone}
          <br />
          {props.add},<br />
          {props.postcode}, {props.city}
          <br />
          {props.state}, {props.country}
          <br />
        </div>
      </div>
      <br />
      <div className="delivery">
        <h5><b>Delivery Method:</b></h5>
        <h6>Standard Delivery</h6>
        <p>Delivered within 2-5 working days</p>
      </div>

      <div className="payment">
        <h5><b>Payment Details:</b></h5>
        <p>
          Sub-total: RM {props.totalprice}
          <br />
          Standard Delivery: RM 10
          <br /><br/>
          <b>Total Price: RM {props.totalprice + 10}</b>
          <br />
        </p>
      </div>

      <button onClick={redirect} >Pay</button>
    </div>
  );
};

export default Payment;
