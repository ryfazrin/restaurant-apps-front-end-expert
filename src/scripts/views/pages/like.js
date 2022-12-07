import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import fillingStar from '../../utils/fill-star';
import { restaurantItem } from '../templates/template-creator';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant, index) => {
      restaurantsContainer.innerHTML += restaurantItem(restaurant);
      fillingStar(index, restaurant.rating);
    });
  },
};

export default Like;
