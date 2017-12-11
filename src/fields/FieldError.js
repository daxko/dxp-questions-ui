var React = require('react');

var FieldError = React.createClass({

	propTypes: {
		errors: React.PropTypes.object
	},

	createHtml: function() {
		return { __html: this.props.errors["_summary"] }
	},

	render: function() {

		if (this.props.errors == null || this.props.errors["_summary"] == null)
			return null;

		return (
			<div className="dxp-error-description" dangerouslySetInnerHTML={this.createHtml()}></div>
		);
	}
});

module.exports = FieldError;
