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

        });
    });
}

// Empty filters variable that tracks elements that change for search

let filters = {};

function updateFilters() {

    let changedElement = d3.selectAll(this);

    let elementValues = changedElement.property("value");
    console.log(elementValues);

    let filteredId = changedElement.attr("id");
    console.log(filteredId);

    if (elementValues) {

        filters[filteredId] = elementValues;
    }
    
    else {

        delete filters[filteredId];
    }

    filterTable();
}

function filterTable() {

    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {

        filteredData = filteredData.filter(row => row[key] === value);

    });

buildTable(filteredData);

}

d3.selectAll("input").on("change", updateFilters);

buildTable(tableData);