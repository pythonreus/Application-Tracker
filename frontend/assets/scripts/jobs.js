// retrieve all jobs paginated
let currentPage = 1;
const limit = 5; // Jobs per page
function getPaginatedJobs(page = 1) {
    fetch(`http://localhost:3000/alljobs?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            let jobCard = document.querySelector('.card-container');
            jobCard.innerHTML = ''; // Clear previous jobs
            jobCard.style.paddingTop = '70px';
            
            data["jobs"].forEach(element => {
                // Create the outer card div element
                const card = document.createElement('div');
                card.classList.add('w-2/3', 'm-4', 'p-4', 'pt-3', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-xl', 'sm:p-8', 'dark:bg-gray-800', 'dark:border-gray-700');

                // Create the company name element
                const companyName = document.createElement('h5');
                companyName.classList.add('mb-2', 'text-xl', 'font-bold', 'text-gray-900', 'dark:text-white');
                companyName.textContent = 'Company: '+ element.companyName;

                // Create the location paragraph element
                const location = document.createElement('p');
                location.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-lg', 'dark:text-gray-400');
                location.textContent = 'Location: '+element.location;

                // Create the position paragraph element
                const position = document.createElement('p');
                position.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-lg', 'dark:text-gray-400');
                position.textContent = 'Position: '+ element.position;

                // Create the salary paragraph element
                const salary = document.createElement('p');
                salary.classList.add('mb-1', 'text-base', 'text-gray-500', 'sm:text-lg', 'dark:text-gray-400');
                salary.textContent = 'Salary: '+ element.salary;

                // Append all the created elements to the card div
                card.appendChild(companyName);
                card.appendChild(location);
                card.appendChild(position);
                card.appendChild(salary);

                jobCard.appendChild(card);

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
            getPaginatedJobs(i); // Load jobs for the selected page
        });

        paginationWrapper.appendChild(button);
    }

    paginationContainer.appendChild(paginationWrapper);
}



getPaginatedJobs(currentPage);

// retrieve one job

// add a new job

// remove a job ( you can only remove a job you posted)

// edit a job ( can only edit a job that you added)