import React from 'react';

function ShowOutdoor(props){
    return (
        <div>
            <p><b>{props.outdoor.description}</b></p>
            <p>Sunlight needed: {props.outdoor.sunlight}</p>
            <p>Water: {props.outdoor.water}</p>
            <p>Fertilizer: {props.outdoor.fertilizer}</p>
        </div>
    )
}

export default ShowOutdoor;