const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const tuhis = [
	'🧜‍♀️',
	'🧜‍',
	':fairy: + 🐟',
	':woman_fairy: + :dolphin:',
	':woman_standing: + :tropical_fish:',
	':merman:',
	':man_standing: + :shark:'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuhis')
		.setDescription('Tuhis\'s special'),
	async execute(interaction) {
		await interaction.reply( `${randFromArray(tuhis)}` );
	},
};
