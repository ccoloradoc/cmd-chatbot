const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher');

rl.setPrompt('>');
rl.prompt();

rl.on('line', (input) => {
  matcher(input, data => {
    switch(data.intent) {
      case 'Hello':
        console.log(`${data.entities.greeting} mate!!!`)
        break;
      case 'Bye':
        console.log("Have a nice day!");
        process.exit(0);
        break;
      default: {
        console.log("I do not know what you mean :(");
      }
    }
    rl.prompt();
  });
})
