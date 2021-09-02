const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const events = readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (let file of events) {
	try {
		let pull = require(`./events/${file}`);
		pull.event = pull.event || file.replace('.js', '');
		client.on(pull.event, pull.bind(null, client));
	} catch (err) {
		console.log(err);
	}
}

readdirSync('./src/commands').forEach(dir => {
	const commands = readdirSync(`./src/commands/${dir}/`).filter(file =>
		file.endsWith('.js')
	);
	for (let file of commands) {
		let pull = require(`./commands/${dir}/${file}`);
		if (pull.name) {
			client.commands.set(pull.name, pull);
		} else {
			continue;
		}
		if (pull.aliases && Array.isArray(pull.aliases))
			pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
	}
});

client.login(process.env.token);
