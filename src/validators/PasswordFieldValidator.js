var contains_html = require('../utility/contains_html');

function isEmpty(answer, id) {
	if (answer == null || answer == undefined)
		return true;

	var value = answer[id];
	return value == null || value == undefined || value == "";
}

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && isEmpty(answer, 'password')) {
		errors["password"] = "is required.";
	}
	
	if (!isEmpty(answer, 'password') && !isEmpty(answer, 'password_confirm') && answer.password != answer.password_confirm) {
		errors["password_confirm"] = 'passwords do not match'
	}

	if (answer == null || answer == undefined) {
		return errors;
	}

	/*
	Object.keys(answer).forEach(function(key) {
		if (contains_html(answer[key])) {
			errors[key] = "HTML is not allowed.";
			return errors;
		}
	})
	*/

	return errors;
}