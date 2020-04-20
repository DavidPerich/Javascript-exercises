$(function () {
  var $blinds = $("[id^=blind]");
  var speed = 250;
  var delay = 1500;

  function animateBlinds() {
    $blinds.each(function(idx) {
      var $blind = $blinds.eq(idx);

      $blind.delay(delay * idx).animate({
        height: 0,
        top: "+=" + $blind.height()
      }, speed);
    });
  }

  $("#reset").click(function (e) {
    e.preventDefault()
    $blinds.finish()
    $blinds.removeAttr("style");
    animateBlinds();
  });

  animateBlinds();
});