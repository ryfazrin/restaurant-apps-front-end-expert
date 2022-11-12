import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.querySelector(".content");
  restaurantList.innerHTML = "";
 
  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.createElement("article");
    restaurantItem.classList.add("headline");
    restaurantItem.innerHTML = `
    <figure class="headline__figure">
      <img src="${restaurant.pictureId}" alt="Dicoding Fact Sheet">
      <figcaption>${restaurant.city}</figcaption>
    </figure>
    <div class="headline__content">
      <p>Rating: 4.5</p>
      <h1 class="headline__title">${restaurant.name}</h1>
      <p class="headline__description">${restaurant.description}</p>
    </div>
    `;
    restaurantList.appendChild(restaurantItem);
  });
});

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});