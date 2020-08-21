import React from "react";

const CarModelOption = (props) => {
  return (
    <>
      <option className="cardCar__model-option" value="1">
        {props.carData.model}
      </option>
    </>
  );
};

export default CarModelOption;
