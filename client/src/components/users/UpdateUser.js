import React, { useState } from 'react'
function UpdateUser(props) {
  const [id] = useState(props.user._id)
  const [username, setUsername] = useState(props.user.username)
  const [password, setPassword] = useState(props.user.password)

  //const [likes, setLikes] = useState("");
  const [role, setRole] = useState(props.user.role)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/users/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        username,
        password,
        role,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setUsername('')
        setPassword('')
        setRole('')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>User Name</label>
      <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type='submit' value='Update Details' />
    </form>
  )
}
export default UpdateUser
