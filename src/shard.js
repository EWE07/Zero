const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./src/main.js', {
	token: process.env.token,
	totalShards: 'auto',
	respawn: true
});

manager.on('shardCreate', shard => console.log(`Launched #${shard.id} Shard`));

manager.spawn();
