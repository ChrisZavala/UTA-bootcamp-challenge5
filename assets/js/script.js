// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// TODO: Add code to display the current date in the header of the page.
//https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js to be able to use moment.js to parse, validate, manipulte and display dates
//This sets the time in the appr. format at the top of the header.
  //to display the date/time.  
  var currentDay = $("#currentDay");
  currentDay.text (moment().format("dddd, MMM Do YYYY"));

  //set variable to check current hour
  var currentTime = moment().hour();
//checks the .time-block class in the html
$(".time-block").each(function() {

  
  var blockHour = $(this).attr("id").split("-")[1];
  //setting my local storage to the webpage and then sets it to the blockHour
  var text = localStorage.getItem(blockHour);

  var textBox = $(this).find(".description");
    textBox.val(text);
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    if (blockHour < currentTime) {
      $(this).find(".description").addClass("past");
    } else if (blockHour == currentTime) {
      $(this).find(".description").addClass("present");
    } else {
      $(this).find(".description").addClass("future");
    }
  });
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Need to set up my event listener. Follow this instruction: 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $(".saveBtn").on("click", function(event) {
    //here is where I am using the 'this' hint and using the key and value in the local storage and writing it to the
    //id='hour' to traverse the DOM!

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var key = $(this).parent().attr("id").split("-")[1];
    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key, value);
    console.log(event);
  });

  
