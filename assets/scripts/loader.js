function renderNavigationBar(){
    // Render the navigation bar with the provided links
    let cardContainer = document.querySelector(".nav-header-container");
    fetch('../../components/header.html')
    .then(response => response.text())  // Get the content of the HTML file
    .then(html => {
        cardContainer.innerHTML = html;  // Insert into container
        
    })
    .catch(error => {
        console.error('Error loading the HTML file:', error);
    });
}


function renderFooter(){
    // Render the navigation bar with the provided links
    let cardContainer = document.querySelector(".footer-container");
    fetch('../../components/footer.html')
    .then(response => response.text())  // Get the content of the HTML file
    .then(html => {
        cardContainer.innerHTML = html;  // Insert into container
        const currentYear = new Date().getFullYear();
        // Set the current year in the span with id 'current-year'
        document.getElementById('current-year').textContent = currentYear;
    })
    .catch(error => {
        console.error('Error loading the HTML file:', error);
    });
}

renderNavigationBar();
renderFooter();