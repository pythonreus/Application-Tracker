const express = require('express');
const router = express.Router();

//import all the functions in the AplicationsController
const { getAllApplications, getSingleApplication, addApplication, deleteApplication, updateApplication }  = require('../controllers/applicationsController');

// define the routes for jobs
router.get('/allApplications', getAllApplications);
router.get('/:id', getSingleApplication);
router.post('/postApplication',addApplication);
router.delete('/:id',deleteApplication);
router.put('/:id',updateApplication);


module.exports = router;