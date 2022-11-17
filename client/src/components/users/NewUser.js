import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
//import Home from "./Home";
//let baseURL = "http://localhost:3001";
function NewUser(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ username, password, role }),
      headers: { 'content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((resJson) => {
        props.handleAddUser(resJson)
      })
      .then(() => {
        setUsername('')
        setPassword('')
        setRole('')
      })
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>User Name:</label>
        <input type='text' value={username} id='username' onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
        <label htmlFor='password'>Password:</label>
        <input type='text' value={password} id='password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <label htmlFor='role'>Role:</label>
        <input type='text' value={role} id='role' onChange={(e) => setRole(e.target.value)} /> <br /> <br />
        <button>Add User</button>
      </form>
    </Container>
  )
}
export default NewUser
