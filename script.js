// Hamburger menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cart counter
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.product-card button');

let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;

    // Optional: Add a quick animation
    cartCount.classList.add('pop');
    setTimeout(() => {
      cartCount.classList.remove('pop');
    }, 200);
  });
});
