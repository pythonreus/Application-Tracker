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

module.export = { avalJobs, jobApplications };