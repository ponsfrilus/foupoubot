const fs = require('fs');
// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const { createSummary } = require('./lib/summary');

const cron = require('node-cron');

// Create a new client instance
const client = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, /*Intents.FLAGS.GUILD_MEMBERS*/]
});

commands = [];
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	// Whenever the bot (server) is restarted, re-run the registration of the slash commands
	// While I'm not sure it is state of the art, it seems to work
    const rest = new REST({ version: '9' }).setToken(token);
	const Guilds = client.guilds.cache.map(guild => guild.id);
	for (let guildId of Guilds) {
		rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
			.then(() => console.log('Successfully registered application commands.'))
			.catch(console.error);
	}

	client.user.setPresence({ activities: [{ name: 'waiting for orders' }], status: 'idle' });
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return false;
    console.log(`Message from ${message.author.username}: ${message.content}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);

// Well this is way to complicated but I'm tired and it works...
cron.schedule('0 0 * * *', async () => {
	// It return a collection, check out https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/
	let channels = await client.channels.cache.filter(el => el.type == 'GUILD_TEXT');
	let chan_info = [];
	for (const chan of channels) {
		if (!chan_info[chan[1].guild.id]) {
			chan_info[chan[1].guild.id] = []
		}
		if (chan[1].name == '💩-randomlol' || chan[1].name === 'general') {
			chan_info[chan[1].guild.id].push( { guildId: chan[1].guild.id, chanId: chan[1].id, chanName: chan[1].name } );
		}
	}

	for (const guild in chan_info) {
		let dest = chan_info[guild].filter(el => el.chanName == '💩-randomlol')[0]
		if (!dest.chanId) {
			dest = chan_info[guild].filter(el => el.chanName == 'general')[0]
		}
		const channel = await client.channels.fetch(dest.chanId);
		let summary = await createSummary(client, dest.guildId);
		channel.send(summary);
	}
});
