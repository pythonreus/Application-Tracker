const express = require("express");
const router = express.Router();

//import all the functions from the userController
const {userRegister, userlogin, updateUser, deleteUser, getUser, getAllUsers, updatePassword} = require("../controllers/userController");

//user routes
router.post('/signup',userRegister);
router.post('/login',userlogin);
router.put('/updateUser',updateUser);
router.delete('/deleteUser',deleteUser);
router.get('/getUser',getUser);
router.get('/allUsers',getAllUsers);
router.put('/forgotpassword',updatePassword);


module.exports = router;