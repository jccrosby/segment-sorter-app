/*global define*/

define( [
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'collections/Segments',
	'moment',
	'moment-timezone',
], function( $, _, Backbone, JST, segments ) {
	'use strict';

	var ApplicationView = Backbone.View.extend( {
		template: JST['public/js/templates/Application.ejs'],
		tagName: 'div',
		id: 'applicationView',
		className: '',
		events: {
			'click #pollingToggle': 'onClickPollingToggle'
		},
		pollingInterval: undefined,

		initialize: function() {
			this.initListeners();

			segments.fetch();
			this.startPollingTimelineSegments();
		},

		initListeners: function() {
			this.listenTo( segments, 'reset', this.onSegmentsReset );
			this.listenTo( segments, 'sort', this.onSegmentsSorted );
		},

		render: function() {
			var context = {
				title: "Sorted Segments",
				segments: segments.toJSON()
			};
			return this.$el.html( this.template( context ) );
		},

		startPollingTimelineSegments: function() {
			this.pollingInterval = setInterval( function() {
				segments.fetch();
			}, 30000 );
		},

		stopPollingTimelineSegments: function() {
			clearInterval(this.pollingInterval);
			this.pollingInterval = undefined;
		},

		sortSegments: function() {
			segments.sort();
		},

		findUpcommingSegments: function() {

		},


		//================================================
		// Handlers
		//================================================

		onSegmentsReset: function( models, options ) {
			this.sortSegments();
		},

		onSegmentsSorted: function( models, options ) {
			this.render();
		},

		onClickPollingToggle: function( event ) {
			if(this.pollingInterval) {
				this.stopPollingTimelineSegments();
				$('#pollingToggle' ).html( 'Start Polling' );
			} else {
				$('#pollingToggle' ).html( 'Stop Polling' );
				segments.fetch();
				this.startPollingTimelineSegments();
			}
		}

	} );

	return ApplicationView;
} );
