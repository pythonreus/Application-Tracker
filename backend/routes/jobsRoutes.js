const express = require('express');
const router = express.Router();

//import all the functions in the jobsController

const { getAllJobs, getSingleJob, addJob, deleteJob, updateJob, setJobStatus }  = require('../controllers/jobsController');

// define the routes for jobs

router.get('/alljobs', getAllJobs);
router.get('/:id', getSingleJob);
router.post('/postjob',addJob);
router.delete('/:id',deleteJob);
router.put('/:id',updateJob);
router.post('/setJobStatus/:id',setJobStatus);


module.exports = router;