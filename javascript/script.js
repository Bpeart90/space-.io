//javascript for website functionality

//user name gathering
var userName = localStorage.getItem("userName");
console.log(userName);

$("#userNameBtn").on("click", function () {
    console.log("yup");
    userName = $("#userName").val();
    var id = "userName";
    var value = userName;
    localStorage.setItem(id, value);
    loadPage();
});

//welcome message load and number of space count
if (userName !== null) {
    loadPage();
}
function loadPage() {
    console.log(userName);
    $(".is-invisible").removeClass("is-invisible");
    $("#hello").html('<h4 id="welcomeMessage"></h4>');
    $.getJSON("http://api.open-notify.org/astros.json", function (data) {
        var people = data["number"];
        $("#welcomeMessage").text(
            "Welcome, " +
            userName +
            "! There are currently " +
            people +
            " people in space! Wow!"
        );
    });
    marsWeather()
}
//calendar functionality; gets today's date on page load
var today = getToday();
function getToday() {
    today = moment().format();
    picDate = today.slice(0, 10);
    $("#picDate").val(picDate);
    $("#picDate").attr("max", picDate);
    console.log(picDate);
    getPicture()
}
//asteroid data
var key = "GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI";
var now = moment().format();
var date = now.slice(0, 10);
var queryURL =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
    date +
    "&end_date=" +
    date +
    "&api_key=" +
    key;
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    for (const key in response.near_earth_objects) {
        if (response.near_earth_objects.hasOwnProperty(key)) {
            const element = response.near_earth_objects[key];
            for (var i = 0; i < element.length; i++) {
                if ((element[i].is_potentially_hazardous_asteroid = true)) {
                    var asteroidName = element[i].name;
                    var velocity =
                        parseInt(element[i].close_approach_data[0].relative_velocity.miles_per_hour)
                    var asteroidSpeed = velocity.toFixed(0)
                    console.log(asteroidName);
                    console.log(asteroidSpeed);
                    $("#asteroidMessage").text(
                        "The nearest potentially hazardous asteroid is " +
                        asteroidName +
                        ", and it is barreling towards Earth at " +
                        asteroidSpeed +
                        " mph!"
                    );
                    break;
                }
            }
        }
    }
});
//image search; today is set as max date
$("#picSearchBtn").on("click", function () {
    picDate = $("#picDate").val();
    console.log(picDate);
    $(".is-hidden").removeClass("is-hidden");
    getPicture(picDate);
});

function getPicture() {
    var apiKey = "GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI";
    var spacePicture =
        "https://api.nasa.gov/planetary/apod?api_key=" +
        apiKey +
        "&date=" +
        picDate;
    $.ajax({
        url: spacePicture,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        $("#spacePicture").attr("src", response.hdurl);
        $("#spacePictureTitle").html(response.title);
        $("#spacePictureCopyright").html("By: " + response.copyright);
        if (response.copyright === undefined) {
            $("#spacePictureCopyright").html("")
        }
    });
}

function marsWeather() {
    var key = 'GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI';
    var queryURL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            for (var i = 0; i < response.sol_keys.length; i++) {
                let current_mars = response[response.sol_keys[i]]
                var season = current_mars.Season;
                var degree_value = current_mars.AT.av
                var average_value = current_mars.HWS.av
                var temp = degree_value.toFixed(0)
                var wind = average_value.toFixed(0)
                var marsWeather = "It is currently " + temp + " F, and the wind is blowing at " + wind + " m/s on this lovely Martian " + season + " day."
                $("#marsMessage").text(marsWeather)
            }
        })
}