import React, { useState } from 'react'
//import Home from "./Home";
//let baseURL = "http://localhost:3001";
function NewForm(props) {
  const [name, setName] = useState('')

  const [img, setImg] = useState('')
  //const [likes, setLikes] = useState("");
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/flowers', {
      method: 'POST',
      body: JSON.stringify({ name, img, price }),
      headers: { 'content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((resJson) => {
        props.handleAddFlower(resJson)
      })
      .then(() => {
        setName('')
        setImg('')
        setPrice('')
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' value={name} id='name' onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <label htmlFor='img'>Img:</label>
        <input type='text' value={img} id='img' onChange={(e) => setImg(e.target.value)} /> <br /> <br />
        <label htmlFor='price'>Price:</label>
        <input type='Number' value={price} id='img' onChange={(e) => setPrice(e.target.value)} /> <br /> <br />
        <button>Add flower</button>
      </form>
    </div>
  )
}
export default NewForm
