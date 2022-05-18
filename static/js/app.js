// Import data from the data.js file

const tableData = data;

// Reference the HTML table using d3

let tbody = d3.select("tbody");

// Start a function to iterate over data and add it to a table

function buildTable(data) {

    // Clear out existing data
    
    tbody.html("");

    // Loop through each object in data
    // and append a row and cells for each value

    data.forEach((dataRow) => {

        // Append row to the table body

        let row = tbody.append("tr");

        // Loop through each field in the dataRow and
        // add each value as a table cell

        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td");

            cell.text(val);

            }
        );
    });
}

function handleClick() {

    // Grab the datetime value from the filter

    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    // If a date is set, filter data on date

    if (date) {

        // Apply filter to table if rows where
        // 'datetime' value matches filter value

        filteredData = filteredData.filter(row => row.datetime === date);
    
    };

    buildTable(filteredData);

    // else return original set of data

}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);