const process = require('process'); 

process.on('warning', (warning) => { 
   console.warn(`ZeroNode: [${warning.name}] 
   (${warning.stack}) ${warning.message}`);
});

process.on('exit', (code) => { 
   return console.log(`ZeroNode: Process to exit with code ${code}`); 
});

let Reset = "\x1b[0m";

let FgBlack = "\x1b[30m";
let FgRed = "\x1b[31m";
let FgGreen = "\x1b[32m";
let FgYellow = "\x1b[33m";
let FgBlue = "\x1b[34m";
let FgMagenta = "\x1b[35m";
let FgCyan = "\x1b[36m";
let FgWhite = "\x1b[37m";
let FgGray = "\x1b[90m";

function color(color, message) {
   let Color = color;

   switch (color) {
      case "black":
         Color = FgBlack;
         break;
      case "red":
         Color = FgRed;
         break;
      case "green":
         Color = FgGreen;
         break;
      case "yellow":
         Color = FgYellow;
         break;
      case "blue":
         Color = FgBlue;
         break;
      case "magenta":
         Color = FgMagenta;
         break;
      case "cyan":
         Color = FgCyan;
         break;
      case "white":
         Color = FgWhite;
         break;
      case "gray":
         Color = FgGray;
         break;

      default:
         Color = FgWhite;
         break;
   }
   return Color + message + Reset;
}

module.exports = {
   color
};