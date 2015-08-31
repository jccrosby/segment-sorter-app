define([
  'underscore',
  'backbone',
  'models/Segments-model'
], function(_, Backbone, SegmentsModel) {
  'use strict';

  var SegmentsCollection = Backbone.Collection.extend({
    model: SegmentsModel
  });

  return SegmentsCollection;
});
