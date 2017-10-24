function is_valid_answer(question, answer) {
	for (var i = 0; i < question.possible_answers.length; i++) {
		if (question.possible_answers[i].id == answer) {
			return true;
		}
	}
	return false;
}

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && (answer == null || answer == "" || answer == undefined || answer == question.empty_value || !is_valid_answer(question, answer))) {
		errors["_summary"] = "is required.";
		return errors;
	}

	return errors;
}