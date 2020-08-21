import React from "react";
import CardCar from "../components/cards/CardCar";
import CardPerson from "../components/cards/CardPerson";

const GetAQuote = () => {
  return (
    <div className="get-quote">
      <form className="get-quote__form" action="" method="get">
        <h2 className="get-quote__title">GET A QUOTE</h2>
        <CardCar />
        <CardPerson />
      </form>
    </div>
  );
};

export default GetAQuote;
