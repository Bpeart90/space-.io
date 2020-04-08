var key = 'GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI';
var queryURL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`

var podURL = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);
    })



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