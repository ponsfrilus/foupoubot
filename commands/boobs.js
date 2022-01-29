const { SlashCommandBuilder } = require('@discordjs/builders');

const boobs = [
	'( • )( • )',
	'(· ) ( ·)',
	'( · Y · )',
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
		await interaction.reply( `\`${boobs[ Math.floor( Math.random() * boobs.length ) ] }\`` );
	},
};