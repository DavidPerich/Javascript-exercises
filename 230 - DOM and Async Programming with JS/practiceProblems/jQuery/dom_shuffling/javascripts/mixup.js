$(function () {

  (function fixHeader() {
    var h1 = $("main > h1")
    var header = $("body > header")
    header.prependTo(document.body);
    h1.prependTo(header);
  })();

  (function fixFigures() {
    var $figures = $("figure"),
        $img = $figures.eq(0).find("img").remove();

    $figures.appendTo("article");
    $figures.find("img").insertBefore($figures.eq(0).find("figcaption"));
    $figures.eq(-1).find("figcaption").before($img);
  })();

});