const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eggplant')
		.setDescription('Replies with 🍆!'),
	async execute(interaction) {
		await interaction.reply('🍆');
	},
};