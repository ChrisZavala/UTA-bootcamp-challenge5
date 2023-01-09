// Wrap all code that interacts with the DOM in a call to jQuery to ensure that 
$(document).ready(function (){

var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do YYYY"));

function timeCheck() {


  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var blockHour = $(this).attr("id").split("-")[1];
    var text = localStorage.getItem(blockHour);

    var textBox = $(this).find(".description");
    textBox.val(text);

    if (blockHour < currentTime) {
      $(this).find(".description").removeClass("present");
      $(this).find(".description").removeClass("future");
      $(this).find(".description").addClass("past");
    } else if (blockHour == currentTime) {
      $(this).find(".description").removeClass("past");
      $(this).find(".description").removeClass("future");
      $(this).find(".description").addClass("present");
    } else {
      $(this).find(".description").removeClass("past");
      $(this).find(".description").removeClass("present");
      $(this).find(".description").addClass("future");

    }

  })
}

//Need to set up my event listener. Follow this instruction: 
$(".saveBtn").on("click", function (event) {
  var key = $(this).parent().attr("id").split("-")[1];
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
  console.log(event);
});

timeCheck()
//this is setting up my interval to make sure that my page is checking every 45 seconds 
//to make sure the page refreshes that way the user does not have to. 
setInterval(timeCheck, 45000)

});