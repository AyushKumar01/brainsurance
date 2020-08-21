const { YEARS } = require('../constants');
const cars = require('../models/cars');

const getYears = (req, res) => {
    try {
        res.status(200).send(YEARS);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const getAllMakesByYear = (req, res) => {
    try {
        if (req.params.year) {
            const year = parseInt(req.params.year);
            const makes = cars.filter((car) => {
                return car.year === year;
            }).map((car) => {
                return car.make
            }).filter((car, index, cars) => {
                return cars.indexOf(car) === index
            });
            res.status(200).send(makes);
        } else {
            res.status(400).send({ message: `Year is mandatory` });
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const getModelsByYearMake = (req, res) => {
    try {
        if (req.params.year && req.params.make) {
            const { year, make } = req.params;
            const models = cars.filter((car) => {
                return car.year === parseInt(year) && car.make === make
            }).map((car) => {
                return car.model
            }).filter((car, index, cars) => {
                return cars.indexOf(car) === index
            });
            res.status(200).send(models);
        } else {
            res.status(400).send({ message: `Year and make is mandatory` });
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}


module.exports = {
    getYears: getYears,
    getAllMakesByYear: getAllMakesByYear,
    getModelsByYearMake: getModelsByYearMake
}