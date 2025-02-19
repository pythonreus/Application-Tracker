// retrieve all jobs
function getAllJobs() {
    fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            let jobCard = document.querySelector('.card-container');
            jobCard.style.paddingTop = '70px';
            
            data.forEach(element => {
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
        })
        .catch(error => {
            console.error('Error in GET request:', error);  // Catch errors
        });

}

getAllJobs();

// retrieve one job

// add a new job

// remove a job ( you can only remove a job you posted)

// edit a job ( can only edit a job that you added)