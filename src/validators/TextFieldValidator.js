var contains_html = require('../utility/contains_html');

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && (answer == null || answer == "" || answer == undefined)) {
		errors["_summary"] = "is required.";
		return errors;
	}

	if (contains_html(answer)) {
		errors["_summary"] = "HTML is not allowed.";
		return errors;
	}

	return errors;
}