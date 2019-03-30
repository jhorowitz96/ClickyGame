import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

          {/* <li>
            {/* <strong>Name</strong> {props.name} */}
          
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        {/* 𝘅 */}
      </span>
    </div>
  );
}

export default FriendCard;

