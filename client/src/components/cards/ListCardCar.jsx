import React, { Component } from "react";
import CarMakeOption from "./CardCarOptions/CarMakeOption";
import CarModelOption from "./CardCarOptions/CarModelOption";
import CarYearOption from "./CardCarOptions/CarYearOption";
import axios from "axios";

class CardCar extends Component {
  state = {
    years: [],
    makes: [],
    models: [],
    selectedYear: "",
  };

  componentDidMount() {
    this.loadYear();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(this.props.match);
  // }

  loadYear() {
    axios
      .get(
        "http://localhost:8080/years/?api_key=f893b2ad-024e-4209-bd96-2d14e25805c5"
      )
      .then(({ data }) => {
        if (!data.length) {
          return;
        }
        this.setState({
          years: data,
          make: [],
          model: [],
        });
      });
  }

  loadMakes = (event) => {
    console.log(event.target.value);

    const year = event.target.value;
    axios
      .get(
        `http://localhost:8080/makes/${year}/?api_key=f893b2ad-024e-4209-bd96-2d14e25805c5`
      )
      .then(({ data }) => {
        if (!data.length) {
          return;
        }
        this.setState({
          makes: data,
          selectedYear: year,
          model: [],
        });
      });
  };

  loadModels = (event) => {
    const year = this.state.selectedYear;
    const make = event.target.value;
    console.log(year, make);
    axios
      .get(
        `http://localhost:8080/models/${year}/${make}/?api_key=f893b2ad-024e-4209-bd96-2d14e25805c5`
      )
      .then(({ data }) => {
        if (!data.length) {
          return;
        }
        this.setState({
          models: data,
        });
      });
  };

  render() {
    return (
      <div className="cardCar">
        <h3 className="cardCar__title">ABOUT YOUR CAR</h3>
        <div className="cardCar__form">
          <select
            className="cardCar__menu-year"
            placeholder="Year"
            onChange={this.loadMakes}
          >
            <option className="cardCar__year-option" value="">
              YEAR:
            </option>
            {this.state.years.map((year) => (
              <CarYearOption year={year} />
            ))}
          </select>
          <select className="cardCar__menu-make" onChange={this.loadModels}>
            <option className="cardCar__make-option" value="">
              MAKE:
            </option>
            {this.state.makes.map((make) => (
              <CarMakeOption make={make} />
            ))}
          </select>
          <select className="cardCar__menu-make">
            <option className="cardCar__make-option" value="">
              MODEL:
            </option>
            {this.state.models.map((model) => (
              <CarModelOption model={model} />
            ))}
          </select>

          <select className="cardCar__menu-commute">
            <option className="cardCar__commute-option" value="0">
              DAILY COMMUTE:
            </option>
            <option className="cardCar__commute-option" value="1">
              0 to 50km/day
            </option>
            <option className="cardCar__commute-option" value="2">
              51 to 70km/day
            </option>
            <option className="cardCar__commute-option" value="3">
              71 to 90km/day
            </option>
            <option className="cardCar__commute-option" value="4">
              91km or more/day
            </option>
          </select>
        </div>
      </div>
    );
  }
}

export default CardCar;
