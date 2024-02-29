const { Client, Collection, GatewayIntentBits, Events } = require("discord.js");
const { readdirSync } = require("fs");

const path = require("node:path");
const fs = require("node:fs");

const { prefix, token } = require("../../../config.json");
const { color } = require("../../ZeroNode/node");
const PathCmd = "./src/ZeroBot/commands";

require("../../ZeroServer/server");

let pull;

class ZeroClient extends Client {
  constructor(options) {
    super(options);
    this.OS = process.platform;
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
    const eventsPath = path.join(__dirname, "../events");
    const eventFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);
      const event = require(filePath);

      console.log(color("blue", "ZeroBot: Loading " + event.name + " event"));

      if (event.once) {
        this.on(event.name, (...args) => event.execute(this, ...args));
      } else {
        this.on(event.name, (...args) => event.execute(this, ...args));
      }
    }
  }
}

module.exports = {
  ZeroClient,
  GatewayIntentBits,
  Events,
};
