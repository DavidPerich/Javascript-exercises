// The following code demonstrates the Pomodoro technique. Although it seems to work in principle, it never prints the minute count from line 11. What is wrong?

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0;  // this was var minutes = 0 - so I think the declaration gets hoisted to the top of this scope, but the assignment never happens. So the while loop is checing (undefined < 25) which I assume returns false and so it never runs.
  pomodoro();
}

pomodoro();