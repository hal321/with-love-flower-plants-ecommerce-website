import React, { useState, useEffect } from 'react'
import NewReview from './NewReview'
let baseURL = 'http://localhost:3001'

function Review() {
  const [reviews, setReviews] = useState([])
  const [review] = useState({})

  const getReview = () => {
    fetch('/review')
      .then(
        (data) => {
          return data.json()
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => {
          setReviews(parsedData)
        },
        (err) => console.log(err)
      )
  }
  useEffect(() => {
    getReview()
  },[])

  const handleAddReview = () => {
    const currentReview = [...reviews]
    currentReview.unshift(review)
    setReviews(currentReview)
  }

  const deleteReview = (id) => {
    fetch('/review/' + id, {
      method: 'DELETE',
    }).then((response) => {
      const findIndex = reviews.findIndex((review) => review._id === id)
      const exisitingReviews = [...reviews]
      exisitingReviews.splice(findIndex, 1)
      setReviews(exisitingReviews)
    })
  }

  return (
    <div>
      <h1>Reviews</h1>
      <a href='#newreview' style={{ color: 'brown' }}>
        Drop us a review!
      </a>
      <div>
        <div className='container-review'>
          {reviews.map((review, index) => {
            return (
              <div key={index} className='container-eachreview'>
                <p>
                  <strong>{review.name} says...</strong>
                </p>
                <p>{review.comment}</p>
                <span onClick={() => deleteReview(review._id)}>❎</span>
              </div>
            )
          })}
        </div>
        <div className='container-newreview-form'>
          <div id='newreview' className='container-newreview'>
            <NewReview handleAddReview={handleAddReview} baseUrl={baseURL} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
