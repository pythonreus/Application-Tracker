//use the dummy data
const { avalJobs } = require('../dummydata/dummy');

//returns all the jobs in pagination form
const getAllJobs = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = avalJobs.slice(startIndex, endIndex); // Assuming jobs is an array

    return res.json({
        page,
        limit,
        total: avalJobs.length,
        totalPages: Math.ceil(avalJobs.length / limit),
        jobs: results
    });

};

// return a single job
const getSingleJob = (req,res) => {

};

// add a new job in the database
const addJob = (req,res) => {

};


// delete a job from the database
const deleteJob = (req,res) => {

};

// updates a job in the database
const updateJob = (req,res) => {

};



// set the job status (admin),approve a job or decline a job
const setJobStatus = (req,res) => {

};


module.exports = {
    getAllJobs, getSingleJob, addJob, deleteJob, updateJob, setJobStatus
};
