import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-15.4'
import AddressField from '../src/fields/AddressField'

configure({adapter: new Adapter() })

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<AddressField question={getQuestion()} />).exists())
  })

  it('should be selectable by class .dxp-name-question', () => {
    expect(shallow(<AddressField question={getQuestion()} />).is('.dxp-name-question')).toBe(true)
  })
})

function getQuestion() {
  return {
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
  }
}