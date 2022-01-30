const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const thirtythreecm = [
	'marry me!'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('33cm')
		.setDescription('33cm\'s special'),
	async execute(interaction) {
		await interaction.reply( `${randFromArray(thirtythreecm)}` );
	},
};
