const { BASE_PREMIUM_PRICE, BASE_AGE } = require("../constants");
const { v4: uuidv4 } = require("uuid");
const quotes = require("../models/quotes");
const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const calculateQuoteByAge = (quoteAmount, age) => {
  let ageCheck = 0;
  if (age == 25) {
    ageCheck = 1;
  } else if (age > 25) {
    ageCheck = 2;
  } else {
    ageCheck = 0;
  }

  switch (ageCheck) {
    case 0:
      return (
        parseInt(quoteAmount) * ((parseInt(BASE_AGE) - parseInt(age)) * 0.02)
      );
    case 1:
      return 0;
    case 2:
      return -(
        -parseInt(quoteAmount) *
        ((parseInt(BASE_AGE) - parseInt(age)) * 0.01)
      );
  }
};

const calculateQuoteByCommute = (quoteAmount, commute) => {
  switch (commute) {
    case 0:
      return -parseInt(quoteAmount) * 0.15;
    case 1:
      return -parseInt(quoteAmount) * 0.05;
    case 2:
      return +parseInt(quoteAmount) * 0.05;
    case 3:
      return +parseInt(quoteAmount) * 0.15;
  }
};

const calculateQuoteByLicenseType = (quoteAmount, commute) => {
  switch (commute) {
    case "G2":
      return 0;
    case "G1":
      return +parseInt(quoteAmount) * 0.1;
    case "G":
      return -parseInt(quoteAmount) * 0.1;
  }
};

const calculateQuoteByExperience = (quoteAmount, commute) => {
  switch (commute) {
    case 0:
      return +parseInt(quoteAmount) * 0.1;
    case 1:
      return -parseInt(quoteAmount) * 0.05;
    case 2:
      return -parseInt(quoteAmount) * 0.1;
  }
};

const postQuote = (req, res) => {
  try {
    const {
      dateOfBirth,
      licenseType,
      commuteDistance,
      licenseExperience,
    } = req.body;
    if (
      dateOfBirth == undefined ||
      licenseType == undefined ||
      commuteDistance == undefined ||
      licenseExperience == undefined
    ) {
      res.status(400).send({ message: "Bad Request" });
    } else {
      const age = getAge(dateOfBirth);
      let quoteAmount = BASE_PREMIUM_PRICE;
      let ageAmount = calculateQuoteByAge(BASE_PREMIUM_PRICE, age);
      let commuteDiscount = calculateQuoteByCommute(
        BASE_PREMIUM_PRICE,
        commuteDistance
      );
      let licenseTypeDiscount = calculateQuoteByLicenseType(
        BASE_PREMIUM_PRICE,
        licenseType
      );
      let licenseExpDiscount = calculateQuoteByExperience(
        BASE_PREMIUM_PRICE,
        licenseExperience
      );
      quoteAmount =
        parseInt(ageAmount) +
        parseInt(quoteAmount) +
        parseInt(commuteDiscount) +
        parseInt(licenseTypeDiscount) +
        parseInt(licenseExpDiscount);
      const quote = {
        id: uuidv4(),
        premium: quoteAmount,
        date: Date.now(),
      };
      quotes.push(quote);
      res.status(200).send(quote);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
module.exports = {
  postQuote: postQuote,
};
