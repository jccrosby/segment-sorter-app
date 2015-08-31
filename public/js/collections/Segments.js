/*global define*/

define( [
	'underscore',
	'backbone',
	'models/Segment'
], function( _, Backbone, Segment ) {
	'use strict';

	var SegmentsModel = Backbone.Collection.extend( {
		url: 'http://c.120sportsstatic.com/gen/client/timeline.json',
		model: function( attrs, options ) {
			return new Segment( attrs, options );
		},

		initialize: function() {
		},

		defaults: {},

		/*validate: function( attrs, options ) {
		 },*/

		parse: function( response, options ) {
			console.info( 'Segments response:', response.segment.length );
			return response.segment;
		},

		comparator: function( segmentA, segmentB ) {
			var startA = segmentA.get( 'segment_start_date_gmt' );
			var startB = segmentB.get( 'segment_start_date_gmt' );
			var index = 0;
			if( startA > startB ) {
				index = -1;
			} else if( startA < startB ) {
				index = 1;
			}

			return index;
		}
	} );

	return new SegmentsModel();
} );
