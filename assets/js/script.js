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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM DD, YYYY hh:mm a'));

var hour = dayjs();
var currentHour = $('#currentHour').text(hour.hour()); //hour method gets current hour
var hour2 = hour.hour();
console.log(hour2); //this gives me hour as number yay!

console.log(stringCurrentHour);

var scheduledHour = $('.time-block');

if (scheduledHour > 13) {
  $('.time-block').addClass('future');
} else if (scheduledHour < 13) {
  $('.time-block').addClass('past');
} else if (scheduledHour == 13) {
  $('.time-block').addClass('present');
}

// console.log(idHour);
// if (idHour && parseInt(idHour.textContent) > 13) {
//   // Add the 'future' class to elements with class 'time-block'
//   $('.time-block').addClass('future');
// }
// if (idHour > 13) {
//   $('.time-block').addClass('future');
// }
