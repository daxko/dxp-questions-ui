var React = require('react');
var classes = require('classnames');
var jQuery = require('jquery');

function getError(key, errors, changes, triedToSubmit) {
	var changed = changes != null;  // Has user changed the field in UI since initial load?
	var show_validation = errors && (triedToSubmit || changed) && errors[key];  // show validation if user has tried to submit or the value has changed.  The 'value' property will contain the question level error (see name question)
	if (!show_validation)
		return null;
	return errors[key];
}

var PhoneField = React.createClass({

	componentDidMount: function() {

		// No mask for intl phone - just raw input
		if (this.props.question.intl) {
			return;
		}

		var comp = this;
		var options =  {
		  onComplete: function(cep) {
		    //alert('CEP Completed!:' + cep);
		  },
		  onKeyPress: function(cep, event, currentField, options){
		    //console.log('An key was pressed!:', cep, ' event: ', event, 'currentField: ', currentField, ' options: ', options);
		  },
		  onChange: function(cep){
		    //console.log('cep changed! ', cep);
		  },
		  onInvalid: function(val, e, f, invalid, options){
		    //var error = invalid[0];
		    //console.log ("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
		  }
		};
		if(typeof jQuery.fn.mask == 'undefined') {
	    	throw "The following jQuery plugin must be loaded in order to render phone fields: https://igorescobar.github.io/jQuery-Mask-Plugin/";
		}
		
		$(comp.refs.phone).mask('(000) 000-0000', options);
		
		// initial format of the value
		this.onChange('phone', { target: { value: comp.refs.phone.value } });
	},

	onKeyPress: function(field, e) {
		if (e.key == "<" || e.key == ">")
			e.preventDefault();

		if (field == 'ext' && !/^[0-9]$/.test(e.key)) {
			e.preventDefault();
		} else if (field == 'phone' && !/^[0-9+\-\(\)\.]$/.test(e.key)) {
			e.preventDefault();
		}
	},

	onChange: function(field, event) {
		var new_state = this.props.answer || { phone: '', ext: '', intl: false };
		var value = event.target.value;

		// For intl phone, don't allow pasting of non-allowed characters
		if (this.props.question.intl) {
			if (field == 'phone' && event.target.value) {
				value = value.replace(/[^0-9+\-\(\)\.]/g, '');
			 	this.refs.phone.value = value;
			}
		}

		// For extension don't allow pasting
		if (field == 'ext') {
			value = value.replace(/[^0-9]/g, '');
			this.refs.ext.value = value;
		}

		if(field == 'allow_sms'){
			if (event.target.checked)
				value = true;
			else
				value = false;
		}	

		new_state[field] = value;
		this.props.onChange(new_state);
	},

	render: function() {

		var question = this.props.question;
		var phone_error = getError('phone', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var ext_error = getError('ext', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var answer = this.props.answer || { intl: false };
		
		//Coming back from edit new member. Need to convert .NET uppercase string boolean back to javascript boolean datatype.
		if(answer.allow_sms === 'True')
			answer.allow_sms = true;
		else if(answer.allow_sms === 'False')
			answer.allow_sms = false;

		return (
			<div className="dxp-phone-question">
				<div className={ classes({ 'dxp-phone-number': true })} title={phone_error}>
					<input
						type="tel"
						ref="phone"
						className={ classes({ 'dxp-field-error': phone_error })}
						maxLength={ question.intl ? 17 : 14 }
						value={answer.phone || ''}
						readOnly={this.props.question.read_only}
						onKeyPress={this.onKeyPress.bind(this, 'phone')}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'phone')} />
						{ phone_error && <div className="dxp-error-description">{phone_error}</div> }
				</div>

				{
					question.show_extension &&
					<div className="dxp-phone-ext-container">
						<label className="dxp-phone-ext-label">Ext.</label>
						<div className={ classes({ 'dxp-phone-ext': true, 'dxp-field-error': ext_error })} title={ext_error}>
							<input type="text"
								maxLength={5}
								ref="ext"
								className={ classes({ 'dxp-field-error': ext_error })}
								readOnly={this.props.question.read_only}
								value={answer.ext || ''}
								onKeyPress={this.onKeyPress.bind(this, 'ext')}
								onBlur={this.props.onBlur}
								onChange={this.onChange.bind(this, 'ext')} /> 
								{ ext_error && <div className="dxp-error-description">{ext_error}</div> }
						</div>
					</div>
				}

				{
					question.show_allow_sms &&
					<div>
						<br />
						<label className="dxp-phone-allow-sms-label"> 
							<input
							type="checkbox"
							className="dxp-phone-allow-sms-checkbox"
							checked={answer.allow_sms}
							onChange={this.onChange.bind(this, 'allow_sms')} />
							{question.allow_sms_text}
							<br/>
							<a href={question.allow_sms_link_url} target="_blank">Learn more about SMS terms.</a>
						</label>
					</div>
				}
			</div>
		);
	}

});

module.exports = PhoneField;
