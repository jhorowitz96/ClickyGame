import React from "react";
import "./style.css";
// import App from "./App";

function FriendCard(props) {
    console.log(props)
  return (

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.shuffleFriends(props.id)} className='clicked'/>
      </div>

          {/* <li>
            {/* <strong>Name</strong> {props.name} */}
          
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        
     
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> */}
        {/* 𝘅 */}
      {/* </span> */}
    </div>
    
  );
}

export default FriendCard;

