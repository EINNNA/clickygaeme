import React from "react";
import "./PictureCard.css";
import pictures from "../../pictures.json";
import Catch from "./catch.gif";

const PictureCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          <img src={Catch} alt="x" />
      </span>
      </div>
    </div>
  );
}

export default PictureCard;
