console.log('I am connected :)');
var headerEl = $('#currentDay');

$(function () {
  getLocalStorage();

  $('.saveBtn').on('click', setLocalStorage);

  function displayTime() {
    var currentDay = dayjs().format('dddd, MMMM DD, YYYY hh:mm:ss a');
    headerEl.text(currentDay);
  }

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
  //fix getLocalStorage to use unique id of each time block
  //got help from UC Berkley AI for using 'this' in local storage
  function getLocalStorage() {
    $('.time-block').each(function () {
      const timeBlockId = $(this).attr('id');
      const storedDescription = localStorage.getItem(timeBlockId);
      $(this).find('.description').val(storedDescription);
    });
  }

  function setLocalStorage() {
    const timeBlockId = $(this).closest('.time-block').attr('id');
    const description = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, description);
  }

  displayTime();
  //setinterval keeps time changing every second for seconds
  setInterval(displayTime, 1000);
});
