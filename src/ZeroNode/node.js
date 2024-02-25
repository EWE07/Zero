const process = require('process'); 

process.on('warning', (warning) => { 
   console.warn(`ZeroNode: [${warning.name}] 
   (${warning.stack}) ${warning.message}`);
});

process.on('exit', (code) => { 
   return console.log(`ZeroNode: Process to exit with code ${code}`); 
});