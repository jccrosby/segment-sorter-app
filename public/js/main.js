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
		}
	},
	paths: {
		'jquery': '../components/jquery/jquery',
		'bootstrap': '../components/sass-bootstrap/docs/assets/js/bootstrap',
		'underscore': '../components/underscore-amd/underscore',
		'backbone': '../components/backbone-amd/backbone'
	}
} );

require( [
	'backbone',
	'bootstrap',
	'views/ApplicationView'
], function( Backbone, Bootstrap, ApplicationView ) {
	Backbone.history.start();
	var application = new ApplicationView();
	$( '#app' ).append( application.render() );
} );
