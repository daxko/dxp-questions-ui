# Daxko Questions UI Library
[![Build Status](https://travis-ci.org/daxko/dxp-questions-ui.svg?branch=master)](https://travis-ci.org/daxko/dxp-questions-ui) [![npm](https://img.shields.io/npm/v/dxp-questions-ui.svg)](https://www.npmjs.com/package/dxp-questions-ui)

> The `dxp-questions-ui` library renders questions and answers that are provided by the [Daxko Operations API](https://api.daxko.com/v3/docs/).

Feel free to use and submit issues and pull requests!

<!-- !toc -->

* [Daxko Questions UI Library](#daxko-questions-ui-library)
  * [Installation](#installation)
  * [Development](#development)
  * [Usage](#usage)
  * [Question rendering examples](#question-rendering-examples)
    * [Address](#address)
    * [Checkbox Question](#checkbox-question)
    * [Date Question](#date-question)
    * [Dropdown Question](#dropdown-question)
    * [Email Question](#email-question)
    * [Name Question](#name-question)
    * [Phone Question](#phone-question)
    * [Radio Question](#radio-question)
    * [Text Question](#text-question)
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

## Installation

* `npm install dxp-questions-ui`
* Download latest release from [Github](https://github.com/daxko/dxp-questions-ui/releases/latest)

## Development

* Install `node`
* `npm install -g webpack` if you don't have webpack installed already
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
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.date.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.css">

<!-- jquery -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- pickadate calendar -->
<script src="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/picker.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/picker.date.js"></script>
<!-- masked input plugin -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.min.js"></script>

<!-- dxp-questions ui library -->
<script src="https://cdn.rawgit.com/daxko/dxp-questions-ui/master/dist/dxp-questions-min.js"></script>
```
<!-- /include -->

## Question rendering examples

### Address

#### JSON

<!-- include (snippets/json/address_question.json lang=json) -->
```json
{
  "type": "address",
  "title": "Home Address",
  "description": "This is where your t-shirt will be shipped to.",
  "required": true,
  "read_only": false,
  "ca_provinces": [{
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
  "countries": [{
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
    <small class="dxp-question-help-text">This is where your t-shirt will be shipped to.</small>
    <div class="dxp-question-body">
        <div class="dxp-name-question">
            <div class="dxp-address-line1" title="is required.">
                <label>Address Line 1</label>
                <input type="text" maxlength="50" class="dxp-field-error" value="">
                <div class="dxp-error-description">is required.</div>
            </div>
            <div class="dxp-address-line2">
                <label>Address Line 2</label>
                <input type="text" maxlength="50" class="" value="">
            </div>
            <div class="dxp-address-city" title="is required.">
                <label>City</label>
                <input type="text" maxlength="50" class="dxp-field-error" value="">
                <div class="dxp-error-description">is required.</div>
            </div>
            <div class="dxp-address-state">
                <label>Province/Region</label>
                <input type="text" maxlength="50" class="" value="AL">
            </div>
            <div class="dxp-address-zip" title="is required.">
                <label>Postal Code</label>
                <input type="text" placeholder="" maxlength="15" class="dxp-field-error" value="">
                <div class="dxp-error-description">is required.</div>
            </div>
            <div class="dxp-address-country">
                <label>Country</label>
                <select class="">
                    <option></option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua And Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia And Herzegowina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, The Democratic Republic Of The</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'ivoire</option>
                    <option value="HR">Croatia (Local Name: Hrvatska)</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="TP">East Timor</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="FX">France, Metropolitan</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard And McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran (Islamic Republic Of)</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic Of</option>
                    <option value="KR">Korea, Republic Of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau</option>
                    <option value="MK">Macedonia, Former Yugoslav Republic Of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States Of</option>
                    <option value="MD">Moldova, Republic Of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="KN">Saint Kitts And Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="VC">Saint Vincent And The Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome And Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia (Slovak Republic)</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia/South Sandwich Islands</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SH">St. Helena</option>
                    <option value="PM">St. Pierre And Miquelon</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard And Jan Mayen Islands</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province Of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic Of</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad And Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks And Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="US">United States</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands (British)</option>
                    <option value="VI">Virgin Islands (U.S.)</option>
                    <option value="WF">Wallis And Futuna Islands</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="YU">Yugoslavia</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
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
    "title": "What other sports have you participated in?",
    "description": "",
    "required": false,
    "read_only": false,
    "possible_answers": [{
            "id": "childcare_possible_answer-103475",
            "value": "Soccer",
            "display_value": "Soccer"
        },
        {
            "id": "childcare_possible_answer-103476",
            "value": "Basketball",
            "display_value": "Basketball"
        },
        {
            "id": "childcare_possible_answer-103477",
            "value": "Swimming",
            "display_value": "Swimming"
        },
        {
            "id": "childcare_possible_answer-103478",
            "value": "Football",
            "display_value": "Football"
        }
    ],
    "hide_empty_option": false,
    "empty_value": ""
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/checkbox_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        What other sports have you participated in?
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-checkbox">
            <label>
                <input type="checkbox" name="childcare_answerlist-211432" value="childcare_possible_answer-103475">
                Soccer
            </label>
            <label>
                <input type="checkbox" name="childcare_answerlist-211432" value="childcare_possible_answer-103476">
                Basketball
            </label>
            <label>
                <input type="checkbox" name="childcare_answerlist-211432" value="childcare_possible_answer-103477">
                Swimming
            </label>
            <label>
                <input type="checkbox" name="childcare_answerlist-211432" value="childcare_possible_answer-103478">
                Football
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
  "title": "What is your birthdate?",
  "description": "This is required to determine eligibility.",
  "required": true,
  "read_only": false
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/date_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Birthdate
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div>
            <input type="text" class="datepicker-input" placeholder="MM/DD/YYYY" maxlength="10" value="" id="P1267363601" aria-haspopup="true"
                aria-expanded="false" aria-readonly="false" aria-owns="P1267363601_root">
            <div class="datepicker-wrap" id="P1267363601_root" aria-hidden="true">
                <!-- datepicker.js internals -->
            </div>
            <a class="datepicker-icon">
                <!-- datepicker.js internals -->
            </a>
        </div>
    </div>
</div>
```
<!-- /include -->

### Dropdown Question

#### JSON

<!-- include (snippets/json/dropdown_question.json lang=json) -->
```json
{
  "type": "dropdown",
  "title": "Gender",
  "description": "",
  "required": true,
  "read_only": false,
  "default_value": "U",
  "possible_answers": [{
      "id": "U",
      "value": "Unspecified",
      "display_value": "Unspecified"
    },
    {
      "id": "M",
      "value": "Male",
      "display_value": "Male"
    },
    {
      "id": "F",
      "value": "Female",
      "display_value": "Female"
    }
  ],
  "hide_empty_option": true,
  "empty_value": "U"
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/dropdown_question.html lang=html) -->
```html
<div class="dxp-question-container">
  <label class="dxp-question-title">
    Gender
    <span class="dxp-required-indicator">*</span>
  </label>
  <small class="dxp-question-help-text"></small>
  <div class="dxp-question-body">
    <div class="dxp-dropdown">
      <select class="">
        <option value="U">Unspecified</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
  </div>
</div>
```
<!-- /include -->

### Email Question

#### JSON

<!-- include (snippets/json/email_question.json lang=json) -->
```json
{
  "type": "email",
  "title": "E-mail address",
  "description": "We will not send unsolicited emails.",
  "required": true,
  "read_only": false,
  "max_length": 100,
  "pattern": "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/email_question.html lang=html) -->
```html
<div class="dxp-question-container">
  <label class="dxp-question-title">
    E-mail address
    <span class="dxp-required-indicator">*</span>
  </label>
  <small class="dxp-question-help-text">We will not send you any unsolicited email.</small>
  <div class="dxp-question-body">
    <input type="text" maxlength="100" value="" class="">
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
    "title": "Participant Name",
    "description": "Please provide the name given on your birth certificate",
    "required": true,
    "read_only": false,
    "show_first": true,
    "show_middle": true,
    "show_last": true,
    "show_prefix": true,
    "show_suffix": true,
    "required_first": true,
    "required_middle": false,
    "required_last": true,
    "prefixes": [{
            "id": "Mr.",
            "value": "Mr."
        },
        {
            "id": "Ms.",
            "value": "Ms."
        },
        {
            "id": "Mrs.",
            "value": "Mrs."
        },
        {
            "id": "Miss",
            "value": "Miss"
        },
        {
            "id": "Dr.",
            "value": "Dr."
        },
        {
            "id": "Rev.",
            "value": "Rev."
        },
        {
            "id": "Rab.",
            "value": "Rab."
        },
        {
            "id": "Can.",
            "value": "Can."
        },
        {
            "id": "Hon.",
            "value": "Hon."
        }
    ],
    "suffixes": [{
            "id": "Jr.",
            "value": "Jr."
        },
        {
            "id": "Sr.",
            "value": "Sr."
        },
        {
            "id": "I",
            "value": "I"
        },
        {
            "id": "II",
            "value": "II"
        },
        {
            "id": "III",
            "value": "III"
        },
        {
            "id": "IV",
            "value": "IV"
        },
        {
            "id": "V",
            "value": "V"
        }
    ]
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/name_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Participant Name
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text">Please provide the name given on your birth certificate.</small>
    <div class="dxp-question-body">
        <div class="dxp-name-question">
            <div class="dxp-name-prefix">
                <label class="dxp-name-prefix-label">Prefix</label>
                <select class="dxp-name-prefix-select">
                    <option></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Rev.">Rev.</option>
                    <option value="Rab.">Rab.</option>
                    <option value="Can.">Can.</option>
                    <option value="Hon.">Hon.</option>
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
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                </select>
            </div>
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
  "title": "Home Phone",
  "description": "This will be used in case of any emergencies.",
  "required": true,
  "read_only": false,
  "show_extension": true,
  "intl": false
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/phone_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Home Phone
        <span class="dxp-required-indicator">*</span>
    </label>
    <small class="dxp-question-help-text">This will be used in case of any emergencies.</small>
    <div class="dxp-question-body">
        <div class="dxp-phone-question">
            <div class="dxp-phone-number">
                <input type="tel" class="" maxlength="14" value="">
            </div>
            <div class="dxp-phone-ext-container">
                <label class="dxp-phone-ext-label">Ext.</label>
                <div class="dxp-phone-ext">
                    <input type="text" maxlength="5" class="" value="">
                </div>
            </div>
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
    "title": "Have you participated in this program before?",
    "description": "",
    "required": false,
    "read_only": false,
    "default_value": null,
    "possible_answers": [{
            "id": "childcare_possible_answer-103473",
            "value": "Yes",
            "display_value": "Yes"
        },
        {
            "id": "childcare_possible_answer-103474",
            "value": "No",
            "display_value": "No"
        }
    ],
    "hide_empty_option": false,
    "empty_value": ""
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/radio_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Have you participated in this program before?
    </label>
    <small class="dxp-question-help-text"></small>
    <div class="dxp-question-body">
        <div class="dxp-radio">
            <label>
                <input type="radio" name="childcare_answerlist-211427" value="childcare_possible_answer-103473" class="">
                Yes
            </label>
            <label>
                <input type="radio" name="childcare_answerlist-211427" value="childcare_possible_answer-103474" class="">
                No
            </label>
        </div>
    </div>
</div>
```
<!-- /include -->

### Text Question

#### JSON

<!-- include (snippets/json/text_question.json lang=json) -->
```json
{
  "type": "text",
  "title": "Please specify any food allergies",
  "description": "For example, peanuts, dairy, eggs, gluten, wheat, etc.",
  "required": false,
  "read_only": false,
  "max_length": 50
}
```
<!-- /include -->

#### HTML

<!-- include (snippets/html/text_question.html lang=html) -->
```html
<div class="dxp-question-container">
    <label class="dxp-question-title">
        Please specify any food allergies?
    </label>
    <small class="dxp-question-help-text">For example, peanuts, dairy, eggs, gluten, wheat, etc.</small>
    <div class="dxp-question-body">
        <input type="text" maxlength="50" value="" class="">
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

