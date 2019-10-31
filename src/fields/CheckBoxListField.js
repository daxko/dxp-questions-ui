var React = require('react');

var CheckBoxListField = React.createClass({

	onChange: function(e) {

		var new_values = (this.props.answer || []).slice(0);

		if (e.target.checked) {
			if (new_values.indexOf(e.target.value) === -1) {
				new_values.push(e.target.value);
			}
		} else {
			var index = new_values.indexOf(e.target.value);
			if (index >= 0) {
				new_values.splice(index, 1);
			}
		}

		this.props.onChange(new_values);
		this.props.onBlur();
	},

	onChange_allow_sms: function(field, event) {
		var new_values = this.props.answer;
		if (event.target.checked){
			new_values[field] = 'True';
		}
		else{
			new_values[field] = 'False';
		}
		this.props.onChange(new_values);
	},

	render: function() {

		var question = this.props.question;
		var answer = this.props.answer || [];
		var checked = {};
		for (var i = 0; i < answer.length; i++) {
			checked[answer[i]] = true;
		}

		if(question.show_allow_sms) {
			return (
				<div>
					<br />
					<label className="dxp-phone-allow-sms-label"> 
						<input
						type="checkbox"
						className="dxp-phone-allow-sms-checkbox"
						checked={answer.allow_sms == 'True'}
						onChange={this.onChange_allow_sms.bind(this, 'allow_sms')} />
						{question.allow_sms_text}
						<br/>
						<a href={question.allow_sms_link_url} target="_blank">Learn more about SMS terms.</a>
					</label>
				</div>
			)
		}
		else {
			return (
				<div className="dxp-checkbox">
					{ 
						question.possible_answers.map(function(pa) {
							return (
								<label key={pa.id}>
									<input type="checkbox" 
										name={this.props.question_id} 
										value={pa.id}
										disabled={this.props.question.read_only}
										onChange={this.onChange}
										onBlur={this.props.onBlur}
										checked={checked[pa.id] || false} />
									{pa.display_value}
								</label>
							);
						}.bind(this))
					}
				</div>
			);	
		}
	}

});

module.exports = CheckBoxListField;