//import ItemView from './ItemView';
import SessionModel from './SessionModel';
import SessionsCollection from './SessionsCollection';
import CollectionView from './CollectionView';

export default {
  index: function() {
    console.log('controller:index:action');

    var model1 = new SessionModel();
    model1.set({name: 'akash',age: 22});
    var model2 = new SessionModel();
    model2.set({name: 'bhushan',age: 12});
    var model3 = new SessionModel();
    model3.set({name: 'rishi',age: 32});

    var collection = new SessionsCollection([model1,model2,model3]);
    console.log(collection);


    var collectionView = new CollectionView({collection: collection});
    console.log(collectionView);
    collectionView.render();
    //var itemView = new ItemView({model: model});
    //console.log(itemView)
    //itemView.render();
  }
}
