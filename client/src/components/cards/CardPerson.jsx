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
        <div className="cardPerson__form-dob">
          <label className="cardPerson__form-label" htmlFor="start">
            DATE OF BIRTH:
          </label>

          <input
            className="cardPerson__form-input"
            type="date"
            id="start"
            name="trip-start"
            min="1970-01-01"
            max="2004-08-21"
          />
        </div>
        <select className="cardPerson__menu-license">
          <option className="cardPerson__license-option" value="0">
            LICENSE TYPE:
          </option>
          <option className="cardPerson__license-option" value="1">
            G2
          </option>
          <option className="cardPerson__license-option" value="2">
            G1
          </option>
          <option className="cardPerson__license-option" value="3">
            G
          </option>
        </select>
      </div>
    </div>
  );
};

export default CardPerson;
