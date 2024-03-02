module.exports = {
  name: "ping",
  aliases: ["p"],
  run: (client, message) => {
    message.channel.send("Pong!");
  },
};
