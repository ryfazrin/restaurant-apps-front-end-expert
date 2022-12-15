import fillingStar from '../../../utils/fill-star';
import { restaurantItem } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <h1 class="main__title">Your Liked Restaurant</h1>
    <section id="restaurants" class="content"></section>
    `;
  }

  showRestaurants(restaurant) {
    this.showFavoriteRestaurants(restaurant);
  }

  showFavoriteRestaurants(restaurants = []) {
    const html = document.getElementById('restaurants');

    if (restaurants.length) {
      html.innerHTML = restaurants.reduce((carry, restaurant) => carry.concat(restaurantItem(restaurant)), '');
      this._addStarStyle(restaurants);
    } else {
      html.innerHTML = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }

  _addStarStyle(restaurants) {
    restaurants.forEach((restaurant, index) => {
      fillingStar(index, restaurant.rating);
    });
  }
}

export default FavoriteRestaurantView;
