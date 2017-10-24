var React = require('react');
var ReactDOM = require('react-dom')
var jQuery = require('jquery');
var classes = require('classnames');
var moment = require('moment');

var DateField = React.createClass({

	componentDidMount: function() {
		var comp = this;
		var backdrop = '.datepicker-backdrop';
		jQuery(this.refs.datepicker).pickadate({
			format: 'mm/dd/yyyy',
			selectMonths: true,
			selectYears: 200,
			closeOnSelect: true,
			editable: true,
			min: new Date(1900, 0, 1),
			onOpen: function() {
        var $wrap = this.$root,
						$picker = this.$holder,
						offset = $wrap.offset(),
						height = $picker.outerHeight();
        $wrap.toggleClass('top', (offset.top + height) > (window.innerHeight + $(window).scrollTop()));
        $('body').append($('<div>').addClass(backdrop.replace('.', '')));
      },
			onSet: function(e) {
	      var val = this.get('select', 'mm/dd/yyyy');
	      comp.props.onChange(val);
		  },
			onClose: function() {
        $(backdrop).remove();
      },
			klass: {
        input: 'datepicker-input',
        picker: 'datepicker-wrap',
        holder: 'datepicker',
        opened: 'open',
        header: 'datepicker-header',
        footer: 'datepicker-footer',
        day: 'datepicker-day',
        infocus: 'datepicker-active',
        outfocus: 'datepicker-inactive',
        disabled: 'datepicker-disabled',
        now: 'datepicker-today',
        selectYear: 'datepicker-year',
				selectMonth: 'datepicker-month',
        weekdays: 'datepicker-weekday',
        navPrev: 'datepicker-prev',
        navNext: 'datepicker-next',
				buttonClear: 'btn',
				buttonClose: 'btn',
				buttonToday: 'btn-primary btn'
      }
		});
	},

	onBlur: function(e) {

		var new_value = e.target.value;
		var parsed_date = moment(new_value, [
				"MMDDYYYY", "MM/DD/YYYY", "M/DD/YYYY", "M/D/YYYY", "MM/DD/YY", "M/DD/YY", "M/D/YY",
				"MM-DD-YYYY", "M-DD-YYYY", "M-D-YYYY", "MM-DD-YY", "M-DD-YY", "M-D-YY",
				"MM.DD.YYYY", "M.DD.YYYY", "M.D.YYYY", "MM.DD.YY", "M.DD.YY", "M.D.YY"
			], true);
		if (parsed_date.isValid()) {
			new_value = parsed_date.format("MM/DD/YYYY");
		}

		this.props.onChange(new_value);
		this.props.onBlur(e);
	},

	onKeyPress: function(e) {
		if (e.key == "<" || e.key == ">")
			e.preventDefault();
	},

	onKeyUp: function(e) {
		if (e.key !== 'Backspace') {
			if (e.currentTarget.value.length === 2 || e.currentTarget.value.length === 5) {
				this.refs.datepicker.value = e.currentTarget.value + '/';
			}
		}
	},

	toggleCalendar: function(event) {

		if(typeof jQuery.fn.pickadate == 'undefined') {
			throw "The following jQuery plugin must be loaded in order to render date fields: http://amsul.ca/pickadate.js/";
	  }
		var picker = jQuery(ReactDOM.findDOMNode(this.refs.datepicker)).pickadate('picker');
		if (picker.get('open')) {
			picker.close();
	  } else {
			picker.open();
	  }
	  event.stopPropagation();
	},

	render: function() {
		return (
			<div>
				<input type="text"
					className={classes({'datepicker-input': true, 'dxp-field-error': this.props.className == 'dxp-field-error' })}
					placeholder="MM/DD/YYYY"
					ref="datepicker"
					maxLength="10"
					disabled={this.props.question.read_only}
					value={this.props.answer || ''}
					onChange={this.props.onChange}
					onBlur={this.onBlur}
					onKeyPress={this.onKeyPress}
					onKeyUp={this.onKeyUp}
				/>
				{
					!this.props.question.read_only &&
					<a className="datepicker-icon" onClick={this.toggleCalendar}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
							<g>
								<polyline fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="   4.3,2.8 0.8,2.8 0.8,23.2 23.2,23.2 23.2,2.8 19.9,2.8  "/>
								<rect x="4.8" y="0.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="4.5" height="4.5"/>
								<rect x="14.8" y="0.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="4.5" height="4.5"/>
								<line fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="9.5" y1="2.8" x2="14.5" y2="2.8"/>
								<rect x="5.8" y="10.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
								<rect x="11.2" y="10.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
								<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="16.75" y1="12.45" x2="18.25" y2="12.45" gradientTransform="matrix(1 0 0 -1 0 24)">
									<stop offset="0" style={{stopColor: '#FFFFFF'}}/>
									<stop offset="1" style={{stopColor: '#000000'}}/>
								</linearGradient>
								<rect x="16.8" y="10.8" fill="url(#SVGID_1_)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
								<rect x="5.8" y="16.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
								<rect x="11.2" y="16.8" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
								<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="16.75" y1="6.45" x2="18.25" y2="6.45" gradientTransform="matrix(1 0 0 -1 0 24)">
									<stop offset="0" style={{stopColor: '#FFFFFF'}}/>
									<stop offset="1" style={{stopColor: '#000000'}}/>
								</linearGradient>
								<rect x="16.8" y="16.8" fill="url(#SVGID_2_)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="1.5" height="1.5"/>
							</g>
						</svg>
				</a>
				}
			</div>
		);
	}

});

module.exports = DateField;
