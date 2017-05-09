var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
});