const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const charon = [
	'❤️‍🔥',
	'😈'
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('charon')
		.setDescription('Charon\'s special'),
	async execute(interaction) {
		await interaction.reply(`${randFromArray(charon)}`);
	},
};