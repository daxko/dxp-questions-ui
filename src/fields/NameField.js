var React = require('react');
var classes = require('classnames');

function getError(key, errors, changes, triedToSubmit) {
	var changed = changes != null;  // Has user changed the field in UI since initial load?
	var show_validation = errors && (triedToSubmit || changed) && errors[key];  // show validation if user has tried to submit or the value has changed.  The 'value' property will contain the question level error (see name question)
	if (!show_validation)
		return null;
	return errors[key];
}

var NameField = React.createClass({
	
	onKeyPress: function(e) {
		if (e.key == "<" || e.key == ">")
			e.preventDefault();
	},

	onChange: function(field, event) {
		var new_state = this.props.answer || { prefix: '', first: '', middle: '', last: '', suffix: '' };
		new_state[field] = event.target.value;
		this.props.onChange(new_state);
	},

	render: function() {

		var question = this.props.question;
		var prefix_error = getError('prefix', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var first_name_error = getError('first', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var middle_name_error = getError('middle', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var last_name_error = getError('last', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var suffix_error = getError('suffix', this.props.errors, this.props.changed, this.props.triedToSubmit);

		var answer = this.props.answer || {};

		return (
			<div className="dxp-name-question">

				{
					question.show_prefix &&
					<div className={ classes({ 'dxp-name-prefix': true })} title={prefix_error}>
						<label className="dxp-name-prefix-label">Prefix</label>
						<select 
							className={ classes({ 'dxp-name-prefix-select': true, 'dxp-field-error': prefix_error })} 
							value={answer.prefix || ''} 
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'prefix')}
							disabled={this.props.question.read_only}
							>
							<option></option>
							{

								question.prefixes.map(function(prefix) {
									return <option key={prefix.id} value={prefix.id}>{prefix.value}</option>
								})
							}
						</select>
						{ prefix_error && <div className="dxp-error-description">{prefix_name_error}</div> }
					</div>
				}

				{ 
					question.show_first && 
					<div className={ classes({ 'dxp-name-first': true })} title={first_name_error}>
						<label className="dxp-name-first-label">First</label>
						<input type="text" 
							maxLength={50} 
							className={ classes({ 'dxp-field-error': first_name_error })}
							readOnly={this.props.question.read_only}
							value={answer.first || ''}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'first')} />	
							{ first_name_error && <div className="dxp-error-description">{first_name_error}</div> }
					</div> 
				}

				{
					question.show_middle &&
					<div className={ classes({ 'dxp-name-middle': true })} title={middle_name_error}>
						<label className="dxp-name-middle-label">Middle</label>
						<input type="text" 
							maxLength={50} 
							className={ classes({ 'dxp-field-error': middle_name_error })}
							readOnly={this.props.question.read_only}
							value={answer.middle || ''}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'middle')} />	
							{ middle_name_error && <div className="dxp-error-description">{middle_name_error}</div> }
					</div>
				}

				{
					question.show_last &&
					<div className={ classes({ 'dxp-name-last': true })} title={last_name_error}>
						<label className="dxp-name-last-label">Last</label>
						<input type="text" 
							maxLength={50} 
							className={ classes({ 'dxp-field-error': last_name_error })}
							readOnly={this.props.question.read_only}
							value={answer.last || ''}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'last')} />	
							{ last_name_error && <div className="dxp-error-description">{last_name_error}</div> }
					</div>
				}

				{
					question.show_suffix &&
					<div className={ classes({ 'dxp-name-suffix': true })} title={suffix_error}>
						<label className="dxp-name-suffix-label">Suffix</label>
						<select
							className={ classes({ 'dxp-name-suffix-select': true, 'dxp-field-error': prefix_error })} 
							value={answer.suffix || ''} 
							onChange={this.onChange.bind(this, 'suffix')}
							onBlur={this.props.onBlur}
							disabled={this.props.question.read_only}
							>
							<option></option>
							{
								question.suffixes.map(function(prefix) {
									return <option key={prefix.id} value={prefix.id}>{prefix.value}</option>
								})
							}
						</select>
					</div>
				}

			</div>
		);
	}

});

module.exports = NameField;