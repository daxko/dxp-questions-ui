var moment = require('moment');

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && (answer == null || answer == "" || answer == undefined)) {
		errors["_summary"] = "is required.";
		return errors;
	}

	if (answer != null && answer != "") {
		if (!moment(answer, ["MM/DD/YYYY", "M/DD/YYYY", "M/D/YYYY", "MM/DD/YY", "M/DD/YY", "M/D/YY"], true).isValid()) {
			errors["_summary"] = "is invalid.";
			return errors;
		}
	}

	return errors;
}