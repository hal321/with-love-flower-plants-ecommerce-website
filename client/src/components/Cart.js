import React, { useState, useEffect, useContext } from "react";
import Checkout from "./Checkout";
import "./cart.css";
import { AppContext } from "./Context";
function Cart(props) {
  const [price, setPrice] = useState(0);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({});
  const { count, cartItems, } = useContext(AppContext);
  const [outPrice, setOutprice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cartItems.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const toggleCheckout = (checkout) => {
    setDisplayCheckout(true);
    setCheckoutDetails(checkout);
    setOutprice(price);
    cartItems.length = 0;
   
  };

  return (
    <article>
      <h1>CART</h1>
      <div>{props.cartItems.length === 0 && <div>Cart is Empty</div>}</div>

      {props.cartItems.map((item, index) => (
        <div className="cart-box" key={index}>
          <div className="cart-img">
            <img src={item.img} />
            <p>{item.name}</p>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={() => props.onRemove(item)}>-</button>

            <button>{item.qty}</button>
            <button onClick={() => props.AddtoCart(item)}>+</button>
          </div>
          <span>
            <b>RM {item.qty * item.price}</b>
          </span>
        </div>
      ))}

      <div className="total">
        <span>Sub-total</span>
        <span>RM {price}</span>
      </div>

      <div className="total">
        <span>Standard Delivery</span>
        <span>RM 10</span>
      </div>

      <div className="total">
        <span>Total Price</span>
        <span>RM {price + 10}</span>
      </div>

      <br />
      <div className="checkout">
        {cartItems.length > 0 ? (
          <button
            className="btn btn-light"
            onClick={() => {
              toggleCheckout();
            }}
          >
            Check Out
          </button>
        ) : (
          <p></p>
        )}
      </div>
      <br />
      <div>{displayCheckout ? <Checkout totalprice={outPrice} /> : " "}</div>
    </article>
  );
}

export default Cart;
