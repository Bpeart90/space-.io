var key = 'GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI';
var queryURL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`

var podURL = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);

        // console.log(Object.keys(response));



        // const element = response["478"][key];
        console.log(response.sol_keys.length);

        for (var i = 0; i < response.sol_keys.length; i++) {

            let current_mars = response[response.sol_keys[i]]

            var tRow = $("<tr>");
            var degree_value = current_mars.AT.av.toString();
            var degreeTd = $("<td>").text(degree_value);
            var seasonTd = $("<td>").text(current_mars.Season);
            var average_value = current_mars.HWS.av.toString();
            var averageTd = $("<td>").text(average_value);
            var wind_val = current_mars.WD.most_common.compass_degrees.toString();
            var windTd = $("<td>").text(wind_val);




            tRow.append(degreeTd);
            tRow.append(seasonTd);
            tRow.append(averageTd)
            tRow.append(windTd);
        }



        $("tbody").append(tRow);



    });

var createRow = function (response) {
    var tRow = $("<tr>");

    var degreeTd = $("<td>").text(reponse["478"].element.AT);
    var seasonTd = $("<td>").text(reponse["478"].element.Season);
    var averageTd = $("<td>").text(response["478"].element.HWS);
    var windTd = $("<td>").text(response["478"].element.WD);

    tRow.append(degreeTd, seasonTd, averageTd, windTd);
    $("tbody").append(tRow);
};

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
            arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}


$.ajax({
    url: podURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);
    })