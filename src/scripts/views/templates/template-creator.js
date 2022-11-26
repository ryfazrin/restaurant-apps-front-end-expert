import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="headline">
    <figure class="headline__figure">
      <img src="${CONFIG.BASE_IMAGE_URL+restaurant.pictureId}" alt="Dicoding Fact Sheet">
      <figcaption>${restaurant.city}</figcaption>
    </figure>
    <div class="headline__content">
      <p>
        Rating: ${restaurant.rating} 
        <span class="stars-outer">
          <span class="stars-inner"></span>
        </span>
      </p>
      <h1 class="headline__title">${restaurant.name}</h1>
      <p class="headline__description">${restaurant.description}</p>
    </div>
  <article>
`;

export { createRestaurantItemTemplate };