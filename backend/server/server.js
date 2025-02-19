const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data in request body
app.use(express.json());

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
    }
  ];
  
 
  
// GET endpoint: Returns a JSON response
app.get('/jobs', (req, res) => {
  res.json(avalJobs);
});

// POST endpoint: Accepts a value and displays it
app.post('/signup', (req, res) => {
    // Destructure the input from the request body
    const { fullname, email, password } = req.body;
  
    // Check if all required fields are provided
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields (fullname, email, password) are required" });
    }
  
    // Log the values to the console
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Respond with the received data
    res.json({ message: "Signup data received successfully", receivedData: { fullname, email, password } });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
