import React from "react";

const CarMakeOption = (props) => {
  return (
    <>
      <option className="cardCar__make-option" value={props.make}>
        {props.make}
      </option>
    </>
  );
};

export default CarMakeOption;
