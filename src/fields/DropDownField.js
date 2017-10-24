var React = require('react');

var DropDownField = React.createClass({

	onChange: function(e) {
		this.props.onChange(e);
		this.props.onBlur();
	},

	render: function() {

		var question = this.props.question;

		return (
			<div className="dxp-dropdown">
				<select onChange={this.onChange} 
					onBlur={this.props.onBlur}
					disabled={this.props.question.read_only}
					className={this.props.className}
					value={this.props.answer || this.props.question.default_value}
					>
					{ !question.hide_empty_option && <option key="default" value="">-Select One-</option> }
					{ 
						question.possible_answers.map(function(pa) {
							return <option key={pa.id} value={pa.id}>{pa.display_value}</option>
						})
					}
				</select>
			</div>
		);
	}

});

module.exports = DropDownField;