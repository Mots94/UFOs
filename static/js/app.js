// Import data from the data.js file

const tableData = data;

// Reference the HTML table using d3

let tbody = d3.select("tbody");

// Start a function to iterate over data and add it to a table

function buildTable(data) {

    tbody.html("");

    data.forEach((dataRow) => {

        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td");

            cell.text(val);

            }
        );
    });
}