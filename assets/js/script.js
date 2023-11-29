console.log('I am connected :)');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function () {
    alert('Save Btn clicked.');
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd, MMMM DD, YYYY hh:mm a'));

  var hour = dayjs();
  $('#currentHour').text(hour.hour()); //hour method gets current hour
  var hourNow = hour.hour();
  console.log(hourNow); //this gives me hour as number yay!

  var timeBlocks = document.querySelectorAll('.time-block');

  // Iterate over each element
  timeBlocks.forEach(function (element) {
    // Get the id attribute of the current element
    var idAttribute = element.id;

    // Use a regular expression to match and extract numbers
    var numbers = idAttribute.match(/\d+/);
    console.log(numbers); //this is an array

    // Check if numbers were found
    if (numbers) {
      // Convert the matched string to a number
      var extractedNumber = parseInt(numbers[0]);

      // Use the extracted number as needed
      console.log(extractedNumber);
      console.log('this is the hour now' + hourNow);
      // Add class based on the condition
      if (extractedNumber > hourNow) {
        element.classList.add('future');
      } else if (extractedNumber < hourNow) {
        element.classList.add('past');
      } else if (extractedNumber === hourNow) element.classList.add('present');
    }
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

//NOTE original timeblocks ----------------------------------------
// Get all elements with class "time-block"
// var timeBlocks = document.querySelectorAll('.time-block');
// // var timeBlocks = $('.time-block');

// // Iterate over each element
// timeBlocks.forEach(function (element) {
//   // Get the id attribute of the current element
//   var idAttribute = element.id;

//   // Use a regular expression to match and extract numbers
//   var numbers = idAttribute.match(/\d+/);

//   // Check if numbers were found
//   if (numbers) {
//     // Convert the matched string to a number
//     var extractedNumber = parseInt(numbers[0]);

//     // Use the extracted number as needed
//     console.log(extractedNumber);
//     console.log('this is the hour now' + hourNow);
//     // Example: Add a class based on the condition
//     if (extractedNumber > hourNow) {
//       element.classList.add('future');
//     } else if (extractedNumber < hourNow) {
//       element.classList.add('past');
//     } else if (extractedNumber === hourNow) element.classList.add('present');
//   }
// });
