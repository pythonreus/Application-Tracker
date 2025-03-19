const User = require('../models/userModel');

// function to signup
const userRegister =  (req, res) => {
    // get the data from the request body
    const { fullname, email, password } = req.body;

    //need to check if the user exists in the database with the same email address
  
    // Check if all required fields are provided
    if (!fullname || !email || !password) {
      return res.status(400).json({message : "Missing values", result: {}, error: "All fields (fullname, email, password) are required" });
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
        return res.json({ message: "User Signup was successful!", result: result, error : "none" });

      })
      .catch((err) =>{
        return res.json({ message: "User Signup was unsuccessful!", result: {}, error : err});
      });
  
    
  };

// function to login
const userlogin = (req,res) => {

};


// function to update user
const updateUser = (req,res) => {

};

//function to delete user
const deleteUser = (req,res) => {

};


//function to get a single user
const getUser = (req,res) => {

};

//function to get all the users
const getAllUsers = (req,res) => {

};

//function to update password
const updatePassword = (req,res) => {

};
  

module.exports =  {
    userRegister, userlogin , updateUser, deleteUser, getUser, getAllUsers, updatePassword
};
