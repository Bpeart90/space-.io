//javascript for website functionality

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
}
//calendar functionality; gets today's date on page load
var today = getToday();
function getToday() {
    today = moment().format();
    picDate = today.slice(0, 10);
    $("#picDate").val(picDate);
    $("#picDate").attr("max", picDate);
    console.log(picDate);
}
//image search; today is set as max date
$("#picSearchBtn").on("click", function () {
    picDate = $("#picDate").val();
    console.log(picDate);

    getPicture(picDate);
});

function getPicture() {
    var apiKey = "GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI";
    var spacePicture =
        "https://api.nasa.gov/planetary/apod?api_key=" +
        apiKey +
        "&date=" +
        picDate;

    var key = 'GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI'
    var today = moment().format();
    var date = today.slice(0, 10)
    var queryURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + date + "&end_date=" + date + "&api_key=" + key;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            for (const key in response.near_earth_objects) {
                if (response.near_earth_objects.hasOwnProperty(key)) {
                    const element = response.near_earth_objects[key];
                    for (var i = 0; i < element.length; i++) {
                        if (element[i].is_potentially_hazardous_asteroid = true) {
                            var asteroidName = element[i].name
                            console.log(asteroidName)
                            break;
                        }
                    }
                }
            }
        })
    $.ajax({
        url: spacePicture,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        $("#spacePicture").attr("src", response.hdurl);
        $("#spacePictureTitle").html(response.title);
        $("#spacePictureCopyright").html("By: " + response.copyright);
    });
}
