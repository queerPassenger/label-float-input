module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LabelFloatInput = function (_React$Component) {
	    _inherits(LabelFloatInput, _React$Component);

	    function LabelFloatInput(props) {
	        _classCallCheck(this, LabelFloatInput);

	        var _this = _possibleConstructorReturn(this, (LabelFloatInput.__proto__ || Object.getPrototypeOf(LabelFloatInput)).call(this, props));

	        _this.state = {
	            _a: false
	        };
	        _this['_ref'] = Math.random().toString(36).substring(9);
	        _this.value = props.initialValue ? props.initialValue : '';
	        _this.label = props.label ? props.label : 'Enter the value';
	        _this.labelPh = props.initialValue.length === 0 ? true : false;
	        _this.color = props.color ? props.color : '#0564b2';

	        _this.style = {
	            'label-float-input-wrapper': {
	                width: '100%',
	                float: 'left'
	            },
	            'field-wrapper': {
	                width: '100%',
	                float: 'left'
	            },
	            'field-label-ph': {
	                color: _this.color,
	                position: 'relative',
	                top: '30px',
	                fontSize: '13px'
	            },
	            'field-label-nonPh': {
	                color: _this.color,
	                position: 'relative',
	                top: '0px',
	                fontSize: '12px'
	            },
	            'field-input': {
	                width: '250px',
	                paddingTop: '8px',
	                paddingBottom: '8px',
	                border: '0px',
	                borderBottom: '2px solid ' + _this.color,
	                outline: '0px',
	                fontSize: '13px'
	            }
	        };
	        return _this;
	    }

	    _createClass(LabelFloatInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.initialValue && this.props.initialValue) {
	                if (nextProps.initialValue !== this.props.initialValue) {
	                    this.value = nextProps.initialValue;
	                    this.labelPh = nextProps.initialValue.length === 0 ? true : false;
	                }
	            }
	            this.mutateState();
	        }
	    }, {
	        key: 'mutateState',
	        value: function mutateState() {
	            this.setState({
	                _a: !this.state._a
	            });
	        }
	    }, {
	        key: 'onInputChange',
	        value: function onInputChange(_obj, _key, _ref) {
	            _obj[_key] = this.refs[_ref].value;
	            if (this.props.onChange) {
	                props.onChange(this.value);
	            }
	            this.mutateState();
	        }
	    }, {
	        key: 'handleLabel',
	        value: function handleLabel(_obj, _key, _ref, _type) {
	            if (_type === 'blur') {
	                if (this.refs[_ref].value.trim() === '') {
	                    _obj[_key] = true;
	                } else {
	                    _obj[_key] = false;
	                }
	            } else if (_type === 'focus') {
	                _obj[_key] = false;
	                if (this.refs[_ref]) {
	                    this.refs[_ref].focus();
	                }
	            }
	            this.mutateState();
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            return this.value;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'label-float-input-wrapper', style: style['label-float-input-wrapper'] },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'field-wrapper', style: this.style['field-wrapper'] },
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: this.labelPh ? 'field-label-ph' : 'field-label-nonPh',
	                            onClick: this.handleLabel.bind(this, this, 'labelPh', this['_ref'], 'focus'),
	                            style: this.labelPh ? this.style['field-label-ph'] : this.style['field-label-nonPh']
	                        },
	                        this.label
	                    ),
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        className: 'field-input',
	                        ref: this['_ref'],
	                        style: this.style['field-input'],
	                        onFocus: this.handleLabel.bind(this, this, 'labelPh', this['_ref'], 'focus'),
	                        onBlur: this.handleLabel.bind(this, this, 'labelPh', this['_ref'], 'blur'),
	                        value: this.value,
	                        onChange: this.onInputChange.bind(this, this, 'value', this['_ref'])
	                    })
	                )
	            );
	        }
	    }]);

	    return LabelFloatInput;
	}(_react2.default.Component);

	exports.default = LabelFloatInput;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ })
/******/ ]);