import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/images/jamie-street-JtP_Dqtz6D8-unsplash.jpg";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__img"
        src={headerImg}
        alt="man on the road next to broken car"
      />
      <h1 className="header__title"> Make your life easier.</h1>
      <Link to="/get-a-quote" className="navbar__btn-link">
        <button className="main__btn">GET A QUOTE TODAY</button>
      </Link>
    </div>
  );
};

export default Header;
