import Marionette from 'backbone.marionette';
import template from '../templates/layout.jst';

export default Marionette.View.extend({
  initialize: function() {
    console.log('layout:view');
  },
  el: '#app',
  template: template,
  regions: {
    region1: '#region1'
  }
});
