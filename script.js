//javascript for website functionality
console.log("hey lmao")

var userName = localStorage.getItem(userName);
var picDate = $("#picDate").val()

if (picDate === null) {
    $("#today").valueAsDate = new Date();
}

$("#picSearchBtn").on("click", function () {

})

$(document).on('keypress', function (e) {
    if (userName = null) {
        if (e.which == 13) {
            alert('You pressed enter!');
        }

        $("#9amText").each(function () {
            var value = $(this).val();
            localStorage.setItem(userName, value);
        });
    }
})