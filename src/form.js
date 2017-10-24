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
		onSubmit: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		return {
			tried_to_submit: false,
			answers: this.props.answers,
			changed: {},  // if the user has changed an answer, it's key will be in here
			errors: {}    // if errors exist for a question, its key will be in here
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

	// Every time an answer is changed, it will be validated (even if error not shown)
	validateOne: function(key, question, answer) {
		var validator = validator_factory(question.type);
		if (validator == null) return;
		//var new_errors = Object.assign({}, this.state.errors);
		var new_errors = this.state.errors;
		var errors = validator(question, answer);
		if (Object.keys(errors).length == 0) {
			delete new_errors[key]
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
		this.setState({ answers: answers });
	},

	onBlur: function(key) {
		//var changed = Object.assign({}, this.state.changed);
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

		return (
			<div className={classes({ 'dxp-question-container': true, 'dxp-question-error': show_validation, 'dxp-question-readonly': question.read_only })} key={key}>
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
	}

});

module.exports = Form;