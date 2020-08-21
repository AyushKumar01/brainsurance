import React from "react";

const CarYearOption = (props) => {
  return (
    <>
      <option className="cardCar__make-option" value="1">
        {props.carData.year}
      </option>
    </>
  );
};

export default CarYearOption;
