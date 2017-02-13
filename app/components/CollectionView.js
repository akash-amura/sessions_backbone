import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

export default Marionette.CollectionView.extend({
  el: '#app',
  childView: ItemView

});
