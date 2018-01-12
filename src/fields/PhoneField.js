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

		new_state[field] = value;
		this.props.onChange(new_state);
	},

	render: function() {

		var question = this.props.question;
		var phone_error = getError('phone', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var ext_error = getError('ext', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var answer = this.props.answer || { intl: false };

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
						</div>
					</div>
				}

			</div>
		);
	}

});

module.exports = PhoneField;
