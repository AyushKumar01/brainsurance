import React from "react";

const CarModelOption = (props) => {
  return (
    <>
      <option className="cardCar__model-option" value={props.model}>
        {props.model}
      </option>
    </>
  );
};

export default CarModelOption;
