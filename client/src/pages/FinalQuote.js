import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FinalQuote = () => {
  return (
    <section className="final-quote">
      <div className="final-quote__results">
        <h2 className="final-quote__title">YOUR QUOTE</h2>
        <div className="final-quote__container">
          <p className="final-quote__label">QUOTE ID:</p>
          <p className="final-quote__input-result">{uuidv4()}</p>
        </div>
        <div className="final-quote__container">
          <p className="final-quote__label">PREMIUM:</p>
          <p className="final-quote__input-result">
            $ {Math.floor(Math.random() * 25) + 100}
            ,00
          </p>
        </div>

        <div className="final-quote__btn-container">
          <Link to="/">
            <button className="final-quote__btn-cancel">CANCEL</button>
          </Link>
          <Link to="/">
            <button className="final-quote__btn-buy">BUY</button>
          </Link>
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
