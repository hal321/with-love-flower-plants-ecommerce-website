import React from "react";

function ShowIndoor(props) {
  return (
    <div>
      <h2>Indoor Plants</h2>
      <h3>Name: {props.indoor.name}</h3>
      <h4>Image: {props.indoor.img}</h4>
      <h4>Description: {props.indoor.description}</h4>
      <h4>Sunlight: {props.indoor.sunlight}</h4>
      <h4>Watering:{props.indoor.water}</h4>
      <h4>Fertilizing:{props.indoor.fertilizer}</h4>
      <h5>Price: {props.indoor.price}</h5>
      <h4>Likes: {props.indoor.likes}</h4>
    </div>
  );
}

export default ShowIndoor;
