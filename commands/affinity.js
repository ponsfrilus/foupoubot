const { SlashCommandBuilder } = require('@discordjs/builders');

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const affinitycomments = [
	'it\'s amazing !',
	'no what we expected...',
	'well... that sucks!',
	'#thxplsbai',
	'who would have believed it ?',
	'rise and shine!',
	'Oh really?',
	'is it for real?',
	'you gotta be kidding me!',
	'no way!',
	'what a surpise!',
	'well, what do you know!',
	'better late than never',
	'bite the bullet!',
	'easy does it!',
	'get your act together!',
	'hang in there...',
	'it\'s not rocket science...',
	'so far so good?',
	'speak of the devil 😈',
	'your guess is as good as mine ¯\\_(ツ)_/¯',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('affinity')
		.setDescription('Replies with affinity!')
		.addUserOption(option => option.setName('target').setDescription('Select a user').setRequired(true)),
	async execute(interaction) {
		const caller = interaction.user;
		const user = interaction.options.getUser('target');
		const affinity = randomIntFromInterval(0, 100);
		if (caller.username == user.username) {
			await interaction.reply({ content: `Dear ${interaction.user},\nI have a private confession for to you:\n I DONT'T LIKE NEGATIVE NUMBER YOU BIATCH.\n\nThis incident will be reported!`, ephemeral: true })
		} else if (user.bot) {
			await interaction.reply({ content: `I'm sure you like bots, you freak!`, ephemeral: true })
		} else {
			await interaction.reply(`${interaction.user}'s affinity with ${user} is ${affinity}% — ${affinitycomments[ Math.floor( Math.random() * affinitycomments.length ) ]}`);
		}
	},
};