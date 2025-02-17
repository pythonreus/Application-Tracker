function renderSignUpPage(){
    // Render the sign-up page with the provided form
    console.log("this function has been called");
    let cardContainer = document.querySelector(".card-container");
    fetch('../../components/signup.html')
    .then(response => response.text())  // Get the content of the HTML file
    .then(html => {
        cardContainer.innerHTML = html;  // Insert into container
    })
    .catch(error => {
        console.error('Error loading the HTML file:', error);
    });
}

function renderSignInPage(){
      // Render the sign-in page with the provided form
      console.log("the login function has been called");
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

renderSignInPage();

// Singing Up
function userSignUp(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmPassword = document.getElementById('confirmPassword');
}
