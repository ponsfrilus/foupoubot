const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beer')
		.setDescription('Replies with a beer!'),
	async execute(interaction) {
		await interaction.reply( `${interaction.user} is having a 🍺. Cheers 🍻!` );
	},
};