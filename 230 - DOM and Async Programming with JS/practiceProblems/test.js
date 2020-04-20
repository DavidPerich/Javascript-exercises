function delayLog() {

  for (let num = 0; num <= 10; num += 1 )
    setTimeout(function() {
      console.log(num)

    }, num * 1000)
}

delayLog()