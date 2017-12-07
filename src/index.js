var Form = require('./form');
var React = require('react');
var ReactDOM = require('react-dom');

/**
 * DxpQuestions class
 * @class
 */
var DxpQuestions = function(params) {
	this.form = null;
	this.params = params;
}

/**
 * @callback onValidate
 * @param {Object} result A callback when a validation event has occurred
 * @param {bool} result.valid Indicates if the all questions in the form are valid
 */

 /**
 * @callback onSubmit
 * @param {Object} result A callback that is executed when `requestSubmit()` is called
 * @param {bool} result.valid Indicates if the all questions in the form are valid
 * @param {Object} result.answers The list of all the answers
 * @param {Object} result.errors The lsit of all the errors
 */

/**
 * Initialize a new form that will render questions and answers
 * @memberof DxpQuestions
 * @param {Object} params The parameters used to initialize the form
 * @param {Array} params.questions A list of questions to render
 * @param {Array} params.answers A list of answers to render
 * @param {Object} params.container The HTML element that will contain the rendered form
 * @param {Object} params.customValidators Mapping of question type to custom validation function
 * @param {onValidate} params.onValidate A callback function that is called everytime an answer is validated
 * @param {onSubmit} params.onSubmit A callback function that is called when the `submitRequest()` method is called on the form
 * @returns {Object} An instance of the form
 * @example
 * var form = DxpQuestions.init({
 *   questions: // questions object here,
 *   answers: // answers object here,
 *   container: document.getElementById('container'),
 *   customValidators: {
 * 		email: function(context) {
 *			var errors = {};
 *			if (context.answer.indexOf('@gmail.com') < 0) {
 *				errors['_summary'] = 'must be a gmail adress';
 *			}
 *			context.setErrors({ errors: errors })
 *		}
 *   }
 *   onValidate: function (result) {
 *     // show error if resul.valid === false
 *   },
 *   onSubmit: function (result) {
 *     // make API call with result.answers
 *   }
 * })
 */
DxpQuestions.init = function(params) {
	return new DxpQuestions(params);
}

/**
 * Renders the form
 * @memberof DxpQuestions
 * @example
 * var form = DxpQuestions.init(// params);
 * form.render();
 */
DxpQuestions.prototype.render = function() {
	this.form = ReactDOM.render(<Form questions={this.params.questions} answers={this.params.answers} onValidate={this.params.onValidate} onSubmit={this.params.onSubmit} customValidators={this.params.customValidators} />, this.params.container);
};

/**
 * When called, calls the function that submits the form
 * @memberof DxpQuestions
 * @example
 * var form = DxpQuestions.init(// params);
 * form.requestSubmit();
 */
DxpQuestions.prototype.requestSubmit = function() {
	return this.form.requestSubmit();
};

/**
 * Sets answers in the form.
 * @memberof DxpQuestions
 * @param {Object} params.answers The answer key/value pairs to set
 * @param {bool} param.replaceAll Set to true to replace all answer values, false to only replace values that have a key in params.answers.  Defaults to false.
 * @example
 * var form = DxpQuestions.init(// params);
 * var values = {};
 * values['my_field_1234'] = 'Some value';
 * form.setAnswers({ answers: values, replaceAll: false });
 */
DxpQuestions.prototype.setAnswers = function(params) {
	return this.form.setAnswers(params);
};

module.exports = DxpQuestions;