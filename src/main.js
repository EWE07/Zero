const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot Running');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.content === '!ping') return message.channel.send('Pong!');
});

client.login(process.env.token);
