const { SlashCommandBuilder } = require('@discordjs/builders');

const package = require('../package.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with a help message'),
	async execute(interaction) {
        const helpMessage = `\n
**Welcome to foupoubot**

__**About**__
***foupoubot*** was created for the 6̸6̸6̸ legion of the E37 server in the Saint Seiya Awakening mobile game.

It was written by [@ponsfrilus](<https://github.com/ponsfrilus> '@ponsfrilus\'s profile on GitHub') as an open source software. Sources are available on [GitHub](<https://github.com/ponsfrilus/foupoubot> 'foupoubot\'s sources on GitHub').

You are using foupoubot version \`${package.version}\`.


__**How to use it**__

_TL;DR_
Type \`/\` and check the available commandes...

_Commands list_
  - \`/666\` → lists 666 with some cool fonts.
  - \`/affinity @someone\` → displays your affinity with @someone... with a score AND a comment.
  - \`/banana\` → displays a 🍌.
  - \`/beer\` → makes you drink a beer, cheers!
  - \`/boobs\` → displays some boobies in ASCII.
  - \`/cucumber\` → displays a 🥒.
  - \`/dick\` → displays some boner in ASCII.
  - \`/drink something\` → makes you drink somthing, try it...
  - \`/eggplant\` → displays a 🍆.
  - \`/help\` → displays this help.
  - \`/ping\` → respond with pong.
  - \`/aquiles\` → it depends...
  - \`/charon\` → it depends...
  - \`/foupouda\` → it depends...


__**Support**__

Sorry, there is NO SUPPORT for this bot. \`foupoubot\` is provided "as is",
without warranty of any kind, express or implied, including but not limited to
the warranties of merchantability, fitness for a particular purpose and
noninfringement. in no event shall the authors or copyright holders be liable
for any claim, damages or other liability, whether in an action of contract,
tort or otherwise, arising from, out of or in connection with the software or
the use or other dealings in the software.

`;
        await interaction.reply({ content: helpMessage, ephemeral: true })
	},
};