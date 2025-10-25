console.log("About page loaded");

// Example: To change the background color when a user clicks the profile image
document.querySelector('.profile-image').addEventListener('click', function() {
  document.body.style.backgroundColor = '#e3f2fd';
});
// JavaScript can be used for dynamic interactions or fetching data from an API
console.log("Menu page loaded");

// Example: Alert when clicking on a dish image
document.querySelectorAll('.menu-image').forEach(image => {
  image.addEventListener('click', () => {
    alert('You clicked on a dish!');
  });
});
// JavaScript to handle "Add to Cart" button interaction
document.getElementById("addToCartBtn").addEventListener("click", function() {
    alert("Your order has been added to the cart!");
  });
// JavaScript to handle "Add to Cart" button interaction
document.getElementById("addToCartBtn").addEventListener("click", function() {
    alert("Your order has been added to the cart!");
  });
    