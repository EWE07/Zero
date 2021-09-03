const { ZeroClient } = require('./structure/Client');
let client = new ZeroClient();

client.login();
client.LoadCommands();
client.LoadEvents();