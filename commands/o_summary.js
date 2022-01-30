const { SlashCommandBuilder } = require('@discordjs/builders');
const { createSummary } = require('../lib/summary');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summary')
		.setDescription('Gives the summary of some commands'),
	async execute(interaction) {
		let hallOfShame = await createSummary(interaction.client, interaction.guild.id);
		await interaction.reply({ content: hallOfShame, ephemeral: true });
	},
};
