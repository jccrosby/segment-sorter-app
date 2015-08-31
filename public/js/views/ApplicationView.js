/*global define*/

define( [
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/Segments'
], function( $, _, Backbone, JST, segments ) {
  'use strict';

  var ApplicationView = Backbone.View.extend( {
    template: JST['public/js/templates/Application.ejs'],
    tagName: 'div',
    id: 'applicationView',
    className: '',
    events: {},

    initialize: function() {
      this.initListeners();

      this.loadTimelineSegments();
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

    loadTimelineSegments: function() {
      setTimeout(function(){
        segments.fetch();
      }, 3000);
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
    }

  } );

  return ApplicationView;
} );
