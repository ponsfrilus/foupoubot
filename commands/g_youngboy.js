const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { randFromArray } = require('../lib/fnHelper');

const myEmbed = [
	new MessageEmbed().setImage('https://media.giphy.com/media/4gsjHZMPXdlGo/giphy.gif'),
	new MessageEmbed().setImage('https://media.giphy.com/media/l1J9yga8EfyyOCTTy/giphy.gif')
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youngboy')
		.setDescription('return a gif'),
	async execute(interaction) {
		await interaction.reply( { embeds: [ randFromArray(myEmbed) ] } );
	},
};
