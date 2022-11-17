import NewOutdoor from "./NewOutdoor";
import "../../App.css";
import React, { useState, useEffect } from "react";
import edit from "../../images/pencil-icon.png";
import dlt from "../../images/trash-can-icon.png";
import ShowOutdoor from "./ShowOutdoor";
import UpdateOutdoor from "./UpdateOutdoor";
import { useContext } from "react";
import { AppContext } from "../Context";
import {Button} from "react-bootstrap"
let baseURL = "http://localhost:3001";

function OutdoorHome(props) {
  const { isAdmin } = useContext(AppContext);
  const [outdoors, setOutdoors] = useState([]);
  const [outdoor, setOutdoor] = useState({});
  const [displayDetails, setDisplayDetails] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [updateOutdoor, setUpdateOutdoorDetails] = useState({});
  const { AddtoCart } = useContext(AppContext);
  const getOutdoor = () => {
    fetch("/outdoor")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => {
          setOutdoors(parsedData);
        },
        (err) => console.log(err)
      );
  };
  useEffect(() => {
    getOutdoor();
  },[]);

  const deleteOutdoor = (id) => {
    fetch(baseURL + "/outdoor/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = outdoors.findIndex((outdoor) => outdoor._id === id);
      const exisitingOutdoors = [...outdoors];
      exisitingOutdoors.splice(findIndex, 1);
      setOutdoors(exisitingOutdoors);
    });
  };

  const toggleShowDetails = (outdoor_id) => {
    setDisplayDetails(outdoor_id);
    setShowDetails(outdoor);
  };

  const handleUpdateOutdoor = (updatedOutdoor) => {
    const currentOutdoors = [...outdoors];
    const findIndex = currentOutdoors.findIndex(
      (currentOutdoor) => currentOutdoor._id === updatedOutdoor._id
    );
    currentOutdoors[findIndex] = updatedOutdoor;
    setOutdoors(currentOutdoors);
    setDisplayUpdateForm(false);
  };

  const toggleUpdateOutdoor = (outdoorToUpdate) => {
    setDisplayUpdateForm(!displayUpdateForm);
    setUpdateOutdoorDetails(outdoorToUpdate);
  };

  return (
    <div>
      <h1>Collection of outdoor plants</h1>

      <div className="small-container">
        {outdoors.map((outdoor, index) => {
          return (
            <div className="card1" key={index}>
              <img className="photo" src={outdoor.img} alt="" />
              <h4>
                <b>{outdoor.name}</b>
              </h4>
              <p>
                <b>RM{outdoor.price}</b>
              </p>
              <Button
                variant="warning"
                className="mb-2"
                onClick={() => {
                  toggleShowDetails(outdoor._id);
                }}
              >
                Care Guide
              </Button>
              {!isAdmin ? (
                <div>
                  <Button variant="danger" onClick={() => AddtoCart(outdoor)}>
                    Add to cart
                  </Button>
                  <br />
                </div>
              ) : (
                ""
              )}
              {displayDetails === outdoor._id ? (
                <div>
                  <ShowOutdoor outdoor={outdoor} />
                </div>
              ) : (
                ""
              )}

              <br />
              {isAdmin && (
                <div>
                  <img
                    src={edit}
                    alt="Edit"
                    onClick={() => {
                      toggleUpdateOutdoor(outdoor);
                    }}
                  />
                  <img
                    src={dlt}
                    alt="delete"
                    onClick={() => deleteOutdoor(outdoor._id)}
                  ></img>
                </div>
              )}
            </div>
          );
        })}
        <div>
          {displayUpdateForm ? (
            <UpdateOutdoor
              baseURL={baseURL}
              outdoor={updateOutdoor}
              handleUpdateOutdoor={handleUpdateOutdoor}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OutdoorHome;
