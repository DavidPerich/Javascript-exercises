// Create a makeCounterLogger function that takes a number as an argument and returns a function.

// When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

// var countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
//  countlog(2);
// // 5
// // 4
// // 3
// // 2

// function makeCounterLogger(num) {

//   return function countLog(newNum) {
//     for (; num != newNum; ) {
//       console.log(num)
//       if (newNum < num) {
//         num -= 1;
//       } else {
//         num += 1
//       }
//     }
//   }
// }

// 2 We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.
// PEDAC
// makeList function that returns a new function
//   new function implements a todo list
//     if called with an argument that is not on the list - it adds that argument to the list
//     if called with argument that is on list - it removes it
//     when called without arguments with items in the list it logs the list
//     wen called without arguments and the list is empty then it logs an empty message


// function makeList() {
//   return {
//     todoList: [],
//     todos: function todos(todo) {
//     if (todoList.includes(todo)) {
//       deleteTodo(todo);
//     } else if (todo) {
//       addTodo(todo);
//     } else {
//       logList();
//     }
//   },

//   add: function (todo) {
//     todoList.push(todo)
//     console.log(todo + " has been added")
//   },

//   delete: function(todo) {
//     todoList.splice(todoList.indexOf(todo), 1)
//     console.log(todo + " has been deleted")
//   },

//   list: function() {
//     if (todoList.length === 0) {
//       console.log("The list is empty")
//     } else {
//       todoList.forEach((todo) => console.log(todo))
//     }
//   }
// }



// var list = makeList();
// list();

// // The list is empty.
// list('make breakfast');
// // make breakfast added!
// list('read book');
// // read book added!
// list();
// // make breakfast
// // read book
// list('make breakfast');
// // make breakfast removed!
// list();
// // read book


// 3

// Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

// var lister = makeMultipleLister(13);
// lister();
// // 13
// // 26
// // 39
// // 52
// // 65
// // 78
// // 91

// function makeMultipleLister(num) {
//   return function() {
//     var i;
//     for (i = num; i < 100; i += num) {
//       console.log(i)
//     }
//   };
// }

// 4)

// Write a program that uses two functions, add and subtract, to manipulate a running total value. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. Usage looks like this:

// function total(func, total) {



//   function add(num) {

//   }
// }

// var total = 0;

// function add(num) {
//   console.log(total+= num);
// }

// function subtract(num) {
//   console.log(total -= num);
// }

// add(1);
// // 1
// add(42);
// // 43
// subtract(39);
// // 4
// add(6);
// // 10

// 5) Write a function named later that takes two arguments: a function and an argument for that function. The return value should be a new function that calls the input function with the provided argument, like this:

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();
// // The system is shutting down!

// function later(func, arg) {
//   return function() {
//     func(arg);
//   }
// }

//6 Given the following code:

// function startup() {
//   var status = 'ready';
//   return function() {
//     console.log('The system is ready.');
//   };
// }

// var ready = startup();
// var systemStatus =  // How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?

// console.log(ready, systemStatus)// ?


function makeList() {
  var items = [];
  return  {
    todos: function todos(todo) {
    if (items.includes(todo)) {
      deleteTodo(todo);
    } else if (todo) {
      addTodo(todo);
    } else {
      logList();
    }
  },

    add: function (todo) {
      items.push(todo)
      console.log(todo + " has been added")
    },

    remove: function(todo) {
      items.splice(items.indexOf(todo), 1)
      console.log(todo + " has been deleted")
    },

    list: function() {
      if (items.length === 0) {
        console.log("The list is empty")
      } else {
        items.forEach((todo) => console.log(todo))
      }
    },
  }
}

var list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn

console.log(list.items)