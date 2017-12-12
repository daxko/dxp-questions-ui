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

	onChange: function(field, event) {
		var new_state = this.props.answer || { password: '', password_confirm: '' };
		new_state[field] = event.target.value;
		this.props.onChange(new_state);
	},

	render: function() {

		var question = this.props.question;
		var password_error = getError('password', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var password_confirm_error = getError('password_confirm', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var answer = this.props.answer || {};

		return (
			<div className="dxp-password-question">
			
				<div className={ classes({ 'dxp-password-actual': true })} title={password_error}>
					<label>Password</label>
					<input type="password" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': password_error })}
						readOnly={this.props.question.read_only}
						value={answer.password || ''}
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
						value={answer.password_confirm || ''}
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
