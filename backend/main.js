const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const port = 3000;

// import my routes
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobsRoutes');
const applicationRoutes = require('./routes/applicationsRoutes');


//use my routes
app.use('/user',userRoutes);
app.use('/job',jobRoutes);
app.use('/application',applicationRoutes);

//this is the connection url to my database
const db_url = "mongodb+srv://kgadiselepe:Yehovah100@my-projects.kheii.mongodb.net/Application-Tracker?retryWrites=true&w=majority&appName=My-Projects";
mongoose.connect(db_url)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(cors());

// Middleware to parse JSON data in request body
app.use(express.json());



  
 
  

