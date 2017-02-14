import Marionette from 'backbone.marionette';
import template from '../templates/form.jst';
import SessionModel from './SessionModel';

export default Marionette.View.extend({
  initialize: function(options) {
    console.log('form:item:view:initialized');
    this.collection = options.collection;
  },
  template: template,
  triggers: {
    'click .submit': 'create:session'
  },
  onCreateSession: function() {
    console.log('click!');
    console.log(this.collection);
    var model = new SessionModel();
    model.set('name',this.$el.find('#name').val());
    model.set('speaker',this.$el.find('#speaker').val());
    model.set('time',new Date());
    this.collection.push(model);
  }
});

