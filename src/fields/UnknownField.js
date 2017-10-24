var React = require('react');

var UnknownField = React.createClass({

	render: function() {
		return (
			<div>UNKNOWN field type of {this.props.question.type}</div>
		);
	}

});

module.exports = UnknownField;
