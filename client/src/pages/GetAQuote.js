import React, { Component } from "react";
import ListCardCar from "../components/cards/ListCardCar";
import CardPerson from "../components/cards/CardPerson";
import bgImage from "../assets/images/broken-car.png";
import { Link } from "react-router-dom";

class GetAQuote extends Component {
  render() {
    // console.log(this.state.cars);
    return (
      <div className="get-quote">
        <form className="get-quote__form">
          <h2 className="get-quote__title">GET A QUOTE</h2>
          <ListCardCar />
          <CardPerson />
          <Link to="/quote/final">
            <button className="get-quote__btn">GET YOUR QUOTE</button>
          </Link>
        </form>
        <img
          className="get-quote__img"
          src={bgImage}
          alt="man on the road next to broken car"
        />
      </div>
    );
  }
}

export default GetAQuote;
