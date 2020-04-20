var App = {
  init: function() {
    document.addEventListener('selectionchange', this.toggleButtons.bind(this));
    $(".bold").on("click", this.bold.bind(this));
    $(".italicize").on("click", this.italicize.bind(this));
    $(".underline").on("click", this.underline.bind(this));
    $(".strikethrough").on("click", this.strikethrough.bind(this));
    $(".link").on("click", this.toggleLink.bind(this));
    $(".ul").on("click", this.insertUnorderedList.bind(this));
    $(".ol").on("click", this.insertOrderedList.bind(this));
    $(".al_left").on("click", this.justifyLeft.bind(this));
    $(".al_right").on("click", this.justifyRight.bind(this));
    $(".al_center").on("click", this.justifyCenter.bind(this));
    $(".al_justify").on("click", this.justifyFull.bind(this));
    $(".cut").on("click", this.cut.bind(this));
    $(".copy").on("click", this.copy.bind(this));
  },

  bold: function(e) {
    document.execCommand("bold");
  },


  italicize: function(e) {
    document.execCommand("italic");
  },


  underline: function(e) {
    document.execCommand("underline");
  },


  strikethrough: function(e) {
    document.execCommand("strikethrough");
  },


  toggleLink: function(e) {
    var selection = document.getSelection().toString();
    var url;
    if (!selection) return;

    url = prompt('Enter the URL to link to: ');

    if (!url) return;

    document.execCommand("createLink", url)
  },


  insertUnorderedList: function(e) {
    document.execCommand("insertUnorderedList");
  },


  insertOrderedList: function(e) {
    document.execCommand("insertOrderedList");
  },


  justifyLeft: function(e) {
    document.execCommand("justifyLeft");
  },


  justifyRight: function(e) {
    document.execCommand("justifyRight");
  },

  justifyCenter: function(e) {
    document.execCommand("justifyCenter");
  },

  justifyFull: function(e) {
    document.execCommand("justifyFull");
  },

  cut: function(e) {
    document.execCommand("cut");
  },

  copy: function(e) {
    document.execCommand("copy");
  },

  toggleButtons: function(e) {
    this.queryCommandState();
  },

  queryCommandState: function () {
    let isBold = document.queryCommandState("bold");
    let isItalicize = document.queryCommandState("italic");
    let isUnderline = document.queryCommandState("underline");
    let isStrikethrough = document.queryCommandState("strikethrough");
    let isHyperLink = document.queryCommandState("createLink");

    let isUnorderedListl = document.queryCommandState("insertUnorderedList");
    let isOrderedList = document.queryCommandState("insertOrderedList");
    let isAlignLeft = document.queryCommandState("justifyLeft");
    let isAlignRight = document.queryCommandState("justifyRight");
    let isAlignCenter = document.queryCommandState("justifyCenter");
    let isAlignJustify = document.queryCommandState("justifyFull");

    $(".bold").toggleClass("pushed", isBold);
    $(".italicize").toggleClass("pushed", isItalicize);
    $(".underline").toggleClass("pushed", isUnderline);
    $(".strikethrough").toggleClass("pushed", isStrikethrough);
    $(".link").toggleClass("pushed", isHyperLink);

    $(".ul").toggleClass("pushed", isUnorderedListl);
    $(".ol").toggleClass("pushed", isOrderedList);
    $(".al_left").toggleClass("pushed", isAlignLeft);
    $(".al_right").toggleClass("pushed", isAlignRight);
    $(".al_center").toggleClass("pushed", isAlignCenter);
    $(".al_justify").toggleClass("pushed", isAlignJustify);

  }
}

App.init()