import React, { useState } from "react";

function UpdateIndoor(props) {
  const [id] = useState(props.indoor._id);
  const [name, setName] = useState(props.indoor.name);
  const [img, setImg] = useState(props.indoor.img);
  const [description, setDescription] = useState(props.indoor.description);
  const [sunlight, setSunlight] = useState(props.indoor.sunlight);
  const [water, setWater] = useState(props.indoor.water);
  const [fertilizer, setFertilizer] = useState(props.indoor.fertilizer);
  const [price, setPrice] = useState(props.indoor.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/indoor/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        img: img,
        description: description,
        sunlight: sunlight,
        water: water,
        fertilizer: fertilizer,
        price: price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        // props.handleUpdateHoliday(updatedHoliday);
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
    <div className="checkout-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="img">Image</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="sunlight">Sunlight</label>
        <input
          type="text"
          id="sunlight"
          value={sunlight}
          onChange={(e) => setSunlight(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="water">Water</label>
        <input
          type="text"
          id="water"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="fertilizer">Fertilizer</label>
        <input
          type="text"
          id="fertilizer"
          value={fertilizer}
          onChange={(e) => setFertilizer(e.target.value)}
        />
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
export default UpdateIndoor;
