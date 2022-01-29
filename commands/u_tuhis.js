const { SlashCommandBuilder } = require('@discordjs/builders');

const tuhis = [
	'🧜‍♀️',
	'🧜‍'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuhis')
		.setDescription('Tuhis\'s special'),
	async execute(interaction) {
		await interaction.reply( `${tuhis[ Math.floor( Math.random() * tuhis.length ) ] }` );
	},
};
