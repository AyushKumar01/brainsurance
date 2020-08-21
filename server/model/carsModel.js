const fs = require('fs'); // file system module
const path = require('path');

// json data to read and write
const carsFile = path.join(__dirname, '../db/cars.json');
const carsModelFile = path.join(__dirname, '../db/carsModel.json');

function list() {
    const data = fs.readFileSync(carsFile);
    return JSON.parse(data);
  }

function modelList(id){
    const data = fs.readFileSync(carsModelFile);
    const carModel = JSON.parse(data).filter((model) => model.id.toUpperCase() === id.toUpperCase());
    return carModel;
}

  module.exports = {list, modelList};