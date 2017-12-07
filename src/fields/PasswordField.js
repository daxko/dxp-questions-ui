var React = require('react');
var classes = require('classnames');

function getError(key, errors, changes, triedToSubmit) {
	var changed = changes != null;  // Has user changed the field in UI since initial load?
	var show_validation = errors && (triedToSubmit || changed) && errors[key];  // show validation if user has tried to submit or the value has changed.  The 'value' property will contain the question level error (see name question)
	if (!show_validation)
		return null;
	return errors[key];
}

var PasswordField = React.createClass({

	getInitialState: function() {
		var answer = this.props.answer || {};
	    return {
	    	password: answer.password || '',
	    	password_confirm: answer.password || ''
	    };
	},

	onChange: function(field, event_or_value) {
		var new_state = this.state;
		new_state[field] = event_or_value.target ? event_or_value.target.value : event_or_value;
		this.setState(new_state, function() {
			this.props.onChange(this.state);	
		}.bind(this));
	},

	render: function() {

		var question = this.props.question;
		var password_error = getError('password', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var password_confirm_error = getError('password_confirm', this.props.errors, this.props.changed, this.props.triedToSubmit);

		return (
			<div className="dxp-password-question">
			
				<div className={ classes({ 'dxp-password-actual': true })} title={password_error}>
					<label>Password</label>
					<input type="password" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': password_error })}
						readOnly={this.props.question.read_only}
						value={this.state.password}
						onKeyPress={this.onKeyPress}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'password')} />	
						{ password_error && <div className="dxp-error-description">{password_error}</div> }
				</div> 

				<div className={ classes({ 'dxp-password-confirm': true })} title={password_confirm_error}>
					<label>Confirm Password</label>
					<input type="password" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': password_confirm_error })}
						readOnly={this.props.question.read_only}
						value={this.state.password_confirm}
						onKeyPress={this.onKeyPress}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'password_confirm')} />	
						{ password_confirm_error && <div className="dxp-error-description">{password_confirm_error}</div> }
				</div> 
			</div>
			
		);
	}
	

});

module.exports = PasswordField;
