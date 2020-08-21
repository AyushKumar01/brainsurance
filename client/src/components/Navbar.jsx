import React from "react";
import { Link } from "react-router-dom";
import GetAQuote from "../pages/GetAQuote";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/" className="navbar__logo-link">
        <h1 className="navbar__title">
          BRA<span className="navbar__title--light">IN</span>
          <span className="navbar__title--lighter">SURANCE</span>
        </h1>
      </Link>
      <Link to="/quote" className="navbar__btn-link">
        <button className="navbar__btn">GET A QUOTE TODAY</button>
      </Link>
    </section>
  );
};

export default Navbar;
