import React from "react";
import CarMakeOption from "./CardCarOptions/CarMakeOption";
import CarModelOption from "./CardCarOptions/CarModelOption";
import CarYearOption from "./CardCarOptions/CarYearOption";

const CardCar = (props) => {
  return (
    <div className="cardCar">
      <h3 className="cardCar__title">ABOUT YOUR CAR</h3>
      <div className="cardCar__form">
        <select className="cardCar__menu-make">
          <option className="cardCar__make-option" value="0">
            MAKE:
          </option>
          {props.cars.map((car) => (
            <CarMakeOption carData={car} />
          ))}
        </select>
        <select className="cardCar__menu-make">
          <option className="cardCar__make-option" value="0">
            MODEL:
          </option>
          {props.cars.map((car) => (
            <CarModelOption carData={car} />
          ))}
        </select>
        <select className="cardCar__menu-year">
          <option className="cardCar__year-option" value="0">
            YEAR:
          </option>
          {props.cars.map((car) => (
            <CarYearOption carData={car} />
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
};

export default CardCar;
