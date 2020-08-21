import React from "react";

const CarMakeOption = (props) => {
  return (
    <>
      <option className="cardCar__make-option" value="1">
        {props.carData.make}
      </option>
    </>
  );
};

export default CarMakeOption;
