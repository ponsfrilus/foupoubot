const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const tuhis = [
	'🧜‍♀️',
	'🧜‍'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuhis')
		.setDescription('Tuhis\'s special'),
	async execute(interaction) {
		await interaction.reply( `${randFromArray(tuhis)}` );
	},
};
