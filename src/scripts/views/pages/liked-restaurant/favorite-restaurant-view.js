import { restaurantItem } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <h1 class="main__title">Your Liked Restaurant</h1>
    <section id="restaurants" class="content"></section>
    `;
  }

  showRestaurants(restaurant) {
    this.showFavoriteMovies(restaurant);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(restaurantItem(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;
    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantView;
