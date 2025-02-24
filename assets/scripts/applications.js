// retrieve all applications
function getAllApplications() {
    fetch('http://localhost:3000/applications')
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            let ApplicationCard = document.querySelector('.card-container');
            ApplicationCard.style.paddingTop = '70px';
            
            data.forEach(element => {
                // Create the outer card div element
                const card = document.createElement('div');
                card.classList.add('w-2/3', 'm-4', 'p-4', 'pt-3', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-xl', 'sm:p-8', 'dark:bg-gray-800', 'dark:border-gray-700');

                // Create the company name element
                const companyName = document.createElement('h5');
                companyName.classList.add('mb-2', 'text-lg', 'font-bold', 'text-gray-900', 'dark:text-white');
                companyName.textContent = 'Company: '+ element.companyName;

                // Create the location paragraph element
                const location = document.createElement('p');
                location.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                location.textContent = 'Location: '+element.location;

                // Create the position paragraph element
                const position = document.createElement('p');
                position.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                position.textContent = 'Position: '+ element.position;

                // Create the salary paragraph element
                const salary = document.createElement('p');
                salary.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                salary.textContent = 'Salary: '+ element.salary;

                
                // Create the salary paragraph element
                const progress = document.createElement('p');
                progress.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                progress.textContent = 'Progress: '+ element.progress;

               // Create the salary paragraph element
                const status = document.createElement('p');
                status.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');

                // Create the "Status:" text as a part of the paragraph
                const statusLabel = document.createElement('span');
                statusLabel.textContent = 'Status: ';

                // Create the dynamic colored status text
                const statusText = document.createElement('span');
                statusText.textContent = element.status;

                // Apply the appropriate color based on the status value
                if (element.status === 'Pending') {
                    statusText.classList.add('text-yellow-500'); // Yellow color for "Pending"
                } else if (element.status === 'Accepted') {
                    statusText.classList.add('text-green-500'); // Green color for "Accepted"
                } else if (element.status === 'Rejected') {
                    statusText.classList.add('text-red-500'); // Red color for "Rejected"
                }

                // Append the label and the status text together
                status.appendChild(statusLabel);
                status.appendChild(statusText);


                // Append all the created elements to the card div
                card.appendChild(companyName);
                card.appendChild(location);
                card.appendChild(position);
                card.appendChild(salary);
                card.appendChild(progress);
                card.appendChild(status);

                ApplicationCard.appendChild(card);


            });
        })
        .catch(error => {
            console.error('Error in GET request:', error);  // Catch errors
        });

}

//getAllApplications();

// retrieve all paginated applications
let currentPage = 1;
const limit = 5; // Jobs per page
function getPaginatedApplications(page = 1) {
    fetch(`http://localhost:3000/allapplications?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            let ApplicationCard = document.querySelector('.card-container');
            ApplicationCard.innerHTML = '';  // Clear the existing content
            ApplicationCard.style.paddingTop = '70px';
            
            data['applications'].forEach(element => {
                // Create the outer card div element
                const card = document.createElement('div');
                card.classList.add('w-2/3', 'm-4', 'p-4', 'pt-3', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-xl', 'sm:p-8', 'dark:bg-gray-800', 'dark:border-gray-700');

                // Create the company name element
                const companyName = document.createElement('h5');
                companyName.classList.add('mb-2', 'text-lg', 'font-bold', 'text-gray-900', 'dark:text-white');
                companyName.textContent = 'Company: '+ element.companyName;

                // Create the location paragraph element
                const location = document.createElement('p');
                location.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                location.textContent = 'Location: '+element.location;

                // Create the position paragraph element
                const position = document.createElement('p');
                position.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                position.textContent = 'Position: '+ element.position;

                // Create the salary paragraph element
                const salary = document.createElement('p');
                salary.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                salary.textContent = 'Salary: '+ element.salary;

                
                // Create the salary paragraph element
                const progress = document.createElement('p');
                progress.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');
                progress.textContent = 'Progress: '+ element.progress;

               // Create the salary paragraph element
                const status = document.createElement('p');
                status.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-md', 'dark:text-gray-400');

                // Create the "Status:" text as a part of the paragraph
                const statusLabel = document.createElement('span');
                statusLabel.textContent = 'Status: ';

                // Create the dynamic colored status text
                const statusText = document.createElement('span');
                statusText.textContent = element.status;

                // Apply the appropriate color based on the status value
                if (element.status === 'Pending') {
                    statusText.classList.add('text-yellow-500'); // Yellow color for "Pending"
                } else if (element.status === 'Accepted') {
                    statusText.classList.add('text-green-500'); // Green color for "Accepted"
                } else if (element.status === 'Rejected') {
                    statusText.classList.add('text-red-500'); // Red color for "Rejected"
                }

                // Append the label and the status text together
                status.appendChild(statusLabel);
                status.appendChild(statusText);


                // Append all the created elements to the card div
                card.appendChild(companyName);
                card.appendChild(location);
                card.appendChild(position);
                card.appendChild(salary);
                card.appendChild(progress);
                card.appendChild(status);

                ApplicationCard.appendChild(card);


            });
            createPaginationButtons(data.page, data.totalPages);
        })
        .catch(error => {
            console.error('Error in GET request:', error);  // Catch errors
        });

}

function createPaginationButtons(currentPage, totalPages) {
    const paginationContainer = document.querySelector('.pagination-container');
    paginationContainer.style.marginTop = '15px';
    paginationContainer.innerHTML = ''; // Clear previous buttons

    // Create a wrapper div with class "join"
    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('join');

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('join-item', 'btn', 'btn-md');
        
        if (i === currentPage) {
            button.classList.add('btn-active'); // Highlight current page
        }

        button.addEventListener('click', () => {
            getPaginatedApplications(i); // Load jobs for the selected page
        });

        paginationWrapper.appendChild(button);
    }

    paginationContainer.appendChild(paginationWrapper);
}

getPaginatedApplications(currentPage);

//add an new application

// update an application