//import ItemView from './ItemView';
import SessionModel from './SessionModel';
import SessionsCollection from './SessionsCollection';
import CollectionView from './CollectionView';
import LayoutView from './LayoutView';
import FormItemView from './FormItemView';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({
  initialize: function() {
    console.log('controller:initialized');
    this.sessionCollection = new SessionsCollection();
    var model1 = new SessionModel();
    model1.set({name: 'html',speaker: 'akash',time: new Date() });
    var model2 = new SessionModel();
    model2.set({name: 'css',speaker: 'bhushan',time: new Date()});
    var model3 = new SessionModel();
    model3.set({name: 'js',speaker: 'rishi',time: new Date()});

    //var collection = new SessionsCollection([model1,model2,model3]);
    this.sessionCollection.set([model1,model2,model3]);
  },
  index: function() {
    console.log('controller:index:action');

    console.log(this.sessionCollection);

    var collectionView = new CollectionView({collection: this.sessionCollection});
    console.log(collectionView);

    var layoutView = new LayoutView();
    console.log(layoutView);

    layoutView.render();
    layoutView.showChildView('region1',collectionView);


    //collectionView.render();
    //var itemView = new ItemView({model: model});
    //console.log(itemView)
    //itemView.render();
  },

  new: function() {
    var model = new SessionModel();

    var layoutView = new LayoutView();
    console.log(layoutView);

    var formItemView = new FormItemView({collection: this.sessionCollection,model: model});

    layoutView.render();
    layoutView.showChildView('region1',formItemView);

  }
});
