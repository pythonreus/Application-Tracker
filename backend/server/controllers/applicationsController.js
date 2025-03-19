//use the dummy data
const { jobApplications } = require('../dummydata/dummy');

// returns all the applications in pagination form
const getAllApplications = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = jobApplications.slice(startIndex, endIndex); 

     return res.json({
        page,
        limit,
        total: avalJobs.length,
        totalPages: Math.ceil(jobApplications.length / limit),
        applications: results
    });

};

// return a single application
const getSingleApplication = (req,res) => {

};


//adds a new application to the db
const addApplication = (req,res) => {

};

//delete an application from the db
const deleteApplication = (req,res) => {

};

// update an application in the db
const updateApplication = (req,res) => {

};

module.exports = {
    getAllApplications, getSingleApplication, addApplication, deleteApplication, updateApplication
}; 

