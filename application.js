$(function() {
  var lastClickAt = 0;
  var fadeDelay = 200;
  var clickDelay = 500;

  updateCounters();

  $('#green').click(function() { increment('green'); });
  $('#yellow').click(function() { increment('yellow'); });
  $('#red').click(function() { increment('red'); });
  $('#reset').click(function() { resetCounters(); });

  function increment(color) {
    var now = new Date().getTime();
    if (now - lastClickAt < clickDelay) {
      return;
    }
    lastClickAt = now;

    setCount(color, getCount(color) + 1);
    updateCounters();
    flash();
  }

  function getCount(color) {
    // Quick hack to convert from string (or null) to number
    return localStorage.getItem(color) - 0;
  }

  function setCount(color, count) {
    localStorage.setItem(color, count);
  }

  function flash() {
    $('table').css('opacity', '0');
    $('table').fadeTo(fadeDelay, 1);
  }

  function resetCounters() {
    setCount('green', 0);
    setCount('yellow', 0);
    setCount('red', 0);
    updateCounters();
  }

  function updateCounters() {
    $('#results-green').text(getCount('green'));
    $('#results-yellow').text(getCount('yellow'));
    $('#results-red').text(getCount('red'));
  }
});
