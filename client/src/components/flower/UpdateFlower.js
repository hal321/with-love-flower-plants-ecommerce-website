import React, { useState } from "react";
function UpdateFlower(props) {
  const [id] = useState(props.flower._id);
  const [name, setName] = useState(props.flower.name);

  const [img, setImg] = useState(props.flower.img);
  //const [likes, setLikes] = useState("");
  const [price, setPrice] = useState(props.flower.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/flowers/' + id, {
      method: "PUT",
      body: JSON.stringify({
        name,
        img,
        price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        setImg("");
        setPrice("");
      });
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="img">Image</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Update Details" />
      </form>
    </div>
  );
}
export default UpdateFlower;
