// Scripts
import 'regenerator-runtime'; /* for async await transpile */
import { fillingStar } from './utils/fill-star';
import data from '../DATA.json';
// Styles
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';

document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.querySelector(".content");
  restaurantList.innerHTML = "";
 
  data.restaurants.forEach((restaurant, index) => {
    const restaurantItem = document.createElement("article");
    restaurantItem.classList.add("headline");
    restaurantItem.innerHTML = `
    <figure class="headline__figure">
      <img src="${restaurant.pictureId}" alt="Dicoding Fact Sheet">
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
    `;
    restaurantList.appendChild(restaurantItem);

    fillingStar(index, restaurant.rating);
  });
});

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

hamburgerButtonElement.addEventListener('keypress', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});