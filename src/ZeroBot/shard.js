const { ShardingManager } = require("discord.js");
const { token } = require("../../config.json") || process.env.token;

function runBot() {
  if (token == undefined) {
    console.error("ZeroBot: Token undefined")
    process.exit(1)
  }
}

runBot()

const manager = new ShardingManager("./src/ZeroBot/main.js", {
  token: process.env.token,
  totalShards: "auto",
  respawn: true,
});

manager.on("shardCreate", (shard) => {
  console.log(`Zero: Launched #${shard.id} Shard 🚀`);
});

manager.spawn();
