$(document).on('click', '.hamburgerMenu', function (e) {
    e.preventDefault();
    $('header .list').toggleClass('showMenu');
});

function updateCartCount() {
  const cartCountEl = document.querySelector(".cart_count");
  const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  const totalCount = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCountEl) {
    cartCountEl.textContent = totalCount;
    cartCountEl.style.display = totalCount > 0 ? "inline-block" : "none";
  }
}

window.updateCartCount = updateCartCount;