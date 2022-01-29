const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('foupouda')
		.setDescription('Replies with 🍑!'),
	async execute(interaction) {
		await interaction.reply('🍑');
	},
};