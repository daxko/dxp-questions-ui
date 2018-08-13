var API_RESPONSE = {
  answers: {},
  questions: {
    sect_childcare_58736: {
      type: 'section',
      title: 'Section 1',
      description: 'Complete section 1 questions'
    },
    'childcare_password-211425': {
      type: 'password',
      title: 'Choose Password',
      description: '',
      required: true,
      read_only: false,
      max_length: 50
    },
    'childcare_name-211422': {
      type: 'name',
      title: 'Participant Name',
      description: 'Please provide the name given on your birth certificate.',
      required: true,
      read_only: false,
      show_first: true,
      show_middle: true,
      show_last: true,
      show_prefix: true,
      show_suffix: true,
      required_first: true,
      required_middle: false,
      required_last: true,
      prefixes: [
        {
          id: 'Mr.',
          value: 'Mr.'
        },
        {
          id: 'Ms.',
          value: 'Ms.'
        },
        {
          id: 'Mrs.',
          value: 'Mrs.'
        },
        {
          id: 'Miss',
          value: 'Miss'
        },
        {
          id: 'Dr.',
          value: 'Dr.'
        },
        {
          id: 'Rev.',
          value: 'Rev.'
        },
        {
          id: 'Rab.',
          value: 'Rab.'
        },
        {
          id: 'Can.',
          value: 'Can.'
        },
        {
          id: 'Hon.',
          value: 'Hon.'
        }
      ],
      suffixes: [
        {
          id: 'Jr.',
          value: 'Jr.'
        },
        {
          id: 'Sr.',
          value: 'Sr.'
        },
        {
          id: 'I',
          value: 'I'
        },
        {
          id: 'II',
          value: 'II'
        },
        {
          id: 'III',
          value: 'III'
        },
        {
          id: 'IV',
          value: 'IV'
        },
        {
          id: 'V',
          value: 'V'
        }
      ]
    },
    'childcare_phone-211423': {
      type: 'phone',
      title: 'Home Phone',
      description: 'This will be used in case of any emergencies.',
      required: true,
      read_only: false,
      show_extension: true,
      intl: false
    },
    'childcare_address-211430': {
      type: 'address',
      title: 'Home Address',
      description: 'This is where your t-shirt will be shipped to.',
      required: true,
      read_only: false,
      ca_provinces: [
        {
          id: 'AB',
          name: 'Alberta'
        },
        {
          id: 'BC',
          name: 'British Columbia'
        },
        {
          id: 'MB',
          name: 'Manitoba'
        },
        {
          id: 'NB',
          name: 'New Brunswick'
        },
        {
          id: 'NL',
          name: 'Newfoundland and Labrador'
        },
        {
          id: 'NT',
          name: 'Northwest Territories'
        },
        {
          id: 'NS',
          name: 'Nova Scotia'
        },
        {
          id: 'NU',
          name: 'Nunavut'
        },
        {
          id: 'ON',
          name: 'Ontario'
        },
        {
          id: 'PE',
          name: 'Prince Edward Island'
        },
        {
          id: 'QC',
          name: 'Quebec'
        },
        {
          id: 'SK',
          name: 'Saskatchewan'
        },
        {
          id: 'YT',
          name: 'Yukon'
        }
      ],
      countries: [
        {
          id: 'AF',
          name: 'Afghanistan'
        },
        {
          id: 'AL',
          name: 'Albania'
        },
        {
          id: 'DZ',
          name: 'Algeria'
        },
        {
          id: 'AS',
          name: 'American Samoa'
        },
        {
          id: 'AD',
          name: 'Andorra'
        },
        {
          id: 'AO',
          name: 'Angola'
        },
        {
          id: 'AI',
          name: 'Anguilla'
        },
        {
          id: 'AQ',
          name: 'Antarctica'
        },
        {
          id: 'AG',
          name: 'Antigua And Barbuda'
        },
        {
          id: 'AR',
          name: 'Argentina'
        },
        {
          id: 'AM',
          name: 'Armenia'
        },
        {
          id: 'AW',
          name: 'Aruba'
        },
        {
          id: 'AU',
          name: 'Australia'
        },
        {
          id: 'AT',
          name: 'Austria'
        },
        {
          id: 'AZ',
          name: 'Azerbaijan'
        },
        {
          id: 'BS',
          name: 'Bahamas'
        },
        {
          id: 'BH',
          name: 'Bahrain'
        },
        {
          id: 'BD',
          name: 'Bangladesh'
        },
        {
          id: 'BB',
          name: 'Barbados'
        },
        {
          id: 'BY',
          name: 'Belarus'
        },
        {
          id: 'BE',
          name: 'Belgium'
        },
        {
          id: 'BZ',
          name: 'Belize'
        },
        {
          id: 'BJ',
          name: 'Benin'
        },
        {
          id: 'BM',
          name: 'Bermuda'
        },
        {
          id: 'BT',
          name: 'Bhutan'
        },
        {
          id: 'BO',
          name: 'Bolivia'
        },
        {
          id: 'BA',
          name: 'Bosnia And Herzegowina'
        },
        {
          id: 'BW',
          name: 'Botswana'
        },
        {
          id: 'BV',
          name: 'Bouvet Island'
        },
        {
          id: 'BR',
          name: 'Brazil'
        },
        {
          id: 'IO',
          name: 'British Indian Ocean Territory'
        },
        {
          id: 'BN',
          name: 'Brunei Darussalam'
        },
        {
          id: 'BG',
          name: 'Bulgaria'
        },
        {
          id: 'BF',
          name: 'Burkina Faso'
        },
        {
          id: 'BI',
          name: 'Burundi'
        },
        {
          id: 'KH',
          name: 'Cambodia'
        },
        {
          id: 'CM',
          name: 'Cameroon'
        },
        {
          id: 'CA',
          name: 'Canada'
        },
        {
          id: 'CV',
          name: 'Cape Verde'
        },
        {
          id: 'KY',
          name: 'Cayman Islands'
        },
        {
          id: 'CF',
          name: 'Central African Republic'
        },
        {
          id: 'TD',
          name: 'Chad'
        },
        {
          id: 'CL',
          name: 'Chile'
        },
        {
          id: 'CN',
          name: 'China'
        },
        {
          id: 'CX',
          name: 'Christmas Island'
        },
        {
          id: 'CC',
          name: 'Cocos (Keeling) Islands'
        },
        {
          id: 'CO',
          name: 'Colombia'
        },
        {
          id: 'KM',
          name: 'Comoros'
        },
        {
          id: 'CG',
          name: 'Congo'
        },
        {
          id: 'CD',
          name: 'Congo, The Democratic Republic Of The'
        },
        {
          id: 'CK',
          name: 'Cook Islands'
        },
        {
          id: 'CR',
          name: 'Costa Rica'
        },
        {
          id: 'CI',
          name: "Cote D'ivoire"
        },
        {
          id: 'HR',
          name: 'Croatia (Local Name: Hrvatska)'
        },
        {
          id: 'CU',
          name: 'Cuba'
        },
        {
          id: 'CY',
          name: 'Cyprus'
        },
        {
          id: 'CZ',
          name: 'Czech Republic'
        },
        {
          id: 'DK',
          name: 'Denmark'
        },
        {
          id: 'DJ',
          name: 'Djibouti'
        },
        {
          id: 'DM',
          name: 'Dominica'
        },
        {
          id: 'DO',
          name: 'Dominican Republic'
        },
        {
          id: 'TP',
          name: 'East Timor'
        },
        {
          id: 'EC',
          name: 'Ecuador'
        },
        {
          id: 'EG',
          name: 'Egypt'
        },
        {
          id: 'SV',
          name: 'El Salvador'
        },
        {
          id: 'GQ',
          name: 'Equatorial Guinea'
        },
        {
          id: 'ER',
          name: 'Eritrea'
        },
        {
          id: 'EE',
          name: 'Estonia'
        },
        {
          id: 'ET',
          name: 'Ethiopia'
        },
        {
          id: 'FK',
          name: 'Falkland Islands (Malvinas)'
        },
        {
          id: 'FO',
          name: 'Faroe Islands'
        },
        {
          id: 'FJ',
          name: 'Fiji'
        },
        {
          id: 'FI',
          name: 'Finland'
        },
        {
          id: 'FR',
          name: 'France'
        },
        {
          id: 'FX',
          name: 'France, Metropolitan'
        },
        {
          id: 'GF',
          name: 'French Guiana'
        },
        {
          id: 'PF',
          name: 'French Polynesia'
        },
        {
          id: 'TF',
          name: 'French Southern Territories'
        },
        {
          id: 'GA',
          name: 'Gabon'
        },
        {
          id: 'GM',
          name: 'Gambia'
        },
        {
          id: 'GE',
          name: 'Georgia'
        },
        {
          id: 'DE',
          name: 'Germany'
        },
        {
          id: 'GH',
          name: 'Ghana'
        },
        {
          id: 'GI',
          name: 'Gibraltar'
        },
        {
          id: 'GR',
          name: 'Greece'
        },
        {
          id: 'GL',
          name: 'Greenland'
        },
        {
          id: 'GD',
          name: 'Grenada'
        },
        {
          id: 'GP',
          name: 'Guadeloupe'
        },
        {
          id: 'GU',
          name: 'Guam'
        },
        {
          id: 'GT',
          name: 'Guatemala'
        },
        {
          id: 'GN',
          name: 'Guinea'
        },
        {
          id: 'GW',
          name: 'Guinea-bissau'
        },
        {
          id: 'GY',
          name: 'Guyana'
        },
        {
          id: 'HT',
          name: 'Haiti'
        },
        {
          id: 'HM',
          name: 'Heard And McDonald Islands'
        },
        {
          id: 'VA',
          name: 'Holy See (Vatican City State)'
        },
        {
          id: 'HN',
          name: 'Honduras'
        },
        {
          id: 'HK',
          name: 'Hong Kong'
        },
        {
          id: 'HU',
          name: 'Hungary'
        },
        {
          id: 'IS',
          name: 'Iceland'
        },
        {
          id: 'IN',
          name: 'India'
        },
        {
          id: 'ID',
          name: 'Indonesia'
        },
        {
          id: 'IR',
          name: 'Iran (Islamic Republic Of)'
        },
        {
          id: 'IQ',
          name: 'Iraq'
        },
        {
          id: 'IE',
          name: 'Ireland'
        },
        {
          id: 'IL',
          name: 'Israel'
        },
        {
          id: 'IT',
          name: 'Italy'
        },
        {
          id: 'JM',
          name: 'Jamaica'
        },
        {
          id: 'JP',
          name: 'Japan'
        },
        {
          id: 'JO',
          name: 'Jordan'
        },
        {
          id: 'KZ',
          name: 'Kazakhstan'
        },
        {
          id: 'KE',
          name: 'Kenya'
        },
        {
          id: 'KI',
          name: 'Kiribati'
        },
        {
          id: 'KP',
          name: "Korea, Democratic People's Republic Of"
        },
        {
          id: 'KR',
          name: 'Korea, Republic Of'
        },
        {
          id: 'KW',
          name: 'Kuwait'
        },
        {
          id: 'KG',
          name: 'Kyrgyzstan'
        },
        {
          id: 'LA',
          name: "Lao People's Democratic Republic"
        },
        {
          id: 'LV',
          name: 'Latvia'
        },
        {
          id: 'LB',
          name: 'Lebanon'
        },
        {
          id: 'LS',
          name: 'Lesotho'
        },
        {
          id: 'LR',
          name: 'Liberia'
        },
        {
          id: 'LY',
          name: 'Libyan Arab Jamahiriya'
        },
        {
          id: 'LI',
          name: 'Liechtenstein'
        },
        {
          id: 'LT',
          name: 'Lithuania'
        },
        {
          id: 'LU',
          name: 'Luxembourg'
        },
        {
          id: 'MO',
          name: 'Macau'
        },
        {
          id: 'MK',
          name: 'Macedonia, Former Yugoslav Republic Of'
        },
        {
          id: 'MG',
          name: 'Madagascar'
        },
        {
          id: 'MW',
          name: 'Malawi'
        },
        {
          id: 'MY',
          name: 'Malaysia'
        },
        {
          id: 'MV',
          name: 'Maldives'
        },
        {
          id: 'ML',
          name: 'Mali'
        },
        {
          id: 'MT',
          name: 'Malta'
        },
        {
          id: 'MH',
          name: 'Marshall Islands'
        },
        {
          id: 'MQ',
          name: 'Martinique'
        },
        {
          id: 'MR',
          name: 'Mauritania'
        },
        {
          id: 'MU',
          name: 'Mauritius'
        },
        {
          id: 'YT',
          name: 'Mayotte'
        },
        {
          id: 'MX',
          name: 'Mexico'
        },
        {
          id: 'FM',
          name: 'Micronesia, Federated States Of'
        },
        {
          id: 'MD',
          name: 'Moldova, Republic Of'
        },
        {
          id: 'MC',
          name: 'Monaco'
        },
        {
          id: 'MN',
          name: 'Mongolia'
        },
        {
          id: 'MS',
          name: 'Montserrat'
        },
        {
          id: 'MA',
          name: 'Morocco'
        },
        {
          id: 'MZ',
          name: 'Mozambique'
        },
        {
          id: 'MM',
          name: 'Myanmar'
        },
        {
          id: 'NA',
          name: 'Namibia'
        },
        {
          id: 'NR',
          name: 'Nauru'
        },
        {
          id: 'NP',
          name: 'Nepal'
        },
        {
          id: 'NL',
          name: 'Netherlands'
        },
        {
          id: 'AN',
          name: 'Netherlands Antilles'
        },
        {
          id: 'NC',
          name: 'New Caledonia'
        },
        {
          id: 'NZ',
          name: 'New Zealand'
        },
        {
          id: 'NI',
          name: 'Nicaragua'
        },
        {
          id: 'NE',
          name: 'Niger'
        },
        {
          id: 'NG',
          name: 'Nigeria'
        },
        {
          id: 'NU',
          name: 'Niue'
        },
        {
          id: 'NF',
          name: 'Norfolk Island'
        },
        {
          id: 'MP',
          name: 'Northern Mariana Islands'
        },
        {
          id: 'NO',
          name: 'Norway'
        },
        {
          id: 'OM',
          name: 'Oman'
        },
        {
          id: 'PK',
          name: 'Pakistan'
        },
        {
          id: 'PW',
          name: 'Palau'
        },
        {
          id: 'PA',
          name: 'Panama'
        },
        {
          id: 'PG',
          name: 'Papua New Guinea'
        },
        {
          id: 'PY',
          name: 'Paraguay'
        },
        {
          id: 'PE',
          name: 'Peru'
        },
        {
          id: 'PH',
          name: 'Philippines'
        },
        {
          id: 'PN',
          name: 'Pitcairn'
        },
        {
          id: 'PL',
          name: 'Poland'
        },
        {
          id: 'PT',
          name: 'Portugal'
        },
        {
          id: 'PR',
          name: 'Puerto Rico'
        },
        {
          id: 'QA',
          name: 'Qatar'
        },
        {
          id: 'RE',
          name: 'Reunion'
        },
        {
          id: 'RO',
          name: 'Romania'
        },
        {
          id: 'RU',
          name: 'Russian Federation'
        },
        {
          id: 'RW',
          name: 'Rwanda'
        },
        {
          id: 'KN',
          name: 'Saint Kitts And Nevis'
        },
        {
          id: 'LC',
          name: 'Saint Lucia'
        },
        {
          id: 'VC',
          name: 'Saint Vincent And The Grenadines'
        },
        {
          id: 'WS',
          name: 'Samoa'
        },
        {
          id: 'SM',
          name: 'San Marino'
        },
        {
          id: 'ST',
          name: 'Sao Tome And Principe'
        },
        {
          id: 'SA',
          name: 'Saudi Arabia'
        },
        {
          id: 'SN',
          name: 'Senegal'
        },
        {
          id: 'SC',
          name: 'Seychelles'
        },
        {
          id: 'SL',
          name: 'Sierra Leone'
        },
        {
          id: 'SG',
          name: 'Singapore'
        },
        {
          id: 'SK',
          name: 'Slovakia (Slovak Republic)'
        },
        {
          id: 'SI',
          name: 'Slovenia'
        },
        {
          id: 'SB',
          name: 'Solomon Islands'
        },
        {
          id: 'SO',
          name: 'Somalia'
        },
        {
          id: 'ZA',
          name: 'South Africa'
        },
        {
          id: 'GS',
          name: 'South Georgia/South Sandwich Islands'
        },
        {
          id: 'ES',
          name: 'Spain'
        },
        {
          id: 'LK',
          name: 'Sri Lanka'
        },
        {
          id: 'SH',
          name: 'St. Helena'
        },
        {
          id: 'PM',
          name: 'St. Pierre And Miquelon'
        },
        {
          id: 'SD',
          name: 'Sudan'
        },
        {
          id: 'SR',
          name: 'Suriname'
        },
        {
          id: 'SJ',
          name: 'Svalbard And Jan Mayen Islands'
        },
        {
          id: 'SZ',
          name: 'Swaziland'
        },
        {
          id: 'SE',
          name: 'Sweden'
        },
        {
          id: 'CH',
          name: 'Switzerland'
        },
        {
          id: 'SY',
          name: 'Syrian Arab Republic'
        },
        {
          id: 'TW',
          name: 'Taiwan, Province Of China'
        },
        {
          id: 'TJ',
          name: 'Tajikistan'
        },
        {
          id: 'TZ',
          name: 'Tanzania, United Republic Of'
        },
        {
          id: 'TH',
          name: 'Thailand'
        },
        {
          id: 'TG',
          name: 'Togo'
        },
        {
          id: 'TK',
          name: 'Tokelau'
        },
        {
          id: 'TO',
          name: 'Tonga'
        },
        {
          id: 'TT',
          name: 'Trinidad And Tobago'
        },
        {
          id: 'TN',
          name: 'Tunisia'
        },
        {
          id: 'TR',
          name: 'Turkey'
        },
        {
          id: 'TM',
          name: 'Turkmenistan'
        },
        {
          id: 'TC',
          name: 'Turks And Caicos Islands'
        },
        {
          id: 'TV',
          name: 'Tuvalu'
        },
        {
          id: 'UG',
          name: 'Uganda'
        },
        {
          id: 'UA',
          name: 'Ukraine'
        },
        {
          id: 'AE',
          name: 'United Arab Emirates'
        },
        {
          id: 'GB',
          name: 'United Kingdom'
        },
        {
          id: 'UM',
          name: 'United States Minor Outlying Islands'
        },
        {
          id: 'US',
          name: 'United States'
        },
        {
          id: 'UY',
          name: 'Uruguay'
        },
        {
          id: 'UZ',
          name: 'Uzbekistan'
        },
        {
          id: 'VU',
          name: 'Vanuatu'
        },
        {
          id: 'VE',
          name: 'Venezuela'
        },
        {
          id: 'VN',
          name: 'Vietnam'
        },
        {
          id: 'VG',
          name: 'Virgin Islands (British)'
        },
        {
          id: 'VI',
          name: 'Virgin Islands (U.S.)'
        },
        {
          id: 'WF',
          name: 'Wallis And Futuna Islands'
        },
        {
          id: 'EH',
          name: 'Western Sahara'
        },
        {
          id: 'YE',
          name: 'Yemen'
        },
        {
          id: 'YU',
          name: 'Yugoslavia'
        },
        {
          id: 'ZM',
          name: 'Zambia'
        },
        {
          id: 'ZW',
          name: 'Zimbabwe'
        }
      ],
      intl: true
    },
    'childcare_email-211428': {
      type: 'email',
      title: 'E-mail address',
      description: 'We will not send you any unsolicited email.',
      required: true,
      read_only: false,
      max_length: 100,
      pattern: "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
    },
    'childcare_datetime-211429': {
      type: 'date',
      title: 'Birthdate',
      description: '',
      required: true,
      read_only: false
    },
    'childcare_gender-211424': {
      type: 'dropdown',
      title: 'Gender',
      description: '',
      required: true,
      read_only: false,
      default_value: 'U',
      possible_answers: [
        {
          id: 'U',
          value: 'Unspecified',
          display_value: 'Unspecified'
        },
        {
          id: 'M',
          value: 'Male',
          display_value: 'Male'
        },
        {
          id: 'F',
          value: 'Female',
          display_value: 'Female'
        }
      ],
      hide_empty_option: true,
      empty_value: 'U'
    },
    'childcare_answerlist-211426': {
      type: 'checkboxes',
      title: 'What is your t-shirt size?',
      description: null,
      required: true,
      read_only: false,
      possible_answers: [
        {
          id: 'childcare_possible_answer-103469',
          value: 'Small',
          amount: 15.0,
          display_value: 'Small - $15.00'
        },
        {
          id: 'childcare_possible_answer-103470',
          value: 'Medium',
          amount: 15.0,
          display_value: 'Medium - $15.00'
        },
        {
          id: 'childcare_possible_answer-103471',
          value: 'Large',
          amount: 15.0,
          display_value: 'Large - $15.00'
        },
        {
          id: 'childcare_possible_answer-103472',
          value: 'X-Large',
          amount: 15.0,
          display_value: 'X-Large - $15.00'
        }
      ],
      hide_empty_option: false,
      empty_value: ''
    },
    'childcare_mediumtext-211425': {
      type: 'text',
      title: 'Please specify any food allergies',
      description: 'For example, peanuts, dairy, eggs, gluten, wheat, etc.',
      required: false,
      read_only: false,
      max_length: 50
    },
    'childcare_answerlist-211427': {
      type: 'radio',
      title: 'Have you participated in this program before?',
      description: '',
      required: false,
      read_only: false,
      possible_answers: [
        {
          id: 'childcare_possible_answer-103473',
          value: 'Yes',
          display_value: 'Yes'
        },
        {
          id: 'childcare_possible_answer-103474',
          value: 'No',
          display_value: 'No'
        }
      ],
      hide_empty_option: false,
      empty_value: ''
    },
    'childcare_answerlist-211432': {
      type: 'checkboxes',
      title: 'What other sports have you participated in?',
      description: '',
      required: false,
      read_only: false,
      possible_answers: [
        {
          id: 'childcare_possible_answer-103475',
          value: 'Soccer',
          display_value: 'Soccer'
        },
        {
          id: 'childcare_possible_answer-103476',
          value: 'Basketball',
          display_value: 'Basketball'
        },
        {
          id: 'childcare_possible_answer-103477',
          value: 'Swimming',
          display_value: 'Swimming'
        },
        {
          id: 'childcare_possible_answer-103478',
          value: 'Football',
          display_value: 'Football'
        }
      ],
      hide_empty_option: false,
      empty_value: ''
    }
  }
};
