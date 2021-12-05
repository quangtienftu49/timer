const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (0 < Number(key) < 9) { //bug: user inputs keys => no message or beep showed
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07')
    }, key*1000);
  } else if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});
