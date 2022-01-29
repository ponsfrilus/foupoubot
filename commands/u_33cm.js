const { SlashCommandBuilder } = require('@discordjs/builders');

const thirtythreecm = [
	'marry me!'
];
module.exports = {
	data: new SlashCommandBuilder()
		.setName('33cm')
		.setDescription('33cm\'s special'),
	async execute(interaction) {
		await interaction.reply( `${thirtythreecm[ Math.floor( Math.random() * thirtythreecm.length ) ] }` );
	},
};
