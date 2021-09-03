class Error {
	constructor() {
	}
	token(token) {
		if(token) {
        if(typeof(token) !== String) {
					throw new Error(`The Bot Token isn't a string!`)
				}
		}
	}
}

module.exports = {
	Error
}