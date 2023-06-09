$(function () {
  const saveButton = document.getElementById('saveButton');
  const timeDisplayEl = $('#time-display');

  displayTime();

  $(".saveBtn").click(function () {
    var timeBlock = $(this).parent().attr('id')
    var taskDisplay = $(this).siblings('.description').val()
    localStorage.setItem(timeBlock, taskDisplay)
  });

  for (var i = 9; i < 18; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i))
  }

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  var currentHour = dayjs().hour();
  currentHour = 14;
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1])
    if (blockHour < currentHour) {
      $(this).addClass('past')

    } else if (blockHour === currentHour) {
      $(this).addClass('present')

    } else {
      $(this).addClass('future')
    }
  });
});