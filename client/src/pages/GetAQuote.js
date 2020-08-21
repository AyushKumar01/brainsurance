import React from "react";
import CardCar from "../components/cards/CardCar";
import CardPerson from "../components/cards/CardPerson";
import bgImage from "../assets/images/broken-car.png";

const GetAQuote = () => {
  return (
    <div className="get-quote">
      <form className="get-quote__form" action="" method="get">
        <h2 className="get-quote__title">GET A QUOTE</h2>
        <CardCar />
        <CardPerson />
        <button className="get-quote__btn">GET YOUR QUOTE</button>
      </form>
      <img
        className="get-quote__img"
        src={bgImage}
        alt="man on the road next to broken car"
      />
    </div>
  );
};

export default GetAQuote;
