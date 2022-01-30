const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('date')
		.setDescription('Replies with server\'s ISO date.'),
	async execute(interaction) {
		let now = new Date();
		now = now.toISOString();
		await interaction.reply({ content: now, ephemeral: true });
	},
};
