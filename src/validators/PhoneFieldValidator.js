var contains_html = require('../utility/contains_html');

function isEmpty(answer, id) {
	if (answer == null || answer == undefined)
		return true;

	var value = answer[id];
	return value == null || value == undefined || value == "";
}

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && isEmpty(answer, 'phone')) {
		errors["phone"] = "is required.";
	} 

	if (!question.intl && !isEmpty(answer, 'phone') && answer["phone"].replace(/\D/g,'').length != 10) {
		errors["phone"] = "is invalid.";
	} else if (question.intl && !isEmpty(answer, 'phone') && !/^[0-9+\-\(\)\.]*$/.test(answer["phone"])) {
		errors["phone"] = "has invalid characters.";
	}

	if (answer == null || answer == undefined) {
		return errors;
	}

	Object.keys(answer).forEach(function(key) {
		if (contains_html(answer[key])) {
			errors[key] = "HTML is not allowed.";
			return errors;
		}
	})

	return errors;
}