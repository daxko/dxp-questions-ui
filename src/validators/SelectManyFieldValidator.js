function is_valid_multi_select_answer(question, answers) {
	for (var i = 0; i < question.possible_answers.length; i++) {
		for (var j = 0; j < answers.length; j++) {
			var answer = answers[j];
			if (question.possible_answers[i].id == answer) {
				return true;
			}
		}
	}
	return false;
}

module.exports = function (question, answer) {

	var errors = {};

	if (question.required && (answer == null || answer == "" || answer == undefined || answer.length == 0 || !is_valid_multi_select_answer(question, answer))) {
		errors["_summary"] = "is required.";
		return errors;
	}

	return errors;
}