// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

// 1) Looping through that data and console.log each object:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// 2) Using D3 to append one talbe row for each object:
// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");

//     Object.entries(ufoReport).forEach(function([key, value]) {
//         console.log(key, value)
//     });
// });

//  3) Use D3 to append 1 cell per weather report value (date/time, city, state, country, shape, comment:
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value)

        var cell = tbody.append("td");
    });
});