const { SlashCommandBuilder } = require('@discordjs/builders');
const { saveCmd } = require('../lib/filesHelper');
const { randFromArray } = require('../lib/fnHelper');

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
		let dick = randFromArray(dicks);
		let alreadyDoneToday = await saveCmd(interaction.guild, interaction.user, 'dick', dick);
		if (alreadyDoneToday) {
			await interaction.reply({ content: `Sorry, enough of boner for today, you already got \`${alreadyDoneToday.value}\` !`, ephemeral: true });
		} else {
			await interaction.reply( `\`${ dick }\`` );
		}
	},
};