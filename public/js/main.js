'use strict';

require.config( {
	shim: {
		'bootstrap': {
			deps: [
				'jquery'
			],
			exports: 'jquery'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		},
		'moment-timezone': {
			deps: [
				'moment',
				'moment-timezone-data'
			]
		},
		'json': {
			deps: ['text']
		}
	},
	paths: {
		'jquery': '../components/jquery/jquery',
		'bootstrap': '../components/sass-bootstrap/docs/assets/js/bootstrap',
		'underscore': '../components/underscore-amd/underscore',
		'backbone': '../components/backbone-amd/backbone',
		'moment': '/components/moment/moment',
		'moment-timezone': '/components/moment-timezone/moment-timezone',
		'moment-timezone-data': 'data/moment-timezone-data',
		'text': '../components/requirejs-plugins/lib/text',
		'json': '../components/requirejs-plugins/src/json',
	}
} );

require( [
	'backbone',
	'bootstrap',
	'views/ApplicationView',
	'moment-timezone-data'
], function( Backbone, Bootstrap, ApplicationView, momentTimezoneData ) {
	Backbone.history.start();
	var application = new ApplicationView();
	$( '#app' ).append( application.render() );
} );
