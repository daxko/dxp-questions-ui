## Classes

<dl>
<dt><a href="#DxpQuestions">DxpQuestions</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#onValidate">onValidate</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#onSubmit">onSubmit</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="DxpQuestions"></a>

## DxpQuestions
**Kind**: global class  

* [DxpQuestions](#DxpQuestions)
    * [new DxpQuestions()](#new_DxpQuestions_new)
    * _instance_
        * [.render()](#DxpQuestions+render)
        * [.requestSubmit()](#DxpQuestions+requestSubmit)
        * [.setAnswers()](#DxpQuestions+setAnswers)
    * _static_
        * [.init(params)](#DxpQuestions.init) ⇒ <code>Object</code>

<a name="new_DxpQuestions_new"></a>

### new DxpQuestions()
DxpQuestions class

<a name="DxpQuestions+render"></a>

### dxpQuestions.render()
Renders the form

**Kind**: instance method of [<code>DxpQuestions</code>](#DxpQuestions)  
**Example**  
```js
var form = DxpQuestions.init(// params);form.render();
```
<a name="DxpQuestions+requestSubmit"></a>

### dxpQuestions.requestSubmit()
When called, calls the function that submits the form

**Kind**: instance method of [<code>DxpQuestions</code>](#DxpQuestions)  
**Example**  
```js
var form = DxpQuestions.init(// params);form.requestSubmit();
```
<a name="DxpQuestions+setAnswers"></a>

### dxpQuestions.setAnswers()
Sets answers in the form.

**Kind**: instance method of [<code>DxpQuestions</code>](#DxpQuestions)  

| Param | Type | Description |
| --- | --- | --- |
| params.answers | <code>Object</code> | The answer key/value pairs to set |
| param.replaceAll | <code>bool</code> | Set to true to replace all answer values, false to only replace values that have a key in params.answers.  Defaults to false. |

**Example**  
```js
var form = DxpQuestions.init(// params);var values = {};values['my_field_1234'] = 'Some value';form.setAnswers({ answers: values, replaceAll: false });
```
<a name="DxpQuestions.init"></a>

### DxpQuestions.init(params) ⇒ <code>Object</code>
Initialize a new form that will render questions and answers

**Kind**: static method of [<code>DxpQuestions</code>](#DxpQuestions)  
**Returns**: <code>Object</code> - An instance of the form  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The parameters used to initialize the form |
| params.questions | <code>Array</code> | A list of questions to render |
| params.answers | <code>Array</code> | A list of answers to render |
| params.container | <code>Object</code> | The HTML element that will contain the rendered form |
| params.onFieldValidate | <code>Object</code> | Mapping of question id to custom validation function |
| params.onFieldChange | <code>Object</code> | Mapping of question id to custom on change function |
| params.onValidate | [<code>onValidate</code>](#onValidate) | A callback function that is called everytime an answer is validated |
| params.onSubmit | [<code>onSubmit</code>](#onSubmit) | A callback function that is called when the `submitRequest()` method is called on the form |

**Example**  
```js
var form = DxpQuestions.init({  questions: // questions object here,  answers: // answers object here,  container: document.getElementById('container'),  onFieldValidate: {		'custom_field_id-12345': function(context) {			var errors = {};			if (context.answer.indexOf('@gmail.com') < 0) {				errors['_summary'] = 'must be a gmail adress';			}			context.setErrors({ errors: errors })		}  },  onFieldChange: function(context) {     'custom_field_id-56789': function(context) {			context.setExtraHtml('This is a calculated value of ' + context.answer);		}  },  onValidate: function (result) {     // show error if result.valid === false  },  onSubmit: function (result) {    // make API call with result.answers  }})
```
<a name="onValidate"></a>

## onValidate : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| result | <code>Object</code> | A callback when a validation event has occurred |
| result.valid | <code>bool</code> | Indicates if the all questions in the form are valid |

<a name="onSubmit"></a>

## onSubmit : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| result | <code>Object</code> | A callback that is executed when `requestSubmit()` is called |
| result.valid | <code>bool</code> | Indicates if the all questions in the form are valid |
| result.answers | <code>Object</code> | The list of all the answers |
| result.errors | <code>Object</code> | The lsit of all the errors |

