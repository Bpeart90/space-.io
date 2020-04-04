//javascript for website functionality
console.log("hey lmao")

var userName = localStorage.getItem(userName);

//calendar functionality; gets today's date on page load
var today = getToday()
function getToday() {
    today = moment().format();
    picDate = today.slice(0, 10)
    $("#picDate").val(picDate)
    $("#picDate").attr("max", picDate)
    console.log(picDate)
}
//image search; today is set as max date
$("#picSearchBtn").on("click", function () {
    picDate = $("#picDate").val()
    console.log(picDate)
})
