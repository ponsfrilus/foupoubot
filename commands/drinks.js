const { SlashCommandBuilder } = require('@discordjs/builders');
const { randFromArray } = require('../lib/fnHelper');

const adjectives = [
	'a fantastic',
	'a fuzzy ',
	'a beautiful',
	'an agreeable',
	'an attractive',
	'a bloody',
	'a shamy',
	'a cheerful',
	'a clean',
	'a colorful',
	'a comfortable',
	'a crazy',
	'a curious',
	'a delightful',
	'a dizzy',
	'an elated',
	'an elegant',
	'an enchanting',
	'an encouraging',
	'an energetic',
	'an enthusiastic',
	'an envious',
	'an evil',
	'an expensive',
	'an exuberant',
	'a faithful',
	'a fancy ',
	'a filthy',
	'a glamorous',
	'a gorgeous',
	'a healthy',
	'a helpful',
	'a important',
	'a inexpensive',
	'a inquisitive',
	'a joyous',
	'a jolly',
	'a long',
	'a magnificent',
	'a misty',
	'a mysterious',
	'a nasty',
	'a naughty',
	'a nice',
	'a nutty',
	'a obnoxious',
	'a odd',
	'a perfect',
	'a pleasant',
	'a powerful',
	'a scary',
	'a shiny',
	'a splendid',
	'a strange',
	'a stupid',
	'a super',
	'a talented',
	'a tasty',
	'a terrible',
	'a unusual',
	'a uptight',
	'a vivacious',
	'a wicked',
	'a witty',
];

const cheers = [
	'Salud',
	'Cheers',
	'Skål',
	'Proost',
	'Cheerio',
	'Santé',
	'Prost',
	'Salute',
	'Sláinte',
	'Noroc',
	'乾杯',
	'干杯',
];

const emojis = [
	'🍹',
	'🍼',
	'☕️',
	'🧃',
	'🥤',
	'🧋',
	'🍶',
	'🍺',
	'🍻',
	'🥂',
	'🍷',
	'🥃',
	'🍸',
	'🧉',
	'🍾',
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drink')
		.setDescription('Replies with a dring!')
		.addStringOption(option => option.setName('input').setDescription('Enter the drink')),
	async execute(interaction) {
		const drink = interaction.options.getString('input') || 'drink';
		await interaction.reply( `${interaction.user} is having ${randFromArray(adjectives)} ${drink}. ${randFromArray(cheers)} ${randFromArray(emojis)}!` );
	},
};