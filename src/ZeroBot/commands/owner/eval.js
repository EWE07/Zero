module.exports = {
  name: "eval",
  onwer: true,
  run: ({ message, args }) => {
    message.channel.send(`\`\`\` ${eval(args)} \`\`\``);
  },
};
