import Marionette from 'backbone.marionette';
import SessionRouter from './SessionRouter';
import Backbone from 'backbone';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    console.log('start');
    var router = new SessionRouter();
    Backbone.history.start({pushState: true});
    //this.showView(new ItemView());
  }
});
