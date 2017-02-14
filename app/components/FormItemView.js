import Marionette from 'backbone.marionette';
import template from '../templates/form.jst';

export default Marionette.View.extend({
  initialize: function() {
    console.log('form:item:view:initialized');
  },
  template: template,
  events: {
    'click .submit': 'createSession'
  },
  createSession: function() {
    console.log('event:click:submit');
    console.log(this.$el);
    console.log(this.$el.find('#name').val());
  }
});

