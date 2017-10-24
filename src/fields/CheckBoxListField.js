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

	render: function() {

		var question = this.props.question;
		var answer = this.props.answer || [];
		var checked = {};
		for (var i = 0; i < answer.length; i++) {
			checked[answer[i]] = true;
		}

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

});

module.exports = CheckBoxListField;