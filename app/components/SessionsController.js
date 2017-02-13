import ItemView from './ItemView';
import SessionModel from './SessionModel';

export default {
  index: function() {
    console.log('controller:index:action');

    var model = new SessionModel();
    model.set({name: 'akash',age: 22});

    var itemView = new ItemView({model: model});
    console.log(itemView)
    itemView.render();
  }
}
