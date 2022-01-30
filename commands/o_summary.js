const { SlashCommandBuilder } = require('@discordjs/builders');
const { readGuildFile } = require('../lib/filesHelper');

const dickSummary = async (interaction) => {
	let today = new Date();
	today = today.toISOString().split('T')[0];

	const user = interaction.user;
	const guildId = interaction.guild.id;
	const userId = user.id;
	const file = `data/${guildId}.json`;

	let data = await readGuildFile(file);
	let usersDicks = []
	Object.entries(data).map((el,i) => {
		if (el[1]['dick'] && el[1]['dick']['date'] == today) {
			usersDicks.push({userId: el[0], dick: el[1]['dick']['value']})
		}
	})

	return usersDicks.sort((a, b) => b.dick.length - a.dick.length);
}

const brainSummary = async (interaction) => {
	let today = new Date();
	today = today.toISOString().split('T')[0];

	const user = interaction.user;
	const guildId = interaction.guild.id;
	const userId = user.id;
	const file = `data/${guildId}.json`;

	let data = await readGuildFile(file);
	let userBrains = []
	Object.entries(data).map((el,i) => {
		if (el[1]['iq'] && el[1]['iq']['date'] == today) {
			userBrains.push({userId: el[0], iq: el[1]['iq']['value']})
		}
	})

	return userBrains.sort((a, b) => b.iq.length - a.iq.length);
}

const boobsSummary = async (interaction) => {

	const boobiesIndex = [
		'( • )( • )',
		'( · Y · )',
		'(· ) ( ·)',
		'(. | .)',
		'(. )( ˙)',
		'O O',
		'· ·',
		'Ͼ Ͽ',
		'ͼͽ',
	];


	let today = new Date();
	today = today.toISOString().split('T')[0];

	const user = interaction.user;
	const guildId = interaction.guild.id;
	const userId = user.id;
	const file = `data/${guildId}.json`;

	let data = await readGuildFile(file);
	let usersBoobs = []
	Object.entries(data).map((el,i) => {
		if (el[1]['boobs'] && el[1]['boobs']['date'] == today) {
			usersBoobs.push({userId: el[0], boobs: el[1]['boobs']['value']})
		}
	})

	return usersBoobs.sort((a, b) => boobiesIndex.indexOf(a.boobs) - boobiesIndex.indexOf(b.boobs));
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summary')
		.setDescription('Gives the summary of some commands'),
	async execute(interaction) {
		let usersBoobs = await boobsSummary(interaction)
		// console.debug(usersBoobs)
		let usersDicks = await dickSummary(interaction)
		// console.debug(usersDicks)
		let usersBrains = await brainSummary(interaction)
		// console.debug(usersBrains)
		let hallOfShame = '\n'
		if (usersBoobs) {
			hallOfShame += `\n__**Boobs of the day**__\n`;
			let idx = 1;
			for (let entry of usersBoobs) {
				const user = await interaction.client.users.fetch(entry.userId);
				const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
				hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.boobs}\`\n`;
				idx++
			}
		}
		if (usersDicks) {
			hallOfShame += `\n__**Dicks of the day**__\n`;
			let idx = 1;
			for (let entry of usersDicks) {
				//const user = interaction.client.users.cache.get(entry.userId)
				const user = await interaction.client.users.fetch(entry.userId);
				const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
				hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.dick}\`\n`;
				idx++
			}
		}
		if (usersBrains) {
			hallOfShame += `\n__**Brainiac of the day**__\n`;
			let idx = 1;
			for (let entry of usersBrains) {
				const user = await interaction.client.users.fetch(entry.userId);
				const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
				hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.iq}\`\n`;
				idx++
			}
		}
		await interaction.reply({ content: hallOfShame, ephemeral: true });
	},
};
