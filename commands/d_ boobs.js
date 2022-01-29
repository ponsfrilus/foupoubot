const { SlashCommandBuilder } = require('@discordjs/builders');
const { saveCmd } = require('../lib/filesHelper');

const boobs = [
	'( • )( • )',
	'( · Y · )',
	'(· ) ( ·)',
	'(. | .)',
	'(. )( ˙)',
	'O O',
	'· ·',
	'Ͼ Ͽ',
	'ͼͽ',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boobs')
		.setDescription('Replies with a boobs!'),
	async execute(interaction) {
		let boobies = boobs[ Math.floor( Math.random() * boobs.length ) ];
		let alreadyDoneToday = await saveCmd(interaction.guild, interaction.user, 'boobs', boobies);
		// console.log('alreadyDoneToday', alreadyDoneToday);
		if (alreadyDoneToday) {
			await interaction.reply({ content: `Sorry, enough boobies for today, you already got \`${alreadyDoneToday.value}\` !`, ephemeral: true });
		} else {
			await interaction.reply( `\`${boobies}\`` );
		}
	},
};