import React from "react";

const CardCar = () => {
  return (
    <div className="cardCar">
      <h3 className="cardCar__title">ABOUT YOUR CAR</h3>
      <div className="cardCar__form">
        <select className="cardCar__menu-year">
          <option className="cardCar__year-option" value="0">
            YEAR:
          </option>
          <option className="cardCar__year-option" value="1">
            2004
          </option>
          <option className="cardCar__year-option" value="2">
            2003
          </option>
        </select>
        <select className="cardCar__menu-make">
          <option className="cardCar__make-option" value="0">
            MAKE:
          </option>
          <option className="cardCar__make-option" value="1">
            BMW
          </option>
          <option className="cardCar__make-option" value="2">
            Audi
          </option>
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
