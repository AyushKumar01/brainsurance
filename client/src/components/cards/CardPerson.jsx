import React from "react";

const CardPerson = () => {
  return (
    <div>
      <h2>ABOUT YOU</h2>
      <form action="" method="get">
        <select class="item__menu--select">
          <option class="item__menu--option" value="0">
            Year:
          </option>
          <option class="item__menu--option" value="1">
            2004
          </option>
          <option class="item__menu--option" value="2">
            2003
          </option>
        </select>
      </form>
    </div>
  );
};

export default CardPerson;
