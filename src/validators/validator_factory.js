var mapping = {
	"text": require('./TextFieldValidator'),
	"password": require('./PasswordFieldValidator'),
	"name": require('./NameFieldValidator'),
	"dropdown": require('./SelectOneFieldValidator'),
	"radio": require('./SelectOneFieldValidator'),
	"checkboxes": require('./SelectManyFieldValidator'),
	"email": require('./EmailFieldValidator'),
	"phone": require('./PhoneFieldValidator'),
	"date": require('./DateFieldValidator'),
	"address": require('./AddressFieldValidator')
};

module.exports = function(type) {
	var validator = mapping[type];
	return validator;
}