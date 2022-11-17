/* global google */

import {
  useLoadScript,
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";

//const center = { lat: 4.210484, lng: 101.975769 };
const store = {
  klBranch: { lat: 3.13304, lng: 101.68423 },
  subangBranch: { lat: 3.06221, lng: 101.57357 },
  bangsarBranch: { lat: 3.12901, lng: 101.679787 },
  damansaraBranch: { lat: 3.094094, lng: 101.547539 },
};

function Map() {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC_IjZzSguNN-NaVfW1TMsVYSukbkwqRzU",
    libraries,
  });

  
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [branches, setBranches] = useState("klBranch");
  // const [currentPos, setCurrentPos] = useState({
  //   lat: 3.13304,
  //   lng: 101.68423,
  // });

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  
  // Current position geolocation
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //     //let { lat: latitude, lng: longitude } = coords;
  //     let lat = +position.coords.latitude;
  //     let lng = +position.coords.longitude;
  //     console.log(lat, lng, "lat lng geolocation");
  //     setCurrentPos({ lat, lng });
  //     // return {lat, lng}
  //   });
  // },[]);

  async function calculateRoute() {
    // e.preventDefault();
    // if (originRef.current.value === "") {
    //   return;
    // }

    //console.log(currentPos)

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      //destination: destiantionRef.current.value,
      //origin: currentPos,
      destination: store[branches],
      travelMode: google.maps.TravelMode.DRIVING,
    });
    //console.log(results, "result");
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(branches);
    // console.log(store[branches]);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    //destiantionRef.current.value = "";
  }

  const renderMap = () => {
    return (
      <React.Fragment>
        <div>
          <div>
            <div>
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Your Location"
                  ref={originRef}
                  required
                />
              </Autocomplete>
              {/* <Autocomplete>
                <input type="text" placeholder="Branch" ref={destiantionRef} />
              </Autocomplete> */}
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <select
                value={branches}
                onChange={(e) => setBranches(e.target.value)}
              >
                <option value="klBranch">KL Branch</option>
                <option value="subangBranch">Subang Branch</option>
                <option value="bangsarBranch">Bangsar Branch</option>
                <option value="damansaraBranch">Damansara Branch</option>
              </select>
              {/* <button>Button</button> */}
              <br />
              <br />
              <button onClick={calculateRoute}>Calculate Route</button>
            </form>
            <span onClick={clearRoute}>❌</span>
          </div>

          <div>
            <span>Distance: {distance} </span>
            <span>Duration: {duration} </span>
            <button onClick={calculateRoute}>🔙</button>
          </div>
        </div>

        <GoogleMap
          center={store.klBranch}
          zoom={11}
          mapContainerStyle={{
            margin: "20px 0 0",
            height: "30vh",
            width: "100%",
          }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF position={store.klBranch} />
          <MarkerF position={store.subangBranch} />
          <MarkerF position={store.bangsarBranch} />
          <MarkerF position={store.damansaraBranch} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
        <br/><br/>
      </React.Fragment>
    );
  };

  return isLoaded ? renderMap() : null;
}

export default Map;
