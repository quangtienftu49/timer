const beep = function(num) {
  if (typeof num === 'number' && num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, num*1000)
  }
}

beep(10);