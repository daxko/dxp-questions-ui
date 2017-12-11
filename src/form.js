var React = require('react');
var classes = require('classnames');

var field_factory = require('./fields/field_factory');
var validator_factory = require('./validators/validator_factory');
var FieldError = require('./fields/FieldError');

var Form = React.createClass({

	propTypes: {
		questions: React.PropTypes.object.isRequired,
		answers: React.PropTypes.object.isRequired,
		onValidate: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired,
		onFieldValidate: React.PropTypes.object,
		onFieldChange: React.PropTypes.object
	},

	getInitialState: function() {
		return {
			tried_to_submit: false,
			answers: this.props.answers,
			changed: {},  // if the user has changed an answer, it's key will be in here
			errors: {},    // if errors exist for a question, its key will be in here
			extraHtml: {}   // extra html mapped to a question - this is dynamic calculated html
		};
	},

	componentDidMount: function() {
	    this.validateAll();  
	},

	componentWillUpdate: function(nextProps, nextState) {
	},

	renderSection: function(section_id, section) {
		return (
			<div className="dxp-question-section-container" key={section_id}>
				<h4 className="dxp-question-section-title">{section.title}</h4>
				<h5 className="dxp-question-section-description">{section.description}</h5>
			</div>
		);
	},

	fireOnValidate: function() {
		var valid = !this.state.tried_to_submit ? true : Object.keys(this.state.errors).length == 0;
		this.props.onValidate({ valid: valid });
	},

	// External interface allows consumers to define custom validation per question type and return errors
	executeCustomValidator: function(key, question, answer, errors) {
		if (this.props.onFieldValidate !== null && this.props.onFieldValidate !== undefined) {
			var customValidator = this.props.onFieldValidate[key];
			if (customValidator !== null && customValidator !== undefined) {
				if (typeof(customValidator) !== 'function') {
					throw 'Expected onFieldValidate[' + question.type + '] to be a function';
				}
				var self = this;

				var context = {
					question_id: key,
					question: question,
					answer: answer,
					allAnswers: self.state.answers,
					// A callback is provided to return any errors so that async validation can occur via ajax, timer, etc
					setErrors: function(callbackData) {
						var new_errors = self.state.errors;
						
						if (Object.keys(callbackData.errors).length == 0) {
							delete new_errors[key]
						} else {
							new_errors[key] = callbackData.errors;
						}
	
						self.setState({ errors: new_errors }, function() {
							self.fireOnValidate();	
						});					
					}
				};

				customValidator(context);
			}
		}
	},

	// Every time an answer is changed, it will be validated (even if error not shown)
	validateOne: function(key, question, answer) {
		var validator = validator_factory(question.type);
		if (validator == null) return;
		var new_errors = this.state.errors;
		var errors = validator(question, answer);

		if (Object.keys(errors).length == 0) {
			delete new_errors[key]
			// Only fire custom validation when there are no standard errors
			this.executeCustomValidator(key, question, answer, errors)
		} else {
			new_errors[key] = errors;
		}
		this.setState({ errors: new_errors }, function() {
			this.fireOnValidate();	
		}.bind(this));
	},

	// When page first loads, this will be called to set the initial validation state (even if validation errors not shown)
	validateAll: function() {
		//var new_errors = Object.assign({}, this.state.errors);
		var new_errors = this.state.errors;
		Object.keys(this.props.questions).forEach(function(key) {
			var question = this.props.questions[key];
			var validator = validator_factory(question.type);
			if (validator != null) {
				var answer = this.state.answers[key];
				var errors = validator(question, answer);
				if (Object.keys(errors).length == 0) {
					delete new_errors[key]
					// Only fire custom validation when there are no standard errors
					this.executeCustomValidator(key, question, answer, errors)
				} else {
					new_errors[key] = errors;
				}
			}
		}.bind(this));
		this.setState({ errors: new_errors }, function() {
			this.fireOnValidate();	
		}.bind(this));
	},

	onChange: function(key, input) {
		//var answers = Object.assign({}, this.state.answers);
		var answers = this.state.answers;
		var value = input.target ? input.target.value : input;   // could be an event or a complex object provided by field impl
		answers[key] = value;
		this.setState({ answers: answers }, function() {

			// Fire off custom field change after setState is complete
			if (this.props.onFieldChange && this.props.onFieldChange[key]) {
				var question = this.props.questions[key];
				var context = {
					question_id: key,
					question: question,
					answer: value,
					allAnswers: this.state.answers,
					// A callback is provided to mutate state
					setExtraHtml: function(html) {
						var extraHtml = this.state.extraHtml;
						extraHtml[key] = html
						this.setState({ extraHtml: extraHtml });
					}.bind(this)
				};
				this.props.onFieldChange[key](context);
			}

		}.bind(this));
	},

	onBlur: function(key) {
		//var changed = Object.assign({}, this.state.changed);
		console.log('onblur ' + key)
		var changed = this.state.changed;
		changed[key] = this.state.answers[key] || true;
		this.setState({ changed: changed }, function() {
			this.validateOne(key, this.props.questions[key], this.state.answers[key]);	
		});
	},

	renderQuestion: function(key, question) {

		var ElementClass = field_factory(question.type);
		var changed = this.state.changed[key] != null;
		var errors = this.state.errors[key] || {};      // Will have properties on this object if there are any errors
		var show_validation = (this.state.tried_to_submit || changed) && errors["_summary"];  // show validation if user has tried to submit or the value has changed.  The 'value' property will contain the question level error (see name question)
		var show_extra_html = this.state.extraHtml[key] !== null;

		return (
			<div className={classes({ 'dxp-question-container': true, 'dxp-question-error': show_validation, 'dxp-question-readonly': question.read_only, ['dxp-key-' + key]: true })} key={key}>
				<label className="dxp-question-title">{question.title} {question.required && <span className="dxp-required-indicator">*</span>}</label>
				<small className="dxp-question-help-text">{question.description}</small>
				<div className="dxp-question-body">
					<ElementClass 
						question={question}
						answer={this.state.answers[key]} 
						errors={errors} 
						changed={this.state.changed[key]} 
						onChange={this.onChange.bind(this, key)} 
						onBlur={this.onBlur.bind(this, key)}
						triedToSubmit={this.state.tried_to_submit} 
						question_id={key} 
						className={show_validation ? 'dxp-field-error' : ''}
					/>
					{ show_extra_html && <span className="dxp-extra-html">{this.state.extraHtml[key]}</span> }
					{ show_validation && <FieldError errors={errors} /> }
				</div>
			</div>
		);
	},

	render: function() {

		return (
			<div className="dxp-questions-form">
				{ 
					Object.keys(this.props.questions).map(function(key) {
						var question = this.props.questions[key];
						if (question.type == "section")
							return this.renderSection(key, question);
						return this.renderQuestion(key, question);
					}.bind(this)) 
				}
			</div>
		);
	},

	// Called externally

	requestSubmit: function() {
		this.setState({ tried_to_submit: true }, function() {
			this.props.onSubmit({ valid: Object.keys(this.state.errors).length == 0, answers: this.state.answers, errors: this.state.errors });
		}.bind(this));
		this.fireOnValidate();
	},

	setAnswers: function(params) {
		var new_answers = null;
		if (params.replaceAll) {
			new_answers = params.answers;
		} else {
			new_answers = this.state.answers;
			Object.keys(params.answers).forEach(function(key) {
				new_answers[key] = params.answers[key]
			});
		}

		this.setState({ answers: new_answers }, function() {
			this.validateAll();
		})
	}

});

module.exports = Form;