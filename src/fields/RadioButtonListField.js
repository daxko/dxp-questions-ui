var React = require('react');

var RadioButtonListField = React.createClass({

	onChange: function(e) {
		this.props.onChange(e);
		this.props.onBlur();
	},

	render: function() {

		var question = this.props.question;

		return (
			<div className="dxp-radio">
				{ 
					question.possible_answers.map(function(pa) {
						return (
							<label key={pa.id}>
								<input type="radio" 
									name={this.props.question_id} 
									value={pa.id}
									disabled={this.props.question.read_only}
									onChange={this.onChange}
									onBlur={this.props.onBlur}
									checked={pa.id == this.props.answer || this.props.answer == null && pa.id == this.props.question.default_value} 
									className={this.props.className} />
								{pa.display_value}
							</label>
						);
					}.bind(this))
				}
			</div>
		);
	}

});

module.exports = RadioButtonListField;