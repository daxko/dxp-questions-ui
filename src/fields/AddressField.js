var React = require('react');
var classes = require('classnames');

function getError(key, errors, changes, triedToSubmit) {
	var changed = changes != null;  // Has user changed the field in UI since initial load?
	var show_validation = errors && (triedToSubmit || changed) && errors[key];  // show validation if user has tried to submit or the value has changed.  The 'value' property will contain the question level error (see name question)
	if (!show_validation)
		return null;
	return errors[key];
}

var STATES = {
	"AL": "Alabama",
	"AK": "Alaska",
	"AS": "American Samoa",
	"AZ": "Arizona",
	"AR": "Arkansas",
	"CA": "California",
	"CO": "Colorado",
	"CT": "Connecticut",
	"DE": "Delaware",
	"DC": "District Of Columbia",
	"FM": "Federated States Of Micronesia",
	"FL": "Florida",
	"GA": "Georgia",
	"GU": "Guam",
	"HI": "Hawaii",
	"ID": "Idaho",
	"IL": "Illinois",
	"IN": "Indiana",
	"IA": "Iowa",
	"KS": "Kansas",
	"KY": "Kentucky",
	"LA": "Louisiana",
	"ME": "Maine",
	"MH": "Marshall Islands",
	"MD": "Maryland",
	"MA": "Massachusetts",
	"MI": "Michigan",
	"MN": "Minnesota",
	"MS": "Mississippi",
	"MO": "Missouri",
	"MT": "Montana",
	"NE": "Nebraska",
	"NV": "Nevada",
	"NH": "New Hampshire",
	"NJ": "New Jersey",
	"NM": "New Mexico",
	"NY": "New York",
	"NC": "North Carolina",
	"ND": "North Dakota",
	"MP": "Northern Mariana Islands",
	"OH": "Ohio",
	"OK": "Oklahoma",
	"OR": "Oregon",
	"PW": "Palau",
	"PA": "Pennsylvania",
	"PR": "Puerto Rico",
	"RI": "Rhode Island",
	"SC": "South Carolina",
	"SD": "South Dakota",
	"TN": "Tennessee",
	"TX": "Texas",
	"UT": "Utah",
	"VT": "Vermont",
	"VI": "Virgin Islands",
	"VA": "Virginia",
	"WA": "Washington",
	"WV": "West Virginia",
	"WI": "Wisconsin",
	"WY": "Wyoming"
};

