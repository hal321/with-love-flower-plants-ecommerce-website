import React, { useState } from "react";

//let baseURL = "http://localhost:3001";
function NewIndoor(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [water, setWater] = useState("");
  const [fertilizer, setFertilizer] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/indoor", {
      method: "POST",
      body: JSON.stringify({
        name,
        img,
        description,
        sunlight,
        water,
        fertilizer,
        price,
      }),
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((resJson) => {
        props.handleAddIndoor(resJson);
      })
      .then(() => {
        setName("");
        setImg("");
        setDescription("");
        setSunlight("");
        setWater("");
        setFertilizer("");
        setPrice("");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        /> <br /> <br />

        <label htmlFor="img">Image: </label>
        <input
          type="text"
          value={img}
          id="img"
          onChange={(e) => setImg(e.target.value)}
        /> <br /> <br />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          value={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        /> <br /> <br />

        <label htmlFor="sunlight">Sunlight: </label>
        <input
          type="text"
          id="sunlight"
          value={sunlight}
          onChange={(e) => setSunlight(e.target.value)}
        /> <br /> <br />

        <label htmlFor="water">Water: </label>
        <input
          type="text"
          id="water"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        /> <br /> <br />

        <label htmlFor="fertilizer">Fertilizer: </label>
        <input
          type="text"
          id="fertilizer"
          value={fertilizer}
          onChange={(e) => setFertilizer(e.target.value)}
        /> <br /> <br />

        <label htmlFor="price">Price: </label>
        <input
          type="number"
          value={price}
          id="img"
          onChange={(e) => setPrice(e.target.value)}
        /> <br /> <br />

        <button>Add plant</button>
      </form>
    </div>
  );
}
export default NewIndoor;
