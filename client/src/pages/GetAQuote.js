import React, { Component } from "react";
import ListCardCar from "../components/cards/ListCardCar";
import CardPerson from "../components/cards/CardPerson";
import bgImage from "../assets/images/broken-car.png";

class GetAQuote extends Component {
  state = {
    cars: [
      {
        id: 10000001,
        make: "BMW",
        model: "X1",
        year: "2020",
      },
      {
        id: 10000002,
        make: "Mercedes-Benz",
        model: "G-Class",
        year: "2019",
      },
      {
        id: 10000003,
        make: "Honda",
        model: "Pilot",
        year: "2021",
      },
      {
        id: 10000004,
        make: "Toyota",
        model: "4Runner",
        year: "2018",
      },
      {
        id: 10000005,
        make: "Hyundai",
        model: "Palisade",
        year: "2020",
      },
    ],
    customer: [],
  };

  render() {
    // console.log(this.state.cars);
    return (
      <div className="get-quote">
        <form className="get-quote__form">
          <h2 className="get-quote__title">GET A QUOTE</h2>
          <ListCardCar cars={this.state.cars} />
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
  }
}

export default GetAQuote;
