const express = require('express');
const CarController = require('./controllers/CarController');
const QuoteController = require('./controllers/QuoteController');
const routes = express.Router();
const {API_KEY} = require('./constants');
routes.use((req, res, next)=>{
    if( req.query.api_key != undefined && (req.query.api_key === API_KEY)){
        next();
    }else{
        res.status(401).send({message: `invalid key`});
    } 
});
routes.get('/years', CarController.getYears);
routes.get('/makes/:year', CarController.getAllMakesByYear);
routes.get('/models/:year/:make', CarController.getModelsByYearMake);
routes.post('/quotes',QuoteController.postQuote);
module.exports = routes;