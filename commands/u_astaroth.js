const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const astarothEmbed = new MessageEmbed()
	.setImage('https://media.giphy.com/media/QDiZoLQYvWfpympudX/giphy.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('astaroth')
		.setDescription('Astaroth\'s special'),
	async execute(interaction) {
		await interaction.reply( { embeds: [ astarothEmbed ] } );
	},
};
