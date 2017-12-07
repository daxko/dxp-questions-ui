var mapping = {
	"text": require('./TextField'),
	"name": require('./NameField'),
	"password": require('./PasswordField'),
	"dropdown": require('./DropDownField'),
	"radio": require('./RadioButtonListField'),
	"checkboxes": require('./CheckBoxListField'),
	"phone": require('./PhoneField'),
	"date": require('./DateField'),
	"email": require('./EmailField'),
	"address": require('./AddressField')
};

module.exports = function(type) {
	return mapping[type] || require('./UnknownField')
};
