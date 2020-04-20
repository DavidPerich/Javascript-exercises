todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

$(function () {
  var todosTemplate = Handlebars.compile($("#todos").html());
  var modalTemplate = Handlebars.compile($("#modalScript").html());
  var contextMenuTemplate = Handlebars.compile($("#contextMenuScript").html());

  var $todos = $("#todoList").append(todosTemplate({todos: todo_items}));
  var $modal = $(modalTemplate({})).appendTo($("body")).hide();
  var $contextMenu = $(contextMenuTemplate({})).appendTo($("body")).hide();

  $("#todoList ul").on("contextmenu", function(e) {
    e.preventDefault();
    var $todo = $(e.target);
    var x = e.clientX;
        y = e.clientY;
        $contextMenu.offset({top: y, left: x}).show();

    $("#contextMenu ul").on("click", "#remove", function(e) {
      $modal.fadeIn();

      $("button").on("click", function (e) {
        if ($(this).attr("id") === "yesButton") {
          $todos.find("[data-id=" + $todo.data("id") + "]").remove();
        }

      $modal.fadeOut();
      $contextMenu.fadeOut();
      });
    });
  });

});



  // on clicking the remove
    // get id of clicked todo
  // add a modal to the div

  // add event listener for click #yes
    // if clicked
    // delelete  current todo from list

  // then for no and when yes has finished.
    // remove event listener for yes click
    // remove modal from page
