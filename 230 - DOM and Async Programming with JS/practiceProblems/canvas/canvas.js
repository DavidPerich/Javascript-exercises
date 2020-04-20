$(function () {
  var $canvas = $(".canvas");

  function createObject(data) {
    var $div = $("<div>", {
      data: data,
      "class": data["shape-type"],
      css: {
        left: +data.startX,
        top: +data.startY,
      }
    });
    return  $div;
  }

  function getFormObject($f) {
    var o = {};

    $f.serializeArray().forEach(function(input) {
      o[input.name] = input.value;
    });

    return o;
  }

  function animateElement($e) {
    var data = $e.data();

    resetElement($e, data);
    $e.animate({
      left: +data.endX,
      top: +data.endY
    }, +data.duration);
  }

  function resetElement($e, data) {
    $e.css({
      left: +data.startX,
      top: +data.startY
    });
  }

  function stopAnimations() {
    $canvas.find("div").stop();
  }

  $("form").submit(function (event) {
    event.preventDefault();
    var data = getFormObject($(this));
    $div = createObject(data);
    $canvas.append($div);
  });

  $("#start").click(function () {
    $(".canvas div").each(function() {
      animateElement($(this));
    });
  });


  $("#stop").click(function () {
    $(".canvas div").each(function() {
      stopAnimations($(this));
    });
  });
});