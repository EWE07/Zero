const utils = require("../utils/message");
const { prefix } = require("../../../config.json");

module.exports = (client, message) => {

  if (message.author.bot || message.author.webhook) return;
  if (message.channel.type === 'dm') return 

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;

  utils.verification(client, command, message, args);
};
