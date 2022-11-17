//import NewIndoor from "./NewIndoor";
//import ShowIndoor from "./ShowIndoor";
import { useContext } from "react";
import { AppContext } from "../Context";
import UpdateIndoor from "./UpdateIndoor";
import "../../App.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"; 
import dlt from "../../images/trash-can-icon.png";
import edit from "../../images/pencil-icon.png";
// let baseURL = "http://localhost:3001";

function IndoorHome(props) {
  const { isAdmin } = useContext(AppContext);
  const [indoors, setIndoors] = useState([]);
  const [indoor] = useState({});
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  //const [updateIndoor, setUpdateIndoor] = useState({});
  const [updateIndoorDetails, setUpdateIndoorDetails] = useState({});
  const [displayDetails, setDisplayDetails] = useState("")
  const [showDetails, setShowDetails] = useState({});
  const { AddtoCart } = useContext(AppContext);

  const getIndoor = () => {
    fetch("/indoor")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => {
          setIndoors(parsedData);
        },
        (err) => console.log(err)
      );
  };
  useEffect(() => {
    getIndoor();
  },[]);

  const deleteIndoor = (id) => {
    fetch("/indoor/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = indoors.findIndex((indoor) => indoor._id === id);
      const exisitingIndoors = [...indoors];
      exisitingIndoors.splice(findIndex, 1);
      setIndoors(exisitingIndoors);
    });
  };

  const handleUpdateIndoor = (updatedIndoor) => {
    const currentIndoors = [...indoors];
    const findIndex = currentIndoors.findIndex(
      (currentIndoor) => currentIndoor._id === updatedIndoor._id
    );
    currentIndoors[findIndex] = updatedIndoor;
    setIndoors(currentIndoors);
    setDisplayUpdateForm(false);
  };

  const toggleUpdateIndoor = (indoorToUpdate) => {
    setDisplayUpdateForm(true);
    setUpdateIndoorDetails(indoorToUpdate);
  };

  const toggleShowDetails = (indoor_id) => {
    //setDisplayDetails(!displayDetails);
    setDisplayDetails(indoor_id);
    setShowDetails(indoor);
  };

  return (
    <div>
      <h1>Collection of indoor plants</h1>

      <div className="small-container">
        {indoors.map((indoor, index) => {
          return (
            <div className="card1" key={index}>
              <img className="photo" src={indoor.img} alt="" />
              <h4>
                <b>{indoor.name}</b>
              </h4>
              <p>
                <b>RM {indoor.price}</b>
              </p>
              <Button
                variant="warning"
                className="mb-2"
                onClick={() => {
                  toggleShowDetails(indoor._id);
                }}
              >
                Care Guide
              </Button>
              {!isAdmin ? (
                <div>
                  <Button variant="danger" onClick={() => AddtoCart(indoor)}>
                    Add to cart
                  </Button>
                  <br />
                  <br />
                </div>
              ) : (
                ""
              )}
              {displayDetails === indoor._id ? (
                <div>
                  <p>
                    <b>{indoor.description}</b>
                  </p>
                  <p>Sunlight: {indoor.sunlight}</p>
                  <p>Watering: {indoor.water}</p>
                  <p>Fertilizing: {indoor.fertilizer}</p>
                </div>
              ) : (
                ""
              )}
              {isAdmin && (
                <div>
                  <img
                    src={edit}
                    alt="Edit"
                    onClick={() => {
                      toggleUpdateIndoor(indoor);
                    }}
                  />
                  <img
                    src={dlt}
                    alt="delete"
                    onClick={() => deleteIndoor(indoor._id)}
                  ></img>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div>
        {displayUpdateForm ? (
          <UpdateIndoor
            // baseURL={baseURL}
            indoor={updateIndoorDetails}
            handleUpdateIndoor={handleUpdateIndoor}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default IndoorHome;
