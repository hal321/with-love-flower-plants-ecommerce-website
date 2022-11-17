import React from "react";

function ShowDetails(props) {
  return (
    <div>
      <h2>Flowers</h2>
      <h3>Name:{props.name}</h3>
     
      <h5>price:{props.price}</h5>
    </div>
  );
}

export default ShowDetails;
