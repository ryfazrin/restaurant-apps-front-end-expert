import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDb });
  },
};

export default Like;
