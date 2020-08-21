import React from "react";

const CardPerson = () => {
  return (
    <div className="cardPerson">
      <h3 className="cardPerson__title">ABOUT YOU</h3>
      <div className="cardPerson__form">
        <input
          className="cardPerson__form-input"
          type="text"
          placeholder="NAME"
        />
        <input
          className="cardPerson__form-input"
          type="text"
          placeholder="LASTNAME"
        />
        <label className="cardPerson__form-label" for="start">
          Date of Birth:
        </label>

        <input
          className="cardPerson__form-input"
          type="date"
          id="start"
          name="trip-start"
          min="1970-01-01"
          max="2004-08-21"
        />
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
      </div>
    </div>
  );
};

export default CardPerson;
