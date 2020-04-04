//javascript for website functionality

var userName = localStorage.getItem("userName");
console.log(userName)

if (userName === null) {
    userName = prompt("Hello! What is your name?")
    var id = "userName"
    var value = userName
    localStorage.setItem(id, value);
} else (userName !== null); {
    alert("Hello, " + userName + "!");
}
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
