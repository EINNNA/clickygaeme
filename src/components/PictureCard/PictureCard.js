import React from "react";
import "./PictureCard.css";
import pictures from "../../pictures.json";

const PictureCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
      </span>
      </div>
    </div>
  );
}

export default PictureCard;
