import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useContext } from "react";
import Main from "./components/Main";
import Home from "./components/flower/Home";
import Access from "./components/Access";
import IndoorHome from "./components/indoor/IndoorHome";
import OutdoorHome from "./components/outdoor/OutdoorHome";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Review from "./components/review/Reviews.js";
import UserHome from "./components/users/UserHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AppContext } from "./components/Context";

let baseURL = "";

function App(props) {
  const { isAdmin, AddtoCart, onRemove, cartItems } = useContext(AppContext);
  return (
    <Container className="mb-4">
      <BrowserRouter>
        <div className="App">
          <h1 className="header">with love</h1>
          <h5 className="header">♥</h5>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/Bouquet"
                element={
                  <Home
                    cartItems={cartItems}
                    AddtoCart={AddtoCart}
                    onRemove={onRemove}
                  />
                }
              />
              <Route
                path="/IndoorHome"
                element={
                  <IndoorHome
                    cartItems={cartItems}
                    AddtoCartIndoor={AddtoCart}
                  />
                }
              />
              <Route
                path="/OutdoorHome"
                element={
                  <OutdoorHome
                    cartItems={cartItems}
                    AddtoCartOutdoor={AddtoCart}
                  />
                }
              />
              <Route path="/ContactUs" element={<ContactUs />} />

              <Route
                path="/Cart"
                element={
                  <Cart
                    cartItems={cartItems}
                    AddtoCart={AddtoCart}
                    onRemove={onRemove}
                  />
                }
              />
              <Route path="/Review" element={<Review />} />
              {isAdmin && <Route path="/Admin" element={<UserHome />} />}

              <Route path="/Login" element={<Access baseURL={baseURL} />} />
            </Routes>
          </div>
        </div>
        <footer>
        Copyright © 2022, with love. All Rights Reserved.

        </footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
