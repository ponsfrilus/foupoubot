const fs = require('fs');
const { readFile } = require('fs/promises');

const readGuildFile = async (file) => {
	const fileexists = fs.existsSync(file);
	if (!fileexists) {
		return {}
	} else {
		let data = await readFile(file, 'utf8');
		return JSON.parse(data);
	}
}

const saveCmd = async (guild, user, entry, boobies) => {
	// console.log('GuildID:', guild.id)
	// console.log('user id', user.id, 'username', user.username)

	const guildId = guild.id;
	const userId = user.id;
	const file = `data/${guildId}.json`;
	
	let data = await readGuildFile(file);
	// console.debug({data})
	let today = new Date();
	today = today.toISOString().split('T')[0];
	let alreadyDone;
	if (!data[userId]) {
		data[userId] = {user}
	}
    if (!data[userId][entry]) {
        data[userId][entry] = { 'date': '', 'value': ''}
	}
    if (data[userId][entry].date != today) {
		data[userId][entry].date = today;
		data[userId][entry].value = boobies;
		fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
			if (err) throw err;
		})
		alreadyDone = false
	} else {
        alreadyDone = data[userId][entry];
    }
	return alreadyDone;
}
module.exports = {
    saveCmd,
	readGuildFile
}