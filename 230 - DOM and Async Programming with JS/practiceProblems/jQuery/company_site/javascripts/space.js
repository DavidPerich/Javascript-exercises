$(function () {
  $("#team li > a").click(function (event) {
    event.preventDefault();
    var $e = $(this);


    $(this).siblings(".modal").css({
      top: $(window).scrollTop() + 30
    });

    $(this).siblings("div").fadeIn(500);
  });

  $(".close, .modal-layer").click(function (event){
    event.preventDefault();
    $(".modal-layer, .modal").filter(":visible").fadeOut(400);
  });
});