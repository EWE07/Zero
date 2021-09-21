const { ZeroClient } = require("./structure/Client");
const client = new ZeroClient();

client.login();
client.LoadCommands();
client.LoadEvents();
