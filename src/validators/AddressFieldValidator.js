var contains_html = require('../utility/contains_html');

function isEmpty(answer, id) {
	if (answer == null || answer == undefined)
		return true;

	var value = answer[id];
	return value == null || value == undefined || value == "";
}

function setRequiredErrors(answer, errors, id, desc) {
	if (isEmpty(answer, id)) {
		errors[id] = "is required.";
	}
}

var CANADA_POSTAL_REGEX = /^[ABCEFGHJKLMNPRSTVXYabcefghjklmnprstvxy][0-9][ABCEFGHJKLMNPRSTVWXYZabcefghjklmnprstvxy][0-9][ABCEFGHJKLMNPRSTVWXYZabcefghjklmnprstvxy][0-9]$/;
var US_ZIP_REGEX = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

module.exports = function (question, answer) {

	var errors = {};

	if (question.required) {
		var intl = !isEmpty(answer, 'country') && answer.country != 'US';
		setRequiredErrors(answer, errors, "line1", "Address line 1");
		setRequiredErrors(answer, errors, "city", "City");
		setRequiredErrors(answer, errors, "state", intl ? "Province/Region" : "State");
		setRequiredErrors(answer, errors, "zip", intl ? "Postal Code" : "Zip Code");
		if (question.intl) setRequiredErrors(answer, errors, "country");
	}

	/*
	if (Object.keys(errors).length > 0) {
		errors["_summary"] = errors[Object.keys(errors)[0]];
	}
	*/	

	if (answer == null || answer == undefined) {
		return errors;
	}

	if (!isEmpty(answer, "zip")) {
		var zip = answer["zip"];
		if (answer["country"] == "US" && !US_ZIP_REGEX.test(zip)) {
			errors["zip"] = "is invalid.";
		} else if (answer["country"] == "CA" && !CANADA_POSTAL_REGEX.test(zip)) {
			errors["zip"] = "is invalid.";
		}
	}

	Object.keys(answer).forEach(function(key) {

		if (/\|/.test(answer[key])) {
			errors[key] = "is invalid."
			return errors;
		}

		if (contains_html(answer[key])) {
			errors[key] = "HTML is not allowed.";
			return errors;
		}
	})

	return errors;
}