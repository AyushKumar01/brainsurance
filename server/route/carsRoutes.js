const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController'); // import controller

// // car routes
router.get('/', carsController.carsList);
router.get('/:id', carsController.modelList);
// // export routes
module.exports = router;
