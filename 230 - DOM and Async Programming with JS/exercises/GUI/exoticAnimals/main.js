$(function () {
  var App = {
    init: function() {
      $(".animal").hover(this.startTimer.bind(this), this.stopTimer.bind(this))
    },

    startTimer: function(e) {
      this.timer = setTimeout(function () {
        this.displayCaption(e)
      }.bind(this), 1000)
    },

    stopTimer: function(e) {
      clearTimeout(this.timer);
      $(e.target).find("figcaption").removeClass("display");
    },

    displayCaption: function(e) {
      // debugger;
      $(e.target).find("figcaption").addClass("display");
    }

  }

  App.init()
})
