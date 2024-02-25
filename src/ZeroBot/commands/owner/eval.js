module.exports = {
  name: "eval",
  owner: true,
  run: (client, message, args) => {
    message.channel.send(`${args}`);
  },
};
