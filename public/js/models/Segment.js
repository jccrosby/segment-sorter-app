/*global define*/

define( [
	'underscore',
	'backbone',
	'moment-timezone',
], function( _, Backbone, moment ) {
	'use strict';

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
				var theMoment = moment( this.get( 'segment_start_date_gmt' ) );
				attrs.segment_start_date_et = theMoment.tz( 'America/New_York' ).format();
			}
			return Backbone.Model.prototype.set.call( this, attrs, options );
		}

	} );

	return Segment;
} );
