var React = require('react');

var TextField = React.createClass({

	onKeyPress: function(e) {
		if (e.key == "<" || e.key == ">")
			e.preventDefault();
	},

	render: function() {

			return (
				<input type="text"
					maxLength={this.props.question.max_length}
					readOnly={this.props.question.read_only}
					value={this.props.answer || '' }
					onChange={this.props.onChange}
					onKeyPress={this.onKeyPress}
					className={this.props.className}
					onBlur={this.props.onBlur}
				/>
			);
	}
	

});

module.exports = TextField;
