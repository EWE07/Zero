const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("./src/ZeroBot/main.js", {
  token: process.env.token,
  totalShards: "auto",
  respawn: true,
});

manager.on("shardCreate", (shard) => {
  console.log(`Zero: Launched #${shard.id} Shard 🚀`);
});

manager.spawn();
