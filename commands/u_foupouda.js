const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('foupouda')
		.setDescription('Foupouda\'s special'),
	async execute(interaction) {
		await interaction.reply('🍑');
	},
};