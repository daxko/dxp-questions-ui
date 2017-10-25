# Daxko Questions UI Library
[![Build Status](https://travis-ci.org/daxko/dxp-questions-ui.svg?branch=master)](https://travis-ci.org/daxko/dxp-questions-ui) [![npm](https://img.shields.io/npm/v/dxp-questions-ui.svg)](https://www.npmjs.com/package/dxp-questions-ui)

> The `dxp-questions-ui` library renders questions and answers that are provided by the [Daxko Operations API](https://api.daxko.com/v3/docs/).

Feel free to use and submit issues and pull requests!

<!-- !toc -->

* [Daxko Questions UI Library](#daxko-questions-ui-library)
  * [Requirements](#requirements)
  * [Development](#development)
  * [Usage](#usage)
  * [Question rendering examples](#question-rendering-examples)
    * [Text Question](#text-question)
    * [Name Question](#name-question)
    * [Checkbox Question](#checkbox-question)
    * [Phone Question](#phone-question)
    * [Radio Question](#radio-question)
    * [Date Question](#date-question)
    * [Address](#address)
* [Javascript API](#javascript-api)
  * [Classes](#classes)
  * [Typedefs](#typedefs)
  * [DxpQuestions](#dxpquestions)
    * [new DxpQuestions()](#new-dxpquestions-)
    * [dxpQuestions.render()](#dxpquestions-render-)
    * [dxpQuestions.requestSubmit()](#dxpquestions-requestsubmit-)
    * [DxpQuestions.init(params) ⇒ <code>Object</code>](#dxpquestions-init-params-code-object-code-)
  * [onValidate : <code>function</code>](#onvalidate-code-function-code-)
  * [onSubmit : <code>function</code>](#onsubmit-code-function-code-)

<!-- toc! -->

## Requirements

Install `node`

## Development

* `npm install -g webpack`  if you don't have webpack installed already
* `npm install`
* `npm start`

This will rebuild the dist/dxp-questions.js file whenever changes are made.

To test the changes:

* `npm install -g httpster` if you don't have httpster installed
* `npm run example` in new console in this dir
* Go to <http://localhost:3333/example>

## Usage

Required libraries that need to be included before including dxp-questions-min.js. See `example/index.html` for example of how to use.

<!-- include (snippets/html/usage.html lang=html) -->
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
<!-- /include -->

## Question rendering examples

### Text Question

#### JSON

<!-- include (snippets/json/text_question.json lang=json) -->
```json
{
  "type": "text",
  "title": "Sample text question",
  "description": "Please answer this question honestly",
  "required": true,
  "read_only": false,
  "max_length": 255
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/text_question.html lang=html) -->
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
<!-- /include -->

### Name Question

#### JSON

<!-- include (snippets/json/name_question.json lang=json) -->
```json
{
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
<!-- /include -->

#### HTML

<!-- include (snippets/html/name_question.html lang=html) -->
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
<!-- /include -->

### Checkbox Question

#### JSON

<!-- include (snippets/json/checkbox_question.json lang=json) -->
```json
{
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
<!-- /include -->

#### HTML

<!-- include (snippets/html/checkbox_question.html lang=html) -->
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
<!-- /include -->

### Phone Question

#### JSON

<!-- include (snippets/json/phone_question.json lang=json) -->
```json
{
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
<!-- /include -->

#### HTML

<!-- include (snippets/html/phone_question.html lang=html) -->
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
<!-- /include -->

### Radio Question

#### JSON

<!-- include (snippets/json/radio_question.json lang=json) -->
```json
{
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
<!-- /include -->

#### HTML

<!-- include (snippets/html/radio_question.html lang=html) -->
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
<!-- /include -->

### Date Question

#### JSON

<!-- include (snippets/json/date_question.json lang=json) -->
```json
{
  "type": "date",
  "title": "When is your dog's birth date?",
  "description": "If you don't have a dog, lie.",
  "required": true,
  "read_only": false,
  "max_length": null
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/date_question.html lang=html) -->
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
<!-- /include -->

### Address

#### JSON

<!-- include (snippets/json/address_question.json lang=json) -->
```json
{
  "type": "address",
  "title": "Home Address",
  "description": "Please provide your current home address",
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
    {
      "id": "MB",
      "name": "Manitoba"
    },
    {
      "id": "NB",
      "name": "New Brunswick"
    },
    {
      "id": "NL",
      "name": "Newfoundland and Labrador"
    },
    {
      "id": "NT",
      "name": "Northwest Territories"
    },
    {
      "id": "NS",
      "name": "Nova Scotia"
    },
    {
      "id": "NU",
      "name": "Nunavut"
    },
    {
      "id": "ON",
      "name": "Ontario"
    },
    {
      "id": "PE",
      "name": "Prince Edward Island"
    },
    {
      "id": "QC",
      "name": "Quebec"
    },
    {
      "id": "SK",
      "name": "Saskatchewan"
    },
    {
      "id": "YT",
      "name": "Yukon"
    }
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
    {
      "id": "AS",
      "name": "American Samoa"
    },
    {
      "id": "AD",
      "name": "Andorra"
    },
    {
      "id": "AO",
      "name": "Angola"
    },
    {
      "id": "AI",
      "name": "Anguilla"
    },
    {
      "id": "AQ",
      "name": "Antarctica"
    },
    {
      "id": "AG",
      "name": "Antigua And Barbuda"
    },
    {
      "id": "AR",
      "name": "Argentina"
    },
    {
      "id": "AM",
      "name": "Armenia"
    },
    {
      "id": "AW",
      "name": "Aruba"
    },
    {
      "id": "AU",
      "name": "Australia"
    },
    {
      "id": "AT",
      "name": "Austria"
    },
    {
      "id": "AZ",
      "name": "Azerbaijan"
    },
    {
      "id": "BS",
      "name": "Bahamas"
    },
    {
      "id": "BH",
      "name": "Bahrain"
    },
    {
      "id": "BD",
      "name": "Bangladesh"
    },
    {
      "id": "BB",
      "name": "Barbados"
    },
    {
      "id": "BY",
      "name": "Belarus"
    },
    {
      "id": "BE",
      "name": "Belgium"
    },
    {
      "id": "BZ",
      "name": "Belize"
    },
    {
      "id": "BJ",
      "name": "Benin"
    },
    {
      "id": "BM",
      "name": "Bermuda"
    },
    {
      "id": "BT",
      "name": "Bhutan"
    },
    {
      "id": "BO",
      "name": "Bolivia"
    },
    {
      "id": "BA",
      "name": "Bosnia And Herzegowina"
    },
    {
      "id": "BW",
      "name": "Botswana"
    },
    {
      "id": "BV",
      "name": "Bouvet Island"
    },
    {
      "id": "BR",
      "name": "Brazil"
    },
    {
      "id": "IO",
      "name": "British Indian Ocean Territory"
    },
    {
      "id": "BN",
      "name": "Brunei Darussalam"
    },
    {
      "id": "BG",
      "name": "Bulgaria"
    },
    {
      "id": "BF",
      "name": "Burkina Faso"
    },
    {
      "id": "BI",
      "name": "Burundi"
    },
    {
      "id": "KH",
      "name": "Cambodia"
    },
    {
      "id": "CM",
      "name": "Cameroon"
    },
    {
      "id": "CA",
      "name": "Canada"
    },
    {
      "id": "CV",
      "name": "Cape Verde"
    },
    {
      "id": "KY",
      "name": "Cayman Islands"
    },
    {
      "id": "CF",
      "name": "Central African Republic"
    },
    {
      "id": "TD",
      "name": "Chad"
    },
    {
      "id": "CL",
      "name": "Chile"
    },
    {
      "id": "CN",
      "name": "China"
    },
    {
      "id": "CX",
      "name": "Christmas Island"
    },
    {
      "id": "CC",
      "name": "Cocos (Keeling) Islands"
    },
    {
      "id": "CO",
      "name": "Colombia"
    },
    {
      "id": "KM",
      "name": "Comoros"
    },
    {
      "id": "CG",
      "name": "Congo"
    },
    {
      "id": "CD",
      "name": "Congo, The Democratic Republic Of The"
    },
    {
      "id": "CK",
      "name": "Cook Islands"
    },
    {
      "id": "CR",
      "name": "Costa Rica"
    },
    {
      "id": "CI",
      "name": "Cote D'ivoire"
    },
    {
      "id": "HR",
      "name": "Croatia (Local Name: Hrvatska)"
    },
    {
      "id": "CU",
      "name": "Cuba"
    },
    {
      "id": "CY",
      "name": "Cyprus"
    },
    {
      "id": "CZ",
      "name": "Czech Republic"
    },
    {
      "id": "DK",
      "name": "Denmark"
    },
    {
      "id": "DJ",
      "name": "Djibouti"
    },
    {
      "id": "DM",
      "name": "Dominica"
    },
    {
      "id": "DO",
      "name": "Dominican Republic"
    },
    {
      "id": "TP",
      "name": "East Timor"
    },
    {
      "id": "EC",
      "name": "Ecuador"
    },
    {
      "id": "EG",
      "name": "Egypt"
    },
    {
      "id": "SV",
      "name": "El Salvador"
    },
    {
      "id": "GQ",
      "name": "Equatorial Guinea"
    },
    {
      "id": "ER",
      "name": "Eritrea"
    },
    {
      "id": "EE",
      "name": "Estonia"
    },
    {
      "id": "ET",
      "name": "Ethiopia"
    },
    {
      "id": "FK",
      "name": "Falkland Islands (Malvinas)"
    },
    {
      "id": "FO",
      "name": "Faroe Islands"
    },
    {
      "id": "FJ",
      "name": "Fiji"
    },
    {
      "id": "FI",
      "name": "Finland"
    },
    {
      "id": "FR",
      "name": "France"
    },
    {
      "id": "FX",
      "name": "France, Metropolitan"
    },
    {
      "id": "GF",
      "name": "French Guiana"
    },
    {
      "id": "PF",
      "name": "French Polynesia"
    },
    {
      "id": "TF",
      "name": "French Southern Territories"
    },
    {
      "id": "GA",
      "name": "Gabon"
    },
    {
      "id": "GM",
      "name": "Gambia"
    },
    {
      "id": "GE",
      "name": "Georgia"
    },
    {
      "id": "DE",
      "name": "Germany"
    },
    {
      "id": "GH",
      "name": "Ghana"
    },
    {
      "id": "GI",
      "name": "Gibraltar"
    },
    {
      "id": "GR",
      "name": "Greece"
    },
    {
      "id": "GL",
      "name": "Greenland"
    },
    {
      "id": "GD",
      "name": "Grenada"
    },
    {
      "id": "GP",
      "name": "Guadeloupe"
    },
    {
      "id": "GU",
      "name": "Guam"
    },
    {
      "id": "GT",
      "name": "Guatemala"
    },
    {
      "id": "GN",
      "name": "Guinea"
    },
    {
      "id": "GW",
      "name": "Guinea-bissau"
    },
    {
      "id": "GY",
      "name": "Guyana"
    },
    {
      "id": "HT",
      "name": "Haiti"
    },
    {
      "id": "HM",
      "name": "Heard And McDonald Islands"
    },
    {
      "id": "VA",
      "name": "Holy See (Vatican City State)"
    },
    {
      "id": "HN",
      "name": "Honduras"
    },
    {
      "id": "HK",
      "name": "Hong Kong"
    },
    {
      "id": "HU",
      "name": "Hungary"
    },
    {
      "id": "IS",
      "name": "Iceland"
    },
    {
      "id": "IN",
      "name": "India"
    },
    {
      "id": "ID",
      "name": "Indonesia"
    },
    {
      "id": "IR",
      "name": "Iran (Islamic Republic Of)"
    },
    {
      "id": "IQ",
      "name": "Iraq"
    },
    {
      "id": "IE",
      "name": "Ireland"
    },
    {
      "id": "IL",
      "name": "Israel"
    },
    {
      "id": "IT",
      "name": "Italy"
    },
    {
      "id": "JM",
      "name": "Jamaica"
    },
    {
      "id": "JP",
      "name": "Japan"
    },
    {
      "id": "JO",
      "name": "Jordan"
    },
    {
      "id": "KZ",
      "name": "Kazakhstan"
    },
    {
      "id": "KE",
      "name": "Kenya"
    },
    {
      "id": "KI",
      "name": "Kiribati"
    },
    {
      "id": "KP",
      "name": "Korea, Democratic People's Republic Of"
    },
    {
      "id": "KR",
      "name": "Korea, Republic Of"
    },
    {
      "id": "KW",
      "name": "Kuwait"
    },
    {
      "id": "KG",
      "name": "Kyrgyzstan"
    },
    {
      "id": "LA",
      "name": "Lao People's Democratic Republic"
    },
    {
      "id": "LV",
      "name": "Latvia"
    },
    {
      "id": "LB",
      "name": "Lebanon"
    },
    {
      "id": "LS",
      "name": "Lesotho"
    },
    {
      "id": "LR",
      "name": "Liberia"
    },
    {
      "id": "LY",
      "name": "Libyan Arab Jamahiriya"
    },
    {
      "id": "LI",
      "name": "Liechtenstein"
    },
    {
      "id": "LT",
      "name": "Lithuania"
    },
    {
      "id": "LU",
      "name": "Luxembourg"
    },
    {
      "id": "MO",
      "name": "Macau"
    },
    {
      "id": "MK",
      "name": "Macedonia, Former Yugoslav Republic Of"
    },
    {
      "id": "MG",
      "name": "Madagascar"
    },
    {
      "id": "MW",
      "name": "Malawi"
    },
    {
      "id": "MY",
      "name": "Malaysia"
    },
    {
      "id": "MV",
      "name": "Maldives"
    },
    {
      "id": "ML",
      "name": "Mali"
    },
    {
      "id": "MT",
      "name": "Malta"
    },
    {
      "id": "MH",
      "name": "Marshall Islands"
    },
    {
      "id": "MQ",
      "name": "Martinique"
    },
    {
      "id": "MR",
      "name": "Mauritania"
    },
    {
      "id": "MU",
      "name": "Mauritius"
    },
    {
      "id": "YT",
      "name": "Mayotte"
    },
    {
      "id": "MX",
      "name": "Mexico"
    },
    {
      "id": "FM",
      "name": "Micronesia, Federated States Of"
    },
    {
      "id": "MD",
      "name": "Moldova, Republic Of"
    },
    {
      "id": "MC",
      "name": "Monaco"
    },
    {
      "id": "MN",
      "name": "Mongolia"
    },
    {
      "id": "MS",
      "name": "Montserrat"
    },
    {
      "id": "MA",
      "name": "Morocco"
    },
    {
      "id": "MZ",
      "name": "Mozambique"
    },
    {
      "id": "MM",
      "name": "Myanmar"
    },
    {
      "id": "NA",
      "name": "Namibia"
    },
    {
      "id": "NR",
      "name": "Nauru"
    },
    {
      "id": "NP",
      "name": "Nepal"
    },
    {
      "id": "NL",
      "name": "Netherlands"
    },
    {
      "id": "AN",
      "name": "Netherlands Antilles"
    },
    {
      "id": "NC",
      "name": "New Caledonia"
    },
    {
      "id": "NZ",
      "name": "New Zealand"
    },
    {
      "id": "NI",
      "name": "Nicaragua"
    },
    {
      "id": "NE",
      "name": "Niger"
    },
    {
      "id": "NG",
      "name": "Nigeria"
    },
    {
      "id": "NU",
      "name": "Niue"
    },
    {
      "id": "NF",
      "name": "Norfolk Island"
    },
    {
      "id": "MP",
      "name": "Northern Mariana Islands"
    },
    {
      "id": "NO",
      "name": "Norway"
    },
    {
      "id": "OM",
      "name": "Oman"
    },
    {
      "id": "PK",
      "name": "Pakistan"
    },
    {
      "id": "PW",
      "name": "Palau"
    },
    {
      "id": "PA",
      "name": "Panama"
    },
    {
      "id": "PG",
      "name": "Papua New Guinea"
    },
    {
      "id": "PY",
      "name": "Paraguay"
    },
    {
      "id": "PE",
      "name": "Peru"
    },
    {
      "id": "PH",
      "name": "Philippines"
    },
    {
      "id": "PN",
      "name": "Pitcairn"
    },
    {
      "id": "PL",
      "name": "Poland"
    },
    {
      "id": "PT",
      "name": "Portugal"
    },
    {
      "id": "PR",
      "name": "Puerto Rico"
    },
    {
      "id": "QA",
      "name": "Qatar"
    },
    {
      "id": "RE",
      "name": "Reunion"
    },
    {
      "id": "RO",
      "name": "Romania"
    },
    {
      "id": "RU",
      "name": "Russian Federation"
    },
    {
      "id": "RW",
      "name": "Rwanda"
    },
    {
      "id": "KN",
      "name": "Saint Kitts And Nevis"
    },
    {
      "id": "LC",
      "name": "Saint Lucia"
    },
    {
      "id": "VC",
      "name": "Saint Vincent And The Grenadines"
    },
    {
      "id": "WS",
      "name": "Samoa"
    },
    {
      "id": "SM",
      "name": "San Marino"
    },
    {
      "id": "ST",
      "name": "Sao Tome And Principe"
    },
    {
      "id": "SA",
      "name": "Saudi Arabia"
    },
    {
      "id": "SN",
      "name": "Senegal"
    },
    {
      "id": "SC",
      "name": "Seychelles"
    },
    {
      "id": "SL",
      "name": "Sierra Leone"
    },
    {
      "id": "SG",
      "name": "Singapore"
    },
    {
      "id": "SK",
      "name": "Slovakia (Slovak Republic)"
    },
    {
      "id": "SI",
      "name": "Slovenia"
    },
    {
      "id": "SB",
      "name": "Solomon Islands"
    },
    {
      "id": "SO",
      "name": "Somalia"
    },
    {
      "id": "ZA",
      "name": "South Africa"
    },
    {
      "id": "GS",
      "name": "South Georgia/South Sandwich Islands"
    },
    {
      "id": "ES",
      "name": "Spain"
    },
    {
      "id": "LK",
      "name": "Sri Lanka"
    },
    {
      "id": "SH",
      "name": "St. Helena"
    },
    {
      "id": "PM",
      "name": "St. Pierre And Miquelon"
    },
    {
      "id": "SD",
      "name": "Sudan"
    },
    {
      "id": "SR",
      "name": "Suriname"
    },
    {
      "id": "SJ",
      "name": "Svalbard And Jan Mayen Islands"
    },
    {
      "id": "SZ",
      "name": "Swaziland"
    },
    {
      "id": "SE",
      "name": "Sweden"
    },
    {
      "id": "CH",
      "name": "Switzerland"
    },
    {
      "id": "SY",
      "name": "Syrian Arab Republic"
    },
    {
      "id": "TW",
      "name": "Taiwan, Province Of China"
    },
    {
      "id": "TJ",
      "name": "Tajikistan"
    },
    {
      "id": "TZ",
      "name": "Tanzania, United Republic Of"
    },
    {
      "id": "TH",
      "name": "Thailand"
    },
    {
      "id": "TG",
      "name": "Togo"
    },
    {
      "id": "TK",
      "name": "Tokelau"
    },
    {
      "id": "TO",
      "name": "Tonga"
    },
    {
      "id": "TT",
      "name": "Trinidad And Tobago"
    },
    {
      "id": "TN",
      "name": "Tunisia"
    },
    {
      "id": "TR",
      "name": "Turkey"
    },
    {
      "id": "TM",
      "name": "Turkmenistan"
    },
    {
      "id": "TC",
      "name": "Turks And Caicos Islands"
    },
    {
      "id": "TV",
      "name": "Tuvalu"
    },
    {
      "id": "UG",
      "name": "Uganda"
    },
    {
      "id": "UA",
      "name": "Ukraine"
    },
    {
      "id": "AE",
      "name": "United Arab Emirates"
    },
    {
      "id": "GB",
      "name": "United Kingdom"
    },
    {
      "id": "UM",
      "name": "United States Minor Outlying Islands"
    },
    {
      "id": "US",
      "name": "United States"
    },
    {
      "id": "UY",
      "name": "Uruguay"
    },
    {
      "id": "UZ",
      "name": "Uzbekistan"
    },
    {
      "id": "VU",
      "name": "Vanuatu"
    },
    {
      "id": "VE",
      "name": "Venezuela"
    },
    {
      "id": "VN",
      "name": "Vietnam"
    },
    {
      "id": "VG",
      "name": "Virgin Islands (British)"
    },
    {
      "id": "VI",
      "name": "Virgin Islands (U.S.)"
    },
    {
      "id": "WF",
      "name": "Wallis And Futuna Islands"
    },
    {
      "id": "EH",
      "name": "Western Sahara"
    },
    {
      "id": "YE",
      "name": "Yemen"
    },
    {
      "id": "YU",
      "name": "Yugoslavia"
    },
    {
      "id": "ZM",
      "name": "Zambia"
    },
    {
      "id": "ZW",
      "name": "Zimbabwe"
    }
  ],
  "intl": true
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/address_question.html lang=html) -->
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
<!-- /include -->

# Javascript API

<!-- include (snippets/md/javascript_api.md) -->
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

* [DxpQuestions](#dxpquestions)
  * [new DxpQuestions()](#new_DxpQuestions_new)
  * _instance_
    * [.render()](#DxpQuestions+render)
    * [.requestSubmit()](#DxpQuestions+requestSubmit)
  * _static_
    * [.init(params)](#DxpQuestions.init) ⇒ <code>Object</code>

<a name="new_DxpQuestions_new"></a>

### new DxpQuestions()
DxpQuestions class

<a name="DxpQuestions+render"></a>

### dxpQuestions.render()
Renders the form

**Kind**: instance method of [<code>DxpQuestions</code>](#dxpquestions)  
**Example**  
```js
var form = DxpQuestions.init(// params);
form.render();
```
<a name="DxpQuestions+requestSubmit"></a>

### dxpQuestions.requestSubmit()
When called, calls the function that submits the form

**Kind**: instance method of [<code>DxpQuestions</code>](#dxpquestions)  
**Example**  
```js
var form = DxpQuestions.init(// params);
form.requestSubmit();
```
<a name="DxpQuestions.init"></a>

### DxpQuestions.init(params) ⇒ <code>Object</code>
Initialize a new form that will render questions and answers

**Kind**: static method of [<code>DxpQuestions</code>](#dxpquestions)  
**Returns**: <code>Object</code> - An instance of the form  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The parameters used to initialize the form |
| params.questions | <code>Array</code> | A list of questions to render |
| params.answers | <code>Array</code> | A list of answers to render |
| params.container | <code>Object</code> | The HTML element that will contain the rendered form |
| params.onValidate | [<code>onValidate</code>](#onValidate) | A callback function that is called everytime an answer is validated |
| params.onSubmit | [<code>onSubmit</code>](#onSubmit) | A callback function that is called when the `submitRequest()` method is called on the form |

**Example**  
```js
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

<!-- /include -->

