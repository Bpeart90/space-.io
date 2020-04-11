var key = "GyVgshN3v3SVDt3X0WG5iO6kaaDcbLm5HGCbZOWI";
function displayData() {
  var startDate = $("#startDate").val();
  var endDate = $("#endDate").val();
  var queryURL =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
    startDate +
    "&end_date=" +
    endDate +
    "&api_key=" +
    key;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    $(".is-invisible").removeClass("is-invisible");
    for (const key in response.near_earth_objects) {
      if (response.near_earth_objects.hasOwnProperty(key)) {
        const element = response.near_earth_objects[key];
        for (var i = 0; i < element.length; i++) {
          var tRow = $("<tr>");

          var titleTd = $("<td>").text(element[i].name);
          var dateTd = $("<td>").text(
            element[i].close_approach_data[0].close_approach_date
          );
          if (element[i].is_potentially_hazardous_asteroid === true) {
            var fatalTd = $("<td>").text("Yes!");
          } else {
            var fatalTd = $("<td>").text("Nope!");
          }

          tRow.append(titleTd);
          tRow.append(dateTd);
          tRow.append(fatalTd);
          $("tbody").append(tRow);
        }
      }
    }
  });
}

var createRow = function (response) {
  var tRow = $("<tr>");

  var titleTd = $("<td>").text(reponse.near_earth_objects.element.name);
  var dateTd = $("<td>").text(reponse.near_earth_objects.date);
  var sizTd = $("<td>").text(response.near_earth_objects.absolute_magnitude_h);
  var fatalTd = $("<td>").text(
    response.near_earth_objects.is_potentially_hazardous_astroid
  );

  tRow.append(titleTd, dateTd, sizTd, fatalTd);
  $("tbody").append(tRow);
};

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (reponse) {
//     var results = '#results'

// })

$("#searchBtn").on("click", function () {
  $("table").show();
  displayData();
});

$("#resetBtn").on("click", function () {
  $("table").hide();
  $("table tbody").empty();
});
