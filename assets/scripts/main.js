import * as helpers from './helper.js'
import * as Auth from './Auth.js'

function renderSignUpPage(){
    // Render the sign-up page with the provided form
    let cardContainer = document.querySelector(".card-container");
    fetch('../../components/signup.html')
    .then(response => response.text())  // Get the content of the HTML file
    .then(html => {
        cardContainer.innerHTML = html;  // Insert into container
         // Add event listener to the form submit action
         const signupForm = document.getElementById("signup-form");
         signupForm.addEventListener('submit', function(event) {
            
             userSignUp(event);  // Call your signup function
         });

    })
    .catch(error => {
        console.error('Error loading the HTML file:', error);
    });
}

function renderSignInPage(){
      // Render the sign-in page with the provided form
      let cardContainer = document.querySelector(".card-container");
      fetch('../../components/signin.html')
      .then(response => response.text())  // Get the content of the HTML file
      .then(html => {
          cardContainer.innerHTML = html;  // Insert into container
      })
      .catch(error => {
          console.error('Error loading the HTML file:', error);
      });

}
window.switchTabs = function (switchController){
    if(switchController === "signup"){
        renderSignUpPage();
    }else{
        renderSignInPage();
    }
}

// Initial render of the sign-in page
renderSignInPage();

// Singing Up
window.userSignUp = function(event){
    event.preventDefault(); 
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmPassword = document.getElementById('confirmPassword');
    
    //validate the data

    Auth.SignUp(username.value,email.value,password.value);

};
