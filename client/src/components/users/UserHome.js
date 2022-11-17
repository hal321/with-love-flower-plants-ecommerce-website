import NewUser from './NewUser'
import UpdateUser from './UpdateUser'

import NewForm from '../flower/NewForm'
import NewIndoor from '../indoor/NewIndoor'
import NewOutdoor from '../outdoor/NewOutdoor'
import '../../App.css'
import React, { useState, useEffect } from 'react'
import edit from '../../images/pencil-icon.png'
// let baseURL = "http://localhost:3001";

function UserHome(props) {
  const [users, setUsers] = useState([])
  const [user] = useState({})
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false)
  const [flowers, setFlowers] = useState([])
  const [flower] = useState({})
  const [indoors, setIndoors] = useState([])
  const [indoor] = useState({})
  const [outdoors, setOutdoors] = useState([])
  const [outdoor] = useState({})
  const [updateUserDetails, setUpdateUserDetails] = useState({})

  const handleAddUser = () => {
    const currentUser = [...users]
    currentUser.unshift(user)
    setUsers(currentUser)
  }
  const handleAddFlower = () => {
    const currentFlower = [...flowers]
    currentFlower.unshift(flower)
    setFlowers(currentFlower)
  }

  const handleAddIndoor = () => {
    const currentIndoor = [...indoors]
    currentIndoor.unshift(indoor)
    setIndoors(currentIndoor)
  }
  const handleAddOutdoor = () => {
    const currentOutdoor = [...outdoors]
    currentOutdoor.unshift(outdoor)
    setOutdoors(currentOutdoor)
  }

  const getUsers = () => {
    fetch('/users')
      .then(
        (data) => {
          return data.json()
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => {
          setUsers(parsedData)
        },
        (err) => console.log(err)
      )
  }
  useEffect(() => {
    getUsers()
  },[])

  const deleteUser = (id) => {
    fetch('/users/' + id, {
      method: 'DELETE',
    }).then((response) => {
      const findIndex = users.findIndex((user) => user._id === id)
      const exisitingUsers = [...users]
      exisitingUsers.splice(findIndex, 1)
      setUsers(exisitingUsers)
    })
  }
  const handleUpdateUser = (updatedUser) => {
    const currentUsers = [...users]
    const findIndex = currentUsers.findIndex((currentUser) => currentUser._id === updatedUser._id)
    currentUsers[findIndex] = updatedUser
    setUsers(currentUsers)
    setDisplayUpdateForm(false)
  }

  const toggleUpdateUser = (userToUpdate) => {
    setDisplayUpdateForm(true)
    setUpdateUserDetails(userToUpdate)
  }

  return (
    <div>
      <br />
      <br />
      <div className='adminActionContainer'>
        <a href='#flower'>
          {' '}
          <button className='adminAction'>Add new Bouquet</button>
        </a>
        <a href='#indoor'>
          {' '}
          <button className='adminAction'>Add new Indoor Plant</button>
        </a>
        <a href='#outdoor'>
          {' '}
          <button className='adminAction'>Add new Outdoor Plant</button>
        </a>
      </div>
      <div className='admin-container'>
        <h3>Add, Delete or Update admin users</h3>
        <br />
        <NewUser handleAddUser={handleAddUser}/>
      </div>
      <div className='admin-container'>
        <h3>Current admin users: </h3>
        {users.map((user, index) => {
          return (
            <div className='card2' key={index}>
              <h4>
                <b>{user.username}</b>
              </h4>
              <h4>{user.role}</h4>
              <div>
                <button onClick={() => deleteUser(user._id)}>❌</button>
                {/* <p>
                <img
                  src={edit}
                  alt="Edit"
                  onClick={() => {
                    toggleUpdateUser(user);
                  }}
                />
                
              </p> */}
              </div>
            </div>
          )
        })}
      </div>
      <div>
        {displayUpdateForm ? (
          <UpdateUser user={updateUserDetails} handleUpdateUser={handleUpdateUser} />
        ) : (
          ''
        )}
      </div>
      <div className='admin-container'>
        <h3 id='flower'>Add new Flower</h3>
        <NewForm handleAddFlower={handleAddFlower} />
      </div>
      <div className='admin-container'>
        <h3 id='indoor'>Add new Indoor Plant</h3>
        <NewIndoor handleAddIndoor={handleAddIndoor} />
      </div>
      <div className='admin-container'>
        <h3 id='outdoor'>Add new Outdoor plant</h3>
        <NewOutdoor handleAddOutdoor={handleAddOutdoor} />
      </div>
    </div>
  )
}

export default UserHome