var AddressField = React.createClass({
	
	getInitialState: function() {
		var answer = this.props.answer || {};
	    return {
	    	line1: answer.line1 || '',
	    	line2: answer.line2 || '',
	    	city: answer.city || '',
	    	state: answer.state || '',
	    	zip: answer.zip || '',
	    	country: answer.country || 'US'
	    };
	},

	onKeyPress: function(e) {
		if (e.key == "<" || e.key == ">")
			e.preventDefault();
	},

	onChange: function(field, event_or_value) {
		//var new_state = Object.assign({}, this.state);
		var new_state = this.state;
		new_state[field] = event_or_value.target ? event_or_value.target.value : event_or_value;
		this.setState(new_state, function() {
			this.props.onChange(this.state);	
		}.bind(this));
	},

	render: function() {

		var question = this.props.question;
		var line1_error = getError('line1', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var line2_error = getError('line2', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var city_error = getError('city', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var state_error = getError('state', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var zip_error = getError('zip', this.props.errors, this.props.changed, this.props.triedToSubmit);
		var country_error = getError('country', this.props.errors, this.props.changed, this.props.triedToSubmit);

		return (
			<div className="dxp-name-question">

				<div className={ classes({ 'dxp-address-line1': true })} title={line1_error}>
					<label>Address Line 1</label>
					<input type="text" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': line1_error })}
						readOnly={this.props.question.read_only}
						value={this.state.line1}
						onKeyPress={this.onKeyPress}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'line1')} />	
						{ line1_error && <div className="dxp-error-description">{line1_error}</div> }
				</div> 

				<div className={ classes({ 'dxp-address-line2': true })} title={line2_error}>
					<label>Address Line 2</label>
					<input type="text" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': line2_error })}
						readOnly={this.props.question.read_only}
						value={this.state.line2}
						onKeyPress={this.onKeyPress}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'line2')} />	
						{ line2_error && <div className="dxp-error-description">{line2_error}</div> }
				</div> 

				<div className={ classes({ 'dxp-address-city': true })} title={city_error}>
					<label>City</label>
					<input type="text" 
						maxLength={50} 
						className={ classes({ 'dxp-field-error': city_error })}
						readOnly={this.props.question.read_only}
						value={this.state.city}
						onKeyPress={this.onKeyPress}
						onBlur={this.props.onBlur}
						onChange={this.onChange.bind(this, 'city')} />	
						{ city_error && <div className="dxp-error-description">{city_error}</div> }
				</div> 

				<div className={ classes({ 'dxp-address-state': true })} title={state_error}>
					<label>{ this.state.country == 'US' ? 'State' : 'Province/Region'}</label>
					
					{
						this.state.country == 'US' &&
						<select 
							className={ classes({ 'dxp-field-error': state_error })}
							disabled={this.props.question.read_only}
							value={this.state.state} 
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'state')}>
							<option key="_default" value="">-Select One-</option>
							{
								Object.keys(STATES).map(function(id) {
									return <option key={id} value={id}>{STATES[id]}</option>
								})
							}
						</select>
					}

					{
						this.state.country == 'CA' &&
						<select 
							className={ classes({ 'dxp-field-error': state_error })}
							disabled={this.props.question.read_only}
							value={this.state.state} 
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'state')}>
							<option key="_default" value="">-Select One-</option>
							{
								question.ca_provinces.map(function(item) {
									return <option key={item.id} value={item.id}>{item.name}</option>
								})
							}
						</select>	
					}

					{
						this.state.country != 'US' && this.state.country != 'CA' &&
						<input type="text" 
							maxLength={50} 
							className={ classes({ 'dxp-field-error': state_error })}
							readOnly={this.props.question.read_only}
							value={this.state.state}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'state')} />	
					}

					{ state_error && <div className="dxp-error-description">{state_error}</div> }
					
				</div>

				<div className={ classes({ 'dxp-address-zip': true })} title={zip_error}>
					<label>{ this.state.country == 'US' ? 'Zip Code' : 'Postal Code' }</label>
					
					{ 
						this.state.country == 'US' &&
						<input
							type="tel"
							placeholder=""
							maxLength={10} 
							className={ classes({ 'dxp-field-error': zip_error })}
							readOnly={this.props.question.read_only}
							value={this.state.zip}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'zip')} />	
					}

					{ 
						this.state.country == 'CA' &&
						<input
							type="text"
							placeholder="A1A1A1"
							maxLength={6} 
							className={ classes({ 'dxp-field-error': zip_error })}
							readOnly={this.props.question.read_only}
							value={this.state.zip}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'zip')} />	
					}

					{ 
						this.state.country != 'CA' && this.state.country != 'US' &&
						<input
							type="text"
							placeholder=""
							maxLength={15} 
							className={ classes({ 'dxp-field-error': zip_error })}
							readOnly={this.props.question.read_only}
							value={this.state.zip}
							onKeyPress={this.onKeyPress}
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'zip')} />	
					}

					{ zip_error && <div className="dxp-error-description">{zip_error}</div> }
					
				</div> 

				{ 
					question.intl &&
					<div className={ classes({ 'dxp-address-country': true })} title={country_error}>
						<label>Country</label>
						<select 
							className={ classes({ 'dxp-field-error': country_error })}
							disabled={this.props.question.read_only}
							value={this.state.country} 
							onBlur={this.props.onBlur}
							onChange={this.onChange.bind(this, 'country')}>
							<option></option>
							{
								question.countries.map(function(country) {
									return <option key={country.id} value={country.id}>{country.name}</option>
								})
							}
						</select>

						{ country_error && <div className="dxp-error-description">{country_error}</div> }
					</div>
				}

			</div>
		);
	}

});

module.exports = AddressField;