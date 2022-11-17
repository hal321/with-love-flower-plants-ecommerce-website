import NewForm from './NewForm'
import UpdateFlower from './UpdateFlower'
import '../../App.css'
import React, { useState, useEffect } from 'react'
import edit from '../../images/pencil-icon.png'
import dlt from '../../images/trash-can-icon.png'
import Cart from '../Cart'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../Context'
// let baseURL = "http://localhost:3001";

function Home(props) {
  const [flowers, setFlowers] = useState([])
  const [flower] = useState({})
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false)

  const [updateFlowerDetails, setUpdateFlowerDetails] = useState({})
  const { isAdmin } = useContext(AppContext)
  const { AddtoCart } = useContext(AppContext)
  const getFlowers = () => {
    fetch('/flowers')
      .then(
        (data) => {
          return data.json()
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => {
          setFlowers(parsedData)
        },
        (err) => console.log(err)
      )
  }
  useEffect(() => {
    getFlowers()
  }, [])

  const deleteFlower = (id) => {
    fetch('/flowers/' + id, {
      method: 'DELETE',
    }).then((response) => {
      const findIndex = flowers.findIndex((flower) => flower._id === id)
      const exisitingFlowers = [...flowers]
      exisitingFlowers.splice(findIndex, 1)
      setFlowers(exisitingFlowers)
    })
  }
  const handleUpdateFlower = (updatedFlower) => {
    const currentFlowers = [...flowers]
    const findIndex = currentFlowers.findIndex((currentFlower) => currentFlower._id === updatedFlower._id)
    currentFlowers[findIndex] = updatedFlower
    setFlowers(currentFlowers)
    setDisplayUpdateForm(false)
  }

  const toggleUpdateFlower = (flowerToUpdate) => {
    setDisplayUpdateForm(true)
    setUpdateFlowerDetails(flowerToUpdate)
  }

  return (
    <div>
      <h1>Customize your own bouquet</h1>
      <h5>
        <a href='#collection' style={{ textDecoration: 'none', color: 'brown' }}>
          {' '}
          or go to ready made Bouquet
        </a>
      </h5>
      {/* <NewForm handleAddFlower={handleAddFlower} baseUrl={baseURL} /> */}
      <div className='small-container'>
        {flowers.map((flower, index) => {
          return (
            <div className='card1' key={index}>
              <img className='photo' src={flower.img} alt='' />
              <h4>
                <b>{flower.name}</b>
              </h4>
              <b>RM {flower.price}</b>

              <div>
                <br />
                {!isAdmin ? (
                  <div>
                    <Button variant='danger' onClick={() => AddtoCart(flower)}>
                      Add to cart
                    </Button>
                    <br />
                    <br />
                  </div>
                ) : (
                  ''
                )}
                {isAdmin && (
                  <div>
                    <img
                      src={edit}
                      alt='Edit'
                      onClick={() => {
                        toggleUpdateFlower(flower)
                      }}
                    />

                    <img src={dlt} alt='delete' onClick={() => deleteFlower(flower._id)}></img>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div>
        {displayUpdateForm ? (
          <UpdateFlower
            // baseURL={baseURL}
            flower={updateFlowerDetails}
            handleUpdateFlower={handleUpdateFlower}
          />
        ) : (
          ''
        )}
      </div>
      <div id='collection'></div>
    </div>
  )
}

export default Home
