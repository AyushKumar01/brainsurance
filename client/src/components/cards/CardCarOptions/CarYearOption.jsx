import React from "react";

const CarYearOption = (props) => {
  return (
    <>
      <option className="cardCar__make-option" value={props.year}>
        {props.year}
      </option>
    </>
  );
};

export default CarYearOption;
