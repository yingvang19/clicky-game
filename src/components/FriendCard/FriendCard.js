import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div
    className="card"
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img className={(props.score === 0 && props.message !== "Click an image to begin!") ? "shake" : ""} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
