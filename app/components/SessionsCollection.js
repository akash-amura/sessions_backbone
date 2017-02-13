import Backbone from 'backbone';

export default Backbone.Collection.extend({
  initialize: function() {
    console.log('sessions:collection:initialized');
  }
});
