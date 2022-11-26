import CONFIG from '../../globals/config';

const restaurantItem = (restaurant) => `
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
      <h1 class="headline__title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h1>
      <p class="headline__description">${restaurant.description}</p>
    </div>
  <article>
`;

const restaurantDetail = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <br>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <br>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div id="foods">
    <h1>foods</h1>
  </div>
  <div id="drinks">
    <h1>drinks</h1>
  </div>
  <div id="customerReviews">
    <h1>Customer Reviews</h1>
  </div>
`;

const restaurantFoodDetail = (food) => `
  <p>${food.name}</p>
`;

const restaurantDrinkDetail = (drink) => `
  <p>${drink.name}</p>
`;

const restaurantCustomerReviewsDetail = (review) => `
  <div>
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
  </div>
`;

export { 
  restaurantItem,
  restaurantDetail,
  restaurantFoodDetail,
  restaurantDrinkDetail,
  restaurantCustomerReviewsDetail
};