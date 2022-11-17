import React, { useState, useContext } from "react";
import Payment from "./Payment";
import { AppContext } from "./Context";
const Checkout = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
  //   const [add2, setAdd2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const { cartItems,count } = useContext(AppContext);
  const [displayPayment, setDisplayPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});

  const togglePayment = (payment) => {
    setDisplayPayment(true);
    setPaymentDetails(payment);

  };

  const handleSubmit = (e) => {
    
  };

  return (
    <div className="checkout-container">
      <h2>CHECKOUT</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="name">Telephone: </label>
        <input
          type="number"
          value={phone}
          id="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="add">Address: </label>
        <input
          type="text"
          value={add}
          id="add"
          required
          onChange={(e) => setAdd(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          value={city}
          id="city"
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="State">State: </label>
        <input
          type="text"
          value={state}
          id="state"
          required
          onChange={(e) => setState(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="postcode">Postcode: </label>
        <input
          type="text"
          value={postcode}
          id="postcode"
          required
          onChange={(e) => setPostcode(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          value={country}
          id="country"
          required
          onChange={(e) => setCountry(e.target.value)}
        />
        <br /> <br />
        {/* <h5>RM {props.totalprice+10}</h5> */}
      </form>
      
      <button
        onClick={() => {
          togglePayment();
        }}
      >
        Proceed to Payment Method
      </button>
      <br /> <br /><br/><br/>
      <div>
        {displayPayment ? (
          <Payment
            totalprice={props.totalprice}
            name={name}
            phone={phone}
            add={add}
            city={city}
            state={state}
            postcode={postcode}
            country={country}
          
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Checkout;
