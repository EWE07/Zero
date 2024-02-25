const { owner } = require("../../../config.json");

function verification(client, command, message, args) {
  if (command.owner) {
    if (message.author.id !== owner) return;
  }
  if (command) command.run(client, message, args);
}

module.exports = {
  verification,
};
