// load model
const cars = require('../model/carsModel');

// get car array
function carsList(_req, res) {
  res.json(cars.list());
}

function modelList(req, res){
    res.json(cars.modelList(req.params.id));
}


// export functions
module.exports = {
     carsList,
     modelList
};
