const { BASE_PREMIUM_PRICE } = require('../constants');
const { v4: uuidv4 } = require('uuid');
const quotes = require('../models/quotes');
const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const calculateQuoteByAge = (quoteAmount, age) => {
    let ageCheck = 0;
    if( age == 25 ){
        ageCheck = 1
    }else if( age > 25){
        ageCheck = 2;
    }else{
        ageCheck = 0;
    }
    
    switch (ageCheck) {
        case 0:
            return quoteAmount = quoteAmount + quoteAmount * 0.02;
        case 1:
            return quoteAmount;
        case 2:
            return quoteAmount = quoteAmount - quoteAmount * 0.01;
    }
}

const calculateQuoteByCommute = (quoteAmount, commute) => {
    switch (commute) {
        case 0:
            return quoteAmount = quoteAmount - quoteAmount * 0.15;
        case 1:
            return quoteAmount = quoteAmount - quoteAmount * 0.05;
        case 2:
            return quoteAmount = quoteAmount + quoteAmount * 0.05;
        case 3:
            return quoteAmount = quoteAmount + quoteAmount * 0.15;
    }
}

const calculateQuoteByLicenseType = (quoteAmount, commute) => {
    switch (commute) {
        case "G2":
            return quoteAmount;
        case "G1":
            return quoteAmount = quoteAmount + quoteAmount * 0.10;
        case "G":
            return quoteAmount = quoteAmount - quoteAmount * 0.10;
    }
}

const calculateQuoteByExperience = (quoteAmount, commute) => {
    switch (commute) {
        case 0:
            return quoteAmount = quoteAmount + quoteAmount * 0.10;
        case 1:
            return quoteAmount = quoteAmount - quoteAmount * 0.05;
        case 2:
            return quoteAmount = quoteAmount - quoteAmount * 0.10;
    }
}

const postQuote = (req, res) => {
    try {
        const { dateOfBirth, licenseType, commuteDistance, licenseExperience } = req.body;
        if (dateOfBirth == undefined || licenseType == undefined || commuteDistance == undefined || licenseExperience == undefined) {
            res.status(400).send({ message: 'Bad Request' });
        } else {
            const age = getAge(dateOfBirth);
            let quoteAmount = BASE_PREMIUM_PRICE;
            quoteAmount = calculateQuoteByAge(quoteAmount, age);
            quoteAmount = calculateQuoteByCommute(quoteAmount,commuteDistance);
            quoteAmount = calculateQuoteByLicenseType(quoteAmount,licenseType);
            quoteAmount = calculateQuoteByExperience(quoteAmount,licenseExperience);
            const quote = {
                id: uuidv4(),
                premium: quoteAmount,
                date: Date.now()
            }
            quotes.push(quote);
            res.status(200).send(quote);
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}
module.exports = {
    postQuote: postQuote
}