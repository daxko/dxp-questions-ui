# Daxko Questions UI Library [![Build Status](https://travis-ci.org/daxko/dxp-questions-ui.svg?branch=master)](https://travis-ci.org/daxko/dxp-questions-ui) [![npm](https://img.shields.io/npm/v/dxp-questions-ui.svg)](https://www.npmjs.com/package/dxp-questions-ui)

> The `dxp-questions-ui` library renders questions and answers that are provided by the [Daxko Operations API](https://api.daxko.com/v3/docs/).

Feel free to use and submit issues and pull requests!

<!-- toc -->

* [Requirements](#requirements)
* [Development](#development)
* [Usage](#usage)
* [Question rendering examples](#question-rendering-examples)
  * [Text Question](#text-question)
    * [JSON](#json)
    * [HTML](#html)
  * [Name Question](#name-question)
    * [JSON](#json-1)
    * [HTML](#html-1)
  * [Checkbox Question](#checkbox-question)
    * [JSON](#json-2)
    * [HTML](#html-2)
  * [Phone Question](#phone-question)
    * [JSON](#json-3)
    * [HTML](#html-3)
  * [Radio Question](#radio-question)
    * [JSON](#json-4)
    * [HTML](#html-4)
  * [Date Question](#date-question)
    * [JSON](#json-5)
    * [HTML](#html-5)
  * [Address](#address)
    * [JSON](#json-6)
    * [HTML](#html-6)
* [Javascript API](#javascript-api)
  * [DxpQuestions](#dxpquestions)
    * [init](#init)
    * [render](#render)
    * [requestSubmit](#requestsubmit)
  * [onValidate](#onvalidate)
  * [onSubmit](#onsubmit)

<!-- tocstop -->

## Requirements

Install `node`

## Development

- `npm install -g webpack`  if you don't have webpack installed already
- `npm install`
- `npm start`

This will rebuild the dist/dxp-questions.js file whenever changes are made.

To test the changes:

- `npm install -g httpster` if you don't have httpster installed
- `npm run example` in new console in this dir
- Go to <http://localhost:3333/example>

## Usage

Required libraries that need to be included before including dxp-questions-min.js. See `example/index.html` for example of how to use.

```html
    <!-- css for pickadate -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.date.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.css">

    <!-- jquery -->
    <script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.1.min.js"></script>
    <!-- pickadate calendar -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/picker.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/picker.date.js"></script>
    <!-- masked input plugin -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.min.js"></script>
```

## Question rendering examples

### Text Question

#### JSON

```json
"childcare_text-3358860": {
    "type": "text",
    "title": "Sample text question",
    "description": "Please answer this question honestly",
    "required": true,
    "read_only": false,
    "max_length": 255
}
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">Sample text question
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text">Please answer this question honestly</small>
    <div class="dxp-question-body">
        <input type="text" maxlength="255" value="" class="">
    </div>
</div>
```

### Name Question

#### JSON

```json
"childcare_name-886886": {
    "type": "name",
    "title": "What is your mom's name?",
    "description": null,
    "required": true,
    "read_only": false,
    "show_first": true,
    "show_middle": true,
    "show_last": true,
    "show_prefix": true,
    "show_suffix": true,
    "prefixes": [
        {
            "id": "Mr.",
            "value": "Mr."
        },
        {
            "id": "Ms.",
            "value": "Ms."
        },
        ...
    ],
    "suffixes": [
        {
            "id": "Jr.",
            "value": "Jr."
        },
        {
            "id": "Sr.",
            "value": "Sr."
        },
        ...
    ]
}
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        What is your mom's name?
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-name-question">
            <div class="dxp-name-prefix">
                <label class="dxp-name-prefix-label">Prefix</label>
                <select class="dxp-name-prefix-select">
                    <option></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    ...
                </select>
            </div>
            <div class="dxp-name-first">
                <label class="dxp-name-first-label">First</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-name-middle">
                <label class="dxp-name-middle-label">Middle</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-name-last">
                <label class="dxp-name-last-label">Last</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-name-suffix">
                <label class="dxp-name-suffix-label">Suffix</label>
                <select class="dxp-name-suffix-select">
                    <option></option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                    ...
                </select>
            </div>
        </div>
    </div>
</div>
```

### Checkbox Question

#### JSON

```json
"childcare_checkboxes-944944": {
    "type": "checkboxes",
    "title": "A Multivalue with fees due at first instance",
    "description": null,
    "required": true,
    "read_only": false,
    "default_value": null,
    "possible_answers": [
        {
            "id": "childcare_945945",
            "value": "1",
            "amount": 100.0000,
            "metadata": {},
            "display_value": "1 - $100.00"
        },
        {
            "id": "childcare_945946",
            "value": "2",
            "amount": 200.0000,
            "metadata": {},
            "display_value": "2 - $200.00"
        },
        {
            "id": "childcare_945947",
            "value": "3",
            "amount": 300.0000,
            "metadata": {},
            "display_value": "3 - $300.00"
        }
    ]
}
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        A Multivalue with fees due at first instance
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-checkbox">
            <label>
                <input type="checkbox" name="childcare_checkboxes-944944" value="childcare_945945">
                1 - $100.00
            </label>
            <label>
                <input type="checkbox" name="childcare_checkboxes-944944" value="childcare_945946">
                2 - $200.00
            </label>
            <label>
                <input type="checkbox" name="childcare_checkboxes-944944" value="childcare_945947">
                3 - $300.00
            </label>
        </div>
    </div>
</div>
```

### Phone Question

#### JSON

```json
"childcare_phone-3358355": {
    "type": "phone",
    "title": "Phone",
    "description": "Phone number",
    "required": true,
    "read_only": false,
    "max_length": null,
    "show_extension": true,
    "intl": true
}
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        A Multivalue with fees due at first instance
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-checkbox">
            <label>
                <input type="checkbox"
                    name="childcare_checkboxes-944944"
                    value="childcare_945945">
                1 - $100.00
            </label>
            <label>
                <input type="checkbox"
                    name="childcare_checkboxes-944944"
                    value="childcare_945946">
                2 - $200.00
            </label>
            <label>
                <input type="checkbox"
                    name="childcare_checkboxes-944944"
                    value="childcare_945947">
                3 - $300.00
            </label>
        </div>
    </div>
</div>
```

### Radio Question

#### JSON

```json
"childcare_radio-866867": {
    "type": "radio",
    "title": "What is your gender?",
    "description": "Please answer honestly",
    "required": true,
    "read_only": false,
    "default_value": null,
    "possible_answers": [
        {
            "id": "childcare_867867",
            "value": "Male",
            "amount": null,
            "metadata": {},
            "display_value": "Male"
        },
        {
            "id": "childcare_867868",
            "value": "Female",
            "amount": null,
            "metadata": {},
            "display_value": "Female"
        }
    ]
}
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        What is your gender?
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text">Please answer honestly</small>
    <div class="dxp-question-body">
        <div class="dxp-radio">
            <label>
                <input type="radio"
                    name="childcare_radio-866867"
                    value="childcare_867867"
                    class="">
                Male
            </label>
            <label>
                <input type="radio"
                    name="childcare_radio-866867"
                    value="childcare_867868"
                    class="">
                Female
            </label>
        </div>
    </div>
</div>
```

### Date Question

#### JSON

```json
"childcare_datetime-886887": {
    "type": "date",
    "title": "When is your dog's birth date?",
    "description": "If you don't have a dog, lie.",
    "required": true,
    "read_only": false,
    "max_length": null
  }
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        When is your dog's birth date?
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text">If you don't have a dog, lie.</small>
    <div class="dxp-question-body">
        <div>
            <input type="text" class="datepicker-input" placeholder="MM/DD/YYYY" maxlength="10" value="" id="P1494944068" aria-haspopup="true"
                aria-expanded="false" aria-readonly="false" aria-owns="P1494944068_root">
            <div class="datepicker-wrap" id="P1494944068_root" aria-hidden="true">
                <!-- date-picker internals -->
            </div>
            <a class="datepicker-icon">
                <!-- date-picker internals -->
            </a>
        </div>
    </div>
</div>
```

### Address

#### JSON

```json
"program_address-212431": {
    "type": "address",
    "title": "Home Address",
    "description": "",
    "required": true,
    "read_only": false,
    "ca_provinces": [
      {
        "id": "AB",
        "name": "Alberta"
      },
      {
        "id": "BC",
        "name": "British Columbia"
      },
      ...
    ],
    "countries": [
      {
        "id": "AF",
        "name": "Afghanistan"
      },
      {
        "id": "AL",
        "name": "Albania"
      },
      {
        "id": "DZ",
        "name": "Algeria"
      },
      ...,
      {
        "id": "US",
        "name": "United States"
      },
      ...
    ],
    "intl": true
  }
```

#### HTML

```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Home Address
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-name-question">
            <div class="dxp-address-line1">
                <label>Address Line 1</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-address-line2">
                <label>Address Line 2</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-address-city">
                <label>City</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-address-state">
                <label>State</label>
                <select class="">
                    <option value="">-Select One-</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    ...
                </select>
            </div>
            <div class="dxp-address-zip">
                <label>Zip Code</label>
                <input type="tel" placeholder="" maxlength="10" class="" value="">
            </div>
            <div class="dxp-address-country">
                <label>Country</label>
                <select class="">
                    <option></option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    ...
                    <option value="US">United States</option>
                    ...
                </select>
            </div>
        </div>
    </div>
</div>
```

## Javascript API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### DxpQuestions

DxpQuestions class

**Parameters**

-   `params`

#### init

Initialize a new form that will render questions and answers

**Parameters**

-   `params` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The parameters used to initialize the form
    -   `params.questions` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A list of questions to render
    -   `params.answers` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A list of answers to render
    -   `params.container` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The HTML element that will contain the rendered form
    -   `params.onValidate` **[onValidate](#onvalidate)** A callback function that is called everytime an answer is validated
    -   `params.onSubmit` **[onSubmit](#onsubmit)** A callback function that is called when the `submitRequest()` method is called on the form

**Examples**

```javascript
var form = DxpQuestions.init({
  questions: // questions object here,
  answers: // answers object here,
  container: document.getElementById('container'),
  onValidate: function (result) {
    // show error if resul.valid === false
  },
  onSubmit: function (result) {
    // make API call with result.answers
  }
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** An instance of the form

#### render

Renders the form

**Examples**

```javascript
var form = DxpQuestions.init(// params);
form.render();
```

#### requestSubmit

When called, calls the function that submits the form

**Examples**

```javascript
var form = DxpQuestions.init(// params);
form.requestSubmit();
```

### onValidate

Type: [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `result` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A callback when a validation event has occurred
    -   `result.valid` **bool** Indicates if the all questions in the form are valid

### onSubmit

Type: [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `result` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A callback that is executed when `requestSubmit()` is called
    -   `result.valid` **bool** Indicates if the all questions in the form are valid
    -   `result.answers` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The list of all the answers
    -   `result.errors` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The lsit of all the errors
