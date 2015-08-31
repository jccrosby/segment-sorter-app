/*global define*/

define( [
	'underscore',
	'backbone'
], function( _, Backbone ) {
	'use strict';

	var SegmentModel = Backbone.Model.extend( {

		defaults: {
			segment_id: undefined,
			title: undefined,
			shortText: undefined,
			description: undefined,
			type: undefined,
			url: undefined,
			segment_start_date_gmt: undefined,
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
		}

	} );

	return SegmentModel;
} );
