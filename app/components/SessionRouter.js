import Marionette from 'backbone.marionette';
import SessionsController from './SessionsController';

export default Marionette.AppRouter.extend({
  initialize: function() {
    console.log('router:initialized');
  },

  controller: SessionsController,
  appRoutes: {
    'sessions': 'index',
    'sessions/new': 'new'
  }
});
