import React from "react";
import "./PictureCard.css";
import Catch from "./catch.gif";

const PictureCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <span className="net" onClick={() => props.clickReaction(props.id)}>
          <img src={Catch} alt="x" />
        </span>
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default PictureCard;
