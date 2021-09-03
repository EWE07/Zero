module.exports = {
	name: "eval",
	onwer: true,
	run: (client, message, args) => {
     message.channel.send(`\`\`\` ${eval(args)} \`\`\``)
	}
}