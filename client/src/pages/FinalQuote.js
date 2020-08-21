import React from "react";
import { Link } from "react-router-dom";

const FinalQuote = () => {
  return (
    <section className="final-quote">
      <div className="final-quote__results">
        <h2 className="final-quote__title">YOUR QUOTE</h2>
        <div className="final-quote__container">
          <p className="final-quote__label">FULL NAME:</p>
          <p className="final-quote__input-result"></p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">DATE OF BIRTH:</p>
          <p className="final-quote__input-result">PLACEHOLDER</p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">LICENSE TYPE:</p>
          <p className="final-quote__input-result">PLACEHOLDER</p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">CAR MAKE:</p>
          <p className="final-quote__input-result">PLACEHOLDER</p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">CAR MODEL:</p>
          <p className="final-quote__input-result">PLACEHOLDER</p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">CAR YEAR:</p>
          <p className="final-quote__input-result">PLACEHOLDER</p>
        </div>
        <div className="final-quote__btn-container">
          <Link to="/">
            <button className="final-quote__btn-cancel">CANCEL</button>
          </Link>
          <button className="final-quote__btn-buy">BUY</button>
        </div>
        <h3 className="final-quote__contact">
          <span className="final-quote__contact--bold">HAVE QUESTIONS?</span>
          <span className="final-quote__contact--medium">CONTACT</span>
          <span className="final-quote__contact--light">
            1-800-BRAINSURANCE
          </span>
        </h3>
      </div>
    </section>
  );
};

export default FinalQuote;
