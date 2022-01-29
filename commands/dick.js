const { SlashCommandBuilder } = require('@discordjs/builders');

const dicks = [
	'8D',
	'8=D',
	'8==D',
	'8===D',
	'8====D ',
	'8=====D',
	'8======D',
	'8=======D',
	'8========D',
	'8=======GOD',
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('dick')
		.setDescription('Replies with a dick!'),
	async execute(interaction) {
		await interaction.reply( `\`${ dicks[ Math.floor( Math.random() * dicks.length ) ] }\`` );
	},
};