module.exports = function(input) {
	if (input == null || input == undefined)
		return false;
	return /[<>]/.test(input);
};