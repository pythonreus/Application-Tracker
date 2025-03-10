import * as helpers from './helper.js'
import * as Auth from './Auth.js'

function renderSignUpPage(){
    // Render the sign-up page with the provided form
    let cardContainer = document.querySelector(".card-container");
    fetch('../../components/signup.html')
    .then(response => response.text())  // Get the content of the HTML file
    .then(html => {
        cardContainer.innerHTML = html;  // Insert into container
        document.querySelector(".signup-submit").addEventListener('click',function(){
            userSignUp();
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
window.userSignUp = function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmPassword = document.getElementById('confirmPassword');
    
    if(!helpers.isAlphaSpace(username.value)){
        username.style.outline = "1px solid red";
        return;
    }

    if(!helpers.lengthCheck(password.value)){
        password.style.outline = "1px solid red";
        return;
    }

    if(!helpers.stringCheck(password.value,confirmPassword.value)){
        confirmPassword.style.outline = "1px solid red";
        return;
    }

    Auth.SignUp(username,email,password);

};