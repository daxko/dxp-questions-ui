var contains_html = require('../utility/contains_html');

function isEmpty(answer, id) {
	if (answer == null || answer == undefined)
		return true;

	var value = answer[id];
	return value == null || value == undefined || value == "";
}

function isIndividualFieldRequired(required, isMiddle) {
	// only program questions has required setting for individual Name question part
	if (required == null || required == undefined) {
		if (isMiddle)
			return false;

		return true;
	}

	return required;
}

module.exports = function (question, answer) {

	var errors = {};

	if (question.show_first && question.required && isIndividualFieldRequired(question.required_first, false) && isEmpty(answer, 'first')) {
		errors["first"] = "is required.";
	}
	
	if (question.show_middle && question.required && isIndividualFieldRequired(question.required_middle, true) && isEmpty(answer, 'middle')) {
		errors["middle"] = "is required.";
	}

	if (question.show_last && question.required && isIndividualFieldRequired(question.required_last, false) && isEmpty(answer, 'last')) {
		errors["last"] = "is required.";
	}

	/*
	if (Object.keys(errors).length > 0) {
		errors["_summary"] = errors[Object.keys(errors)[0]];
	}
	*/

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