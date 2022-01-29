const { SlashCommandBuilder } = require('@discordjs/builders');

const charon = [
	'❤️‍🔥',
	'😈'
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('charon')
		.setDescription('Charon\'s special'),
	async execute(interaction) {
		await interaction.reply(`${charon[ Math.floor( Math.random() * charon.length ) ] }`);
	},
};