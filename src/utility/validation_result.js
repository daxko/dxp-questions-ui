var ValidationResult = function() {
	this.errors = {};
}

ValidationResult.prototype.add = function(field, error) {
	this.errors[field] = error;
};

ValidationResult.prototype.is_valid = function() {
	return Object.keys(this.errors).length == 0;
};

ValidationResult.prototype.get = function(field) {
	return this.errors[field];
};

ValidationResult.prototype.first_error_message = function() {
	return this.is_valid()
		? ''
		: this.errors[Object.keys(this.errors)[0]];
}

ValidationResult.prototype.first_error_field = function() {
	return this.is_valid()
		? ''
		: Object.keys(this.errors)[0];
}

module.exports = ValidationResult;