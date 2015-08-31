/*global define*/

define( [
	'underscore',
	'backbone',
	'moment',
], function( _, Backbone, moment ) {
	'use strict';
	var DATE_TIME_FORMAT = 'MM/DD/YYYY hh:mm:ss a';
	var Segment = Backbone.Model.extend( {

		defaults: {
			segment_id: undefined,
			title: undefined,
			shortText: undefined,
			description: undefined,
			type: undefined,
			url: undefined,
			segment_start_date_gmt: undefined,
			segment_start_date_et: undefined,
			media_playback_urls: undefined,
			sponsor: undefined,
			tags: undefined,
		},

		initialize: function() {
		},

		validate: function( attrs, options ) {
		},

		parse: function( response, options ) {
			return response;
		},

		set: function( attrs, options ) {
			//Will be triggered whenever set is called
			if( attrs.hasOwnProperty( 'segment_start_date_gmt' ) ) {
				//2015-08-31T22:55:28+0000
				var theMoment = moment( attrs.segment_start_date_gmt, ['YYYY-MM-DDTHH:mm:ssZ'] );
				attrs.segment_start_date_gmt_format = theMoment.format( DATE_TIME_FORMAT );
				attrs.segment_start_date_et_format = theMoment.tz( 'America/New_York' ).format( DATE_TIME_FORMAT );
			}
			return Backbone.Model.prototype.set.call( this, attrs, options );
		}

	} );

	return Segment;
} );
