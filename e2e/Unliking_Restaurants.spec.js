const assert = require('assert');

Feature('Unliking Restaurants');

Scenario('unliking one restaurant', async ({ I }) => {
  const firstRestaurant = locate('.headline__title a').first();

  I.amOnPage('/#/like');

  // Liking restaurant
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.headline__title a', 10);

  I.seeElement('.headline__title a');

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Unliking restaurant
  I.amOnPage('/#/like');

  I.seeElement('.headline');

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  const likeButton = await I.grabAttributeFrom('#likeButton', 'aria-label');

  assert.strictEqual(likeButton, 'like this restaurant');
});
