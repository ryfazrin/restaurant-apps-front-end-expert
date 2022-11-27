// import FavoriterestaurantDb from '../data/favorite-restaurant-idb';
import * as template from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    this._renderLike();
    // if (await this._isrestaurantExist(id)) {
    //   this._renderLiked();
    // } else {
    //   this._renderLike();
    // }
  },

  // async _isRestaurantExist(id) {
  //   const restaurant = await FavoriteRestaurantDb.getrestaurant(id);
  //   return !!restaurant;
  // },

  _renderLike() {
    this._likeButtonContainer.innerHTML = template.likeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriterestaurantDb.putrestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = template.likedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriterestaurantDb.deleterestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
