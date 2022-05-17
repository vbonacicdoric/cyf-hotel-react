import React from "react";

const Card = props => {
  return (
    <div className="Card-Container">
      <div className="card">
        <img src={props.picture} className="card-img-top" />
        <div className="card-body">
          <h2>{props.nameCountry}</h2>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
