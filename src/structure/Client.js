const Discord = require('discord.js');
const { readdirSync } = require('fs');

class ZeroClient extends Discord.Client {
	constructor(options) {
		super(options);
		this.commands = new Discord.Collection();
		this.aliases = new Discord.Collection();
	}

	login() {
		super.login(process.env.token);
	}

	LoadCommands() {
		readdirSync('./src/commands').forEach(dir => {
			const commands = readdirSync(`./src/commands/${dir}/`).filter(file =>
				file.endsWith('.js')
			);
			for (let file of commands) {
				let pull = require(`../commands/${dir}/${file}`);
				if (pull.name) {
					this.commands.set(pull.name, pull);
				} else {
					continue;
				}
				if (pull.aliases && Array.isArray(pull.aliases))
					pull.aliases.forEach(alias => this.aliases.set(alias, pull.name));
			}
		});
	}

	LoadEvents() {
		const events = readdirSync('./src/events').filter(file =>
			file.endsWith('.js')
		);
		for (let file of events) {
			try {
				let pull = require(`../events/${file}`);
				pull.event = pull.event || file.replace('.js', '');
				this.on(pull.event, pull.bind(null, this));
			} catch (err) {
				console.log(err);
			}
		}
	}
}

module.exports = {
	ZeroClient
};
