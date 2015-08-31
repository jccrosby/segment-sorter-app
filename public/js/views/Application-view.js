define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function($, _, Backbone, JST) {
  'use strict';

  var ApplicationView = Backbone.View.extend({
    template: JST['public/js/templates/Application.ejs']
  });

  return ApplicationView;
});
