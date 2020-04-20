todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

$(function () {
  var todosTemplate = Handlebars.compile($("#todos").html());
  var modalTemplate = Handlebars.compile($("#modal").html());
  var $todos = $("#todoList").append(todosTemplate({todos: todo_items}));




  $("ul").on("click", "#remove", function(e) {

    $("body").append(modalTemplate({}))
    var $todo = $(this).parent();

    $("button").on("click", function (e) {
      if ($(this).attr("id") === "yesButton" || "") {
        $todos.find("[data-id=" + $todo.data("id") + "]").remove();
      }

    });
  });


});
