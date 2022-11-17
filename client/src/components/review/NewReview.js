import React, { useState } from "react";
import "../../App.css";

function NewReview(props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/review", {
      method: "POST",
      body: JSON.stringify({
        name,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        props.handleAddReview(resJson);
      })
      .then(() => {
        setName("");
        setComment("");
      })
  };

  return (
    <div>
      <div>
        <h3>Drop us a review!</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              type="text"
              id="comment"
              maxLength="50"
              row="50"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
          </div>

          <br />
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
    </div>
  );
}

export default NewReview;
