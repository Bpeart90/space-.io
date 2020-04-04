var key = 'GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI'
var startDate = "2005-08-04"
var endDate = "2005-08-07"
var queryURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + startDate + "&end_date=" + endDate + "&api_key=" + key;

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);
        console.log(response.element_count);
        console.log(response.near_earth_objects)
    });

var createRow = function (data) {
    var tRow = $("<tr>");

    var titleTd = $("<td>").text(data.near_earth_objects.name);
    var dateTd = $("<td>").text(data.near_earth_objects.date);
    var sizTd = $("<td>").text(data.near_earth_objects.absolute_magnitude_h);
    var fatalTd = $("<td>").text(data.near_earth_objects.is_potentially_hazardous_astroid);

    tRow.append(titleTd, dateTd, sizTd, fatalTd);
    $("tbody").append(tRow);
};

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (reponse) {
    var results = '#results'

})

