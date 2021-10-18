import React from "react";
import Card from "./Card";
import cardData from "./DataCart";

const Services = () => {
  return (
    <div>
      <h3 className="text-center mt-3">Our Services</h3>
      <div className="container mt-4">
        <div className="row">
          {cardData.map((uniqueCard) => (
            <Card allCard={uniqueCard} key={uniqueCard.key}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
