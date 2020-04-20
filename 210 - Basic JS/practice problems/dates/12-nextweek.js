// Create a new variable named nextWeek that is a new Date copied from the today object. Compare nextWeek and today, and log the results. Are they equal? Why or why not?

today = new Date()
nextWeek = new Date(today.getTime());
console.log(today === nextWeek)
console.log(today.toDateString() === nextWeek.toDateString())


nextWeek.setDate(today.getDate() + 7)

console.log(today === nextWeek)
console.log(today.toDateString() === nextWeek.toDateString())
console