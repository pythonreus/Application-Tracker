// user login

//user registration
async function SignUp(name,email,password){
    const requestData = {
        name: name,
        email: email,
        password: password
    };

    try {
        // Send POST request to server
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)  // Convert data to JSON format
        });

        // Parse the response from the server
        const data = await response.json();

        // Check if the response indicates success or failure
        if (response.ok) {
            //return { success: true };
            console.log(data.message);
        } else {
            //return { success: false, message: data.message || 'Signup failed' };
            console.log(data.message);
        }
    } catch (error) {
        console.log(data.message);
       //return { success: false, message: 'An error occurred during the signup process.' };
    }
}

// user logout

// user delete accounts

export { SignUp };