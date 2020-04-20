$(function () {
  var templates = [];
  var photos;


  $("script[type='text/x-handlebars']").each(function (script) {
        var tmpl = $(this);
        templates[tmpl.attr("id")] = Handlebars.compile(tmpl.html());
  });

  $("[data-type=partial]").each(function(script) {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  $.ajax({
    url:"/photos",
    type: "GET",
    dataType: "json",

  })

  .done (function (json) {
    photos = json;
    renderPhotos();
    var currentPhotoID = photos[0].id;
    renderPhotoInformation(currentPhotoID);
    getCommentsFor(currentPhotoID);
    slideShow.init();
    actions.init()
  });


  function renderPhotos() {
    $("#slides").html(templates.photos({photos: photos}))
  }

  function renderPhotoInformation(idx) {
    $("[name=photo_id]").val(idx)
    var photo = photos.filter(function (item) {
      return item.id === idx
    });

    $("section > header").html(templates.photo_information(photo[0]));
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + idx,

      type: "GET",
      dataType: "json",
    })

    .done(function (json) {
      var comments = json;
      $("#comments > ul").html(templates.photo_comments({comments: comments}));
    });
  }

  var actions = {
    bind: function() {
        $('section > header').on('click', '.actions a', function(e) {
        e.preventDefault();
        var $e = $(this);
        var photo_index = $("#slides > figure").filter(":visible").index();
        var current_photo = photos[photo_index];

        $.ajax({
          url: $e.attr('href'),
          type: 'post',
          data: 'photo_id=' + $e.attr('data-id'),
        })


        .done(function(json) {
          $e.text(function(i, txt) {
            return txt.replace(/\d+/, json.total);
          });
          current_photo[$e.attr('data-property')] = json.total;
        });
      });

     $("form").on("submit", function (e) {
        e.preventDefault();
        var $f = $(this);

        $.ajax({
          url: "comments/new",
          type: "POST",
          data: $f.serialize(),
        })

        .done(function(json) {
          $("#comments > ul").append(templates.photo_comment(json));
          $f[0].reset(); // `HTMLFormElement.reset()` restores a form's default values.
        })
     })
    },

    init: function() {
      this.bind()
    },
  }

  var slideShow = {
    $el: $("#slideshow"),
    duration: 500,

    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("figure").filter(":visible");
      var $prev = $current.prev("figure")

      if(!$prev.length) {
        $prev = this.$el.find("figure").last();
      }

      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      getCommentsFor($prev.data("id"))
      renderPhotoInformation($prev.data("id"));

    },

    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("#figure").filter(":visible");
      var $next = $current.next("figure");


      if(!$next.length) {
        $next = this.$el.find("figure").first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      getCommentsFor($next.data("id"))
      renderPhotoInformation($next.data("id"));
    },

    bind: function() {
      this.$el.find("a.prev").on("click", this.prevSlide.bind(this));
      this.$el.find("a.next").on("click", this.nextSlide.bind(this));

    },

    init: function() {
      this.bind()
    },
  }



});

