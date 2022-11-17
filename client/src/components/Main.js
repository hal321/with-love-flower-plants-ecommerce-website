import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../App.css";

function Main() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const slides = [
    {
      url: "https://www.petalrepublic.com/wp-content/uploads/2021/02/The-Best-Florists-for-Flower-Delivery-in-Atlanta-Georgia.jpeg",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5bfd17c63e2d090b269114b9/85d68cc3-a0d4-4373-a5b9-5b9fa4245f3b/ArcadeFlowers-Artisan-Floristry-Ringwood-Hampshire-Wedding-Flowers-www.arcadeflowers.co.uk.jpg",
    },
    {
      url: "https://wallpapercave.com/wp/wp7317637.jpg",
    },
    { url: "https://media.timeout.com/images/105645687/1372/772/image.jpg" },
    {
      url: "https://i.ytimg.com/vi/I6atZta4U_o/maxresdefault.jpg",
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "35em",
    margin: "20px auto",
  };

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    // width: "70em",
    height: "100%",
    borderRadius: "5px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentPhoto].url})`,
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%",
    left: "30px",
    fontSize: "40px",
    cursor: "pointer",
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%",
    right: "30px",
    fontSize: "40px",
    cursor: "pointer",
  };

  const previous = () => {
    const firstPhoto = currentPhoto === 0;
    const newIndex = firstPhoto ? slides.length - 1 : currentPhoto - 1;
    setCurrentPhoto(newIndex);
  };

  const next = () => {
    const lastPhoto = currentPhoto === slides.length - 1;
    const newIndex = lastPhoto ? 0 : currentPhoto + 1;
    setCurrentPhoto(newIndex);
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={sliderStyle}>
          <div style={leftArrow} onClick={previous}>
            ◀
          </div>
          <div style={rightArrow} onClick={next}>
            ▶
          </div>
          <div style={slideStyle}></div>
        </div>
      </div>
      <h2 className="homeH1">Live Life in Full Bloom</h2>
      <div className='mainNav'>
      <Nav.Link to="/Bouquet" as={NavLink} className='mainEachNav'>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/0781/4423/products/bloomthis-bouquet-ashley-1080x1080-01_38ca348d-c0fa-41ce-b96e-aa9907653ba6_600x.jpg?v=1601973859"
          }
          alt="bouquet"
          style={{ width: "502px", height: "500px" }}
        ></img>
      </Nav.Link>
      <Nav.Link to="/IndoorHome" as={NavLink} className='mainEachNav'>
        <img
          src={
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1653591889-vases-of-african-violets-high-res-stock-photography-1568922990.jpg?crop=0.774xw:1.00xh;0.161xw,0&resize=480:*"
          }
          alt="indoor flowers"
          style={{ width: "502px", height: "500px" }}
        ></img>
      </Nav.Link>
      <Nav.Link to="/OutdoorHome" as={NavLink} className='mainEachNav'>
        <img
          src={
            "https://www.whiteflowerfarm.com/mas_assets/cache/image/8/1/c/d/33229.Jpg"
          }
          style={{ width: "502px", height: "500px" }}
        ></img>
      </Nav.Link>
      <Nav.Link to="/OutdoorHome" as={NavLink} className='mainEachNav'>
        <img
          src={
            "https://www.familyhandyman.com/wp-content/uploads/2017/06/dfh17may033-7-shutterstock_585160750.jpg?fit=696,696"
          }
          alt="outdoor plants"
          style={{ width: "502px", height: "500px" }}
        ></img>
      </Nav.Link>
      </div>
    </div>
  );
}

export default Main;
