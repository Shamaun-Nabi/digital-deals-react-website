import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Card.css"

const Card = (props) => {
  const {title, img, des } = props.allCard;
  console.log(des)
  return (
    <div className="col-md-4  g-2">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <NavLink to="/prices">
            <button className="btn btn-success">Purchase</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
