//import ItemView from './ItemView';
import SessionModel from './SessionModel';
import SessionsCollection from './SessionsCollection';
import CollectionView from './CollectionView';
import LayoutView from './LayoutView';

export default {
  index: function() {
    console.log('controller:index:action');

    var model1 = new SessionModel();
    model1.set({name: 'html',speaker: 'akash',time: new Date() });
    var model2 = new SessionModel();
    model2.set({name: 'css',speaker: 'bhushan',time: new Date()});
    var model3 = new SessionModel();
    model3.set({name: 'js',speaker: 'rishi',time: new Date()});

    var collection = new SessionsCollection([model1,model2,model3]);
    console.log(collection);


    var collectionView = new CollectionView({collection: collection});
    console.log(collectionView);
    //
    var layoutView = new LayoutView();
    console.log(layoutView);

    layoutView.render();
    layoutView.showChildView('region1',collectionView);


    //collectionView.render();
    //var itemView = new ItemView({model: model});
    //console.log(itemView)
    //itemView.render();
  }
}
