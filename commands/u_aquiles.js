const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const aquiles = [
	'Ja n\'estic fins als collons de\'n Seiya rc',
	'👑 free to play'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('aquiles')
		.setDescription('Aquiles\'s special'),
	async execute(interaction) {
		await interaction.reply( `${randFromArray(aquiles)}` );
	},
};
