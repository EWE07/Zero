const { Events } = require("../structure/Client");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute: (client) => {
    console.log(`Zero: Bot Ready! I'm logged in as ${client.user.username}!`);
  },
};
