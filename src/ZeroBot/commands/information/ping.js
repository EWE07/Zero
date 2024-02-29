module.exports = {
  name: "ping",
  run: ({ message }) => {
    message.channel.send("Pong!");
  },
};