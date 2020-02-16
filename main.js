document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    googleCalendarApiKey: '<YOUR API KEY>',
    eventSources: [
      {
        googleCalendarId: 'abcd1234@group.calendar.google.com'
      },
    ]
  });

  calendar.render();
});