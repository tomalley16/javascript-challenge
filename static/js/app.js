// from data.js
var tableData = data;
// tableData.filter()

var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

// 1) Looping through that data and console.log each object:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// 2) Using D3 to append one table row for each object:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value)
    });
});

//  3) Using D3 to append 1 cell per weather report value (date/time, city, state, country, shape, comment:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value)

        var cell = tbody.append("td");
    });
});

// //  4) Using D3 to update each cell's text with the ufo data values:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value)

        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Filter data by date

let dateBtn = d3.select("#filter-btn");
let form = d3.select("form");

dateBtn.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputDate = inputElement.property("value");
    let filteredDate = tableData.filter(function(date){
        return date.datetime == inputDate
    });
    
    d3.selectAll('td').remove();
    filteredDate.forEach(function(date){
        console.log(date)
    let dateBody = tbody.append('tr');
    Object.entries(date).forEach(function([key, value]){
        dateBody.append('td').text(value)
        })   
    })
}

