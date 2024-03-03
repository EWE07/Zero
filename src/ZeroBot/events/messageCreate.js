const utils = require("../utils/message");
const { prefix } = require("../../../config.json");
const { Events } = require("../structure/Client");

module.exports = {
  name: Events.MessageCreate,
  once: true,
  execute: (client, message) => {
    if (message.author.bot || message.author.webhook) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd)  || client.commands.get(client.aliases.get(cmd));

    if (!command) return
    
    utils.verification(client, command, message, args);
  },
};
