const { ShardingManager } = require("discord.js");
require('dotenv').config()

const { token } = String(process.env.token) //require("../../config.json");

console.log(String(process.env.token))

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
