$(function () {
  var currentFrame = $(".current-photo");
  var figure = $("figure");

  setImage(figure, currentFrame);

  $("li").click(function(event) {
    figure.fadeOut(300);
    currentFrame.removeClass("current-photo");
    currentFrame = $(this).children("img");
    currentFrame.addClass("current-photo");

  });
});


function setImage($figure, $currentFrame) {
  $figure.fadeIn(300);
  $figure.children("img").attr("src", $currentFrame.attr("src"));
  $figure.children("figcaption").text($currentFrame.attr("title"));
}