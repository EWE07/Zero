const process = require('process'); 

process.on('warning', (warning) => { 
   console.warn(`ZeroNode: [${warning.name}] 
   (${warning.stack}) ${warning.message}`);
});
