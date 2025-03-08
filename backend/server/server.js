const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const User = require('./models/userModel');
const app = express();
const port = 3000;

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

// dealing with database operations
app.get("/register",(req,res) =>{
  const user = new User({
      fullname : "Kgadi Selepe",
      email : "kgadiselepe11@gmail.com",
      password: "qwerty123"
  })
  user.save()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
      console.log(err)
    });

});

// Sample data: companies with monthly salaries
const avalJobs = [
    {
      companyName: "Tech Innovators SA",
      location: "Cape Town, Western Cape",
      position: "Software Engineer",
      salary: "R 150,000"
    },
    {
      companyName: "GreenTech Solutions SA",
      location: "Johannesburg, Gauteng",
      position: "Data Scientist",
      salary: "R 125,000"
    },
    {
      companyName: "WebWizards Ltd.",
      location: "Durban, KwaZulu-Natal",
      position: "Front-End Developer",
      salary: "R 70,000"
    },
    {
      companyName: "Cybernetix Security",
      location: "Pretoria, Gauteng",
      position: "Cybersecurity Analyst",
      salary: "R 83,000"
    },
    {
      companyName: "NextGen Technologies",
      location: "Port Elizabeth, Eastern Cape",
      position: "Product Manager",
      salary: "R 75,000"
    },
    {
      companyName: "Smart Solutions SA",
      location: "Sandton, Gauteng",
      position: "UX/UI Designer",
      salary: "R 62,500"
    },
    {
      companyName: "Global Enterprises SA",
      location: "Bloemfontein, Free State",
      position: "Project Coordinator",
      salary: "R 58,000"
    },
    {
      companyName: "FutureTech Labs SA",
      location: "Stellenbosch, Western Cape",
      position: "Software Architect",
      salary: "R 166,000"
    },
    {
      companyName: "TechPulse SA",
      location: "Pretoria, Gauteng",
      position: "DevOps Engineer",
      salary: "R 108,000"
    },
    {
      companyName: "AI Pioneers Ltd.",
      location: "Johannesburg, Gauteng",
      position: "Machine Learning Engineer",
      salary: "R 150,000"
    },
    {
      companyName: "Quantum Innovations",
      location: "Cape Town, Western Cape",
      position: "Quantum Computing Engineer",
      salary: "R 200,000"
    },
    {
      companyName: "MedTech Solutions",
      location: "Pretoria, Gauteng",
      position: "Biomedical Engineer",
      salary: "R 95,000"
    },
    {
      companyName: "RetailTech SA",
      location: "Johannesburg, Gauteng",
      position: "E-commerce Specialist",
      salary: "R 80,000"
    },
    {
      companyName: "CloudX Technologies",
      location: "Durban, KwaZulu-Natal",
      position: "Cloud Solutions Architect",
      salary: "R 130,000"
    },
    {
      companyName: "Blockchain Ventures SA",
      location: "Cape Town, Western Cape",
      position: "Blockchain Developer",
      salary: "R 140,000"
    },
    {
      companyName: "Renewable Energy Hub",
      location: "Port Elizabeth, Eastern Cape",
      position: "Renewable Energy Consultant",
      salary: "R 110,000"
    },
    {
      companyName: "CyberShield Security",
      location: "Sandton, Gauteng",
      position: "Ethical Hacker",
      salary: "R 120,000"
    },
    {
      companyName: "EdTech SA",
      location: "Bloemfontein, Free State",
      position: "Educational Technology Specialist",
      salary: "R 85,000"
    },
    {
      companyName: "AI Research Labs",
      location: "Johannesburg, Gauteng",
      position: "AI Research Scientist",
      salary: "R 180,000"
    },
    {
      companyName: "VR Innovations",
      location: "Stellenbosch, Western Cape",
      position: "VR Game Developer",
      salary: "R 90,000"
    }
];



const jobApplications = [
    {
        companyName: "Tech Innovators SA",
        location: "Cape Town, Western Cape",
        position: "Software Engineer",
        salary: "R 150,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "GreenTech Solutions SA",
        location: "Johannesburg, Gauteng",
        position: "Data Scientist",
        salary: "N/A",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "WebWizards Ltd.",
        location: "Durban, KwaZulu-Natal",
        position: "Front-End Developer",
        salary: "R 70,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "Cybernetix Security",
        location: "Pretoria, Gauteng",
        position: "Cybersecurity Analyst",
        salary: "R 83,000",
        progress: "Completed",
        status: "Rejected"
    },
    {
        companyName: "NextGen Technologies",
        location: "Port Elizabeth, Eastern Cape",
        position: "Product Manager",
        salary: "R 75,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "Smart Solutions SA",
        location: "Sandton, Gauteng",
        position: "UX/UI Designer",
        salary: "R 62,500",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "Global Enterprises SA",
        location: "Bloemfontein, Free State",
        position: "Project Coordinator",
        salary: "N/A",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "FutureTech Labs SA",
        location: "Stellenbosch, Western Cape",
        position: "Software Architect",
        salary: "R 166,000",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "TechPulse SA",
        location: "Pretoria, Gauteng",
        position: "DevOps Engineer",
        salary: "R 108,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "AI Pioneers Ltd.",
        location: "Johannesburg, Gauteng",
        position: "Machine Learning Engineer",
        salary: "R 150,000",
        progress: "Completed",
        status: "Rejected"
    },
    {
        companyName: "CloudTech Solutions",
        location: "Cape Town, Western Cape",
        position: "Cloud Engineer",
        salary: "R 120,000",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "FinTech Innovations",
        location: "Johannesburg, Gauteng",
        position: "Financial Data Analyst",
        salary: "R 98,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "HealthTech SA",
        location: "Durban, KwaZulu-Natal",
        position: "Bioinformatics Specialist",
        salary: "R 105,000",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "NextGen AI",
        location: "Pretoria, Gauteng",
        position: "AI Research Scientist",
        salary: "R 180,000",
        progress: "Completed",
        status: "Rejected"
    },
    {
        companyName: "E-Commerce Leaders",
        location: "Sandton, Gauteng",
        position: "Digital Marketing Analyst",
        salary: "R 65,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "Big Data Experts",
        location: "Cape Town, Western Cape",
        position: "Big Data Engineer",
        salary: "R 135,000",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "LogiTech SA",
        location: "Port Elizabeth, Eastern Cape",
        position: "Supply Chain Analyst",
        salary: "R 77,000",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "MedTech Innovators",
        location: "Johannesburg, Gauteng",
        position: "Healthcare Data Analyst",
        salary: "R 92,000",
        progress: "Completed",
        status: "Accepted"
    },
    {
        companyName: "EdTech Pioneers",
        location: "Bloemfontein, Free State",
        position: "Educational Technology Specialist",
        salary: "N/A",
        progress: "In Progress",
        status: "Pending"
    },
    {
        companyName: "RetailTech SA",
        location: "Durban, KwaZulu-Natal",
        position: "E-Commerce Developer",
        salary: "R 78,000",
        progress: "Completed",
        status: "Rejected"
    }
];



app.get('/applications', (req, res) => {
    res.json(jobApplications);
});

app.get('/allapplications', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = jobApplications.slice(startIndex, endIndex); 

    res.json({
        page,
        limit,
        total: avalJobs.length,
        totalPages: Math.ceil(jobApplications.length / limit),
        applications: results
    });

  });
  
 
  
// GET endpoint: Returns a JSON response
app.get('/jobs', (req, res) => {
  res.json(avalJobs);
});

//paginated jobs
app.get('/alljobs', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = avalJobs.slice(startIndex, endIndex); // Assuming jobs is an array

    res.json({
        page,
        limit,
        total: avalJobs.length,
        totalPages: Math.ceil(avalJobs.length / limit),
        jobs: results
    });

  });

// POST endpoint: Accepts a value and displays it
app.post('/signup', (req, res) => {
    // Destructure the input from the request body
    const { fullname, email, password } = req.body;
  
    // Check if all required fields are provided
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields (fullname, email, password) are required" });
    }
  
    // process the user data
    const user = new User({
        fullname : fullname,
        email : email,
        password : password
    });

    user.save()
      .then((result) =>{
        // Respond with the received data
        res.json({ message: "User Signup was successful!"});

      })
      .catch((err) =>{
        res.json({ message: "User Signup was unsuccessful!"});
      });
  
    
  });
  

