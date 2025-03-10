// user login

//user registration
function SignUp(name,email,password){
    const requestData = {
        fullname: name,
        email: email,
        password: password
    };

    // Send POST request to server
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)  // Convert data to JSON format
    })
    .then((response) => response.json())
    .then((data) =>{
       console.log(data.result);
    })
    .catch((err) => {
        console.log("theres an error");
    });

}

// user logout

// user delete accounts

export { SignUp };