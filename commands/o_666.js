const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('666')
		.setDescription('Replies with 666!'),
	async execute(interaction) {
		await interaction.reply(`⁶⁶⁶
⑥⑥⑥
ϬϬϬ
❻❻❻
𝟔𝟔𝟔
𝟲𝟲𝟲
6̸6̸6̸
`);
	},
};