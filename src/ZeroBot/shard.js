const { ShardingManager } = require("discord.js");
const token = process.env.token || require("../../config.json").token;

require('dotenv').config()

function runShard() {
  const manager = new ShardingManager("./src/ZeroBot/main.js", {
    token: token,
    totalShards: "auto",
    respawn: true,
  });

  manager.on("shardCreate", (shard) => {
    console.log(`Zero: Launched #${shard.id} Shard 🚀`);
  });

  manager.spawn();
}

function runBot() {
  if (token == undefined) {
    console.error("ZeroBot: Token undefined");
    process.exit(1);
  }
  runShard();
}

runBot();