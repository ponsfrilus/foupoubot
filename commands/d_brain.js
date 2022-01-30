const { SlashCommandBuilder } = require('@discordjs/builders');
const { saveCmd } = require('../lib/filesHelper');

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brain')
		.setDescription('Replies with your IQ analysis...'),
	async execute(interaction) {
		const iq = randomIntFromInterval(57, 134);
		let alreadyDoneToday = await saveCmd(interaction.guild, interaction.user, 'iq', iq);
		if (alreadyDoneToday) {
			await interaction.reply({ content: `Sorry, your are stuck with this IQ for today: \`${alreadyDoneToday.value}\` !`, ephemeral: true });
		} else {
			await interaction.reply( `🧠 ${ iq }` );
		}
	},
};