import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="card">
      <h1 className="card_hero">{props.cardHero}</h1>
      <h2 className="card_title">{props.cardTitle}</h2>
      <p className="text-gray-500 text-sm">{props.cardDescription}</p>
    </div>
  );
};

export default FeatureCard;
