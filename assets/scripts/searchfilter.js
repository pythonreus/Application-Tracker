class SearchFilter {
    constructor() {}

    // Filter by salary
    salaryFilter(start_range, end_range) {
        return this.fetchData({ salary_start: start_range, salary_end: end_range });
    }

    // Filter by location
    locationFilter(location) {
        return this.fetchData({ location: location });
    }

    // Filter by status
    statusFilter(status) {
        return this.fetchData({ status: status });
    }

    // Filter by progress
    progressFilter(progress) {
        return this.fetchData({ progress: progress });
    }

    // Filter by position
    positionFilter(position) {
        return this.fetchData({ position: position });
    }

    // Method to fetch the data with default values for each parameter
    async fetchData({
        location = "N/A",
        status = "N/A",
        progress = "N/A",
        position = "N/A",
        salary_start = "N/A",
        salary_end = "N/A"
    }) {
        const data = {
            location,
            status,
            progress,
            position,
            salary_start,
            salary_end
        };
    
        // Convert the object to a JSON string
        const jsonData = JSON.stringify(data);
        
        console.log(jsonData); // Logs the JSON string
       
        let response = await fetch('http://localhost:3000/search-filter', {
            method: "POST",  
            headers: {
                "Content-Type": "application/json"  // Tell the server we're sending JSON
            },
            body: jsonData  
        });

        let result = await response.json(); // Parse the response
        console.log("API Response:", result);  


       
    }
}

// Example usage
const searchFilter = new SearchFilter();

// Using filter methods
searchFilter.fetchData({ salary_start: "50000", salary_end: "100000" });
// console.log(searchFilter.locationFilter("New York"));
// console.log(searchFilter.statusFilter("Active"));
// console.log(searchFilter.progressFilter("In Progress"));
// console.log(searchFilter.positionFilter("Developer"));

// // If no parameters are provided, defaults will be used
// console.log(searchFilter.salaryFilter("60000", "80000"));
// console.log(searchFilter.locationFilter("San Francisco"));
