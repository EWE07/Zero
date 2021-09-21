function verification(client, command, message, args) {
	if (command.owner) {
		return 
	}
	if (command) command.run(client, message, args);
}

module.exports = {verification}