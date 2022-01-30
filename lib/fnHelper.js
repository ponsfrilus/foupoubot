
const randomIntFromInterval = (min, max) => { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const randFromArray = (ary) => {
    return ary[ Math.floor( Math.random() * ary.length ) ];
}

module.exports = {
    randomIntFromInterval,
    randFromArray
}