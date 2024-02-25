const { Client, Collection, GatewayIntentBits, Events } = require("discord.js");
const { readdirSync } = require("fs");

const { prefix, token } = require("../../../config.json");

const PathCmd = "./src/ZeroBot/commands";
const PathEvent = "./src/ZeroBot/events";

require("../../ZeroServer/server");

let pull;

class ZeroClient extends Client {
  constructor(options) {
    super(options);
    this.OS = process.platform
    this.commands = new Collection();
    this.aliases = new Collection();
    this.prefix = prefix;
  }

  login() {
    super.login(token);
  }

  LoadCommands() {
    readdirSync(PathCmd).forEach((dir) => {
      const commands = readdirSync(PathCmd + `/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );

      for (let file of commands) {
        pull = require(`../commands/${dir}/${file}`);
        if (pull.name) {        
          this.commands.set(pull.name, pull);
        } else {
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach((alias) => this.aliases.set(alias, pull.name));
      }
    });
  }

  LoadEvents() {
    const events = readdirSync(PathEvent).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of events) {
      try {
        pull = require(`../events/${file}`);
        pull.event = pull.event || file.replace(".js", "");

        if (pull.event == "ready") {
          this.on(Events.ClientReady, pull.bind(null, this));
        }
        if (pull.event == "message") {
          this.on(Events.MessageCreate, pull.bind(null, this));
        }

        //this.on(pull.event, pull.bind(null, this));
      } catch (err) {
        console.log(err);
      }
    }
  }
}

module.exports = {
  ZeroClient,
  GatewayIntentBits
};
