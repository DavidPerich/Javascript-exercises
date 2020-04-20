$(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val()
    var quantity = $("#quantity").val() || 1

    $("ul").append(`<li>${quantity} ${name}</li>`);

    $(this).get(0).reset();
  });
});