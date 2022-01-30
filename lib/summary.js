const { readGuildFile } = require('../lib/filesHelper');

const dickSummary = async (interaction, guildId) => {
	let today = new Date();
	today = today.toISOString().split('T')[0];

	const file = `data/${guildId}.json`;
	let data = await readGuildFile(file);

	let usersDicks = [];
	Object.entries(data).map((el,i) => {
		if (el[1]['dick'] && el[1]['dick']['date'] == today) {
			usersDicks.push({userId: el[0], dick: el[1]['dick']['value']});
		}
	})

	return usersDicks.sort((a, b) => b.dick.length - a.dick.length);
}

const brainSummary = async (interaction, guildId) => {
	let today = new Date();
	today = today.toISOString().split('T')[0];

	const file = `data/${guildId}.json`;
	let data = await readGuildFile(file);

	let userBrains = [];
	Object.entries(data).map((el,i) => {
		if (el[1]['iq'] && el[1]['iq']['date'] == today) {
			userBrains.push({userId: el[0], iq: el[1]['iq']['value']});
		}
	})

	return userBrains.sort((a, b) => b.iq.length - a.iq.length);
}

const boobsSummary = async (interaction, guildId) => {

	const boobiesIndex = [
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

	let today = new Date();
	today = today.toISOString().split('T')[0];

	const file = `data/${guildId}.json`;
	let data = await readGuildFile(file);

	let usersBoobs = [];
	Object.entries(data).map((el,i) => {
		if (el[1]['boobs'] && el[1]['boobs']['date'] == today) {
			usersBoobs.push({userId: el[0], boobs: el[1]['boobs']['value']});
		}
	})

	return usersBoobs.sort((a, b) => boobiesIndex.indexOf(a.boobs) - boobiesIndex.indexOf(b.boobs));
}

const createSummary = async (interaction, guildId) => {
    console.log("Create Summary")
	let usersBoobs = await boobsSummary(interaction, guildId)
	// console.debug(usersBoobs)
	let usersDicks = await dickSummary(interaction, guildId)
	// console.debug(usersDicks)
	let usersBrains = await brainSummary(interaction, guildId)
	// console.debug(usersBrains)
	let hallOfShame = '\n__**Hall of Shame**__\n'
	if (usersBoobs) {
		hallOfShame += `\n__Boobs of the day__\n`;
		let idx = 1;
		for (let entry of usersBoobs) {
            let user = await interaction.users.fetch(entry.userId);
			const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
			hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.boobs}\`\n`;
			idx++
		}
	}
	if (usersDicks) {
		hallOfShame += `\n__Dicks of the day__\n`;
		let idx = 1;
		for (let entry of usersDicks) {
            let user = await interaction.users.fetch(entry.userId);
			const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
			hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.dick}\`\n`;
			idx++
		}
	}
	if (usersBrains) {
		hallOfShame += `\n__Brainiac of the day__\n`;
		let idx = 1;
		for (let entry of usersBrains) {
            let user = await interaction.users.fetch(entry.userId);
            const medal = (idx == 1) ? '🥇' : ((idx == 2) ? '🥈' : ((idx == 3) ? '🥉' : ''));
			hallOfShame += `${idx.toString().padStart(3, ' ')}. ${medal} ${user} \`${entry.iq}\`\n`;
			idx++
		}
	}
	return hallOfShame;
}

module.exports = {
    createSummary
}