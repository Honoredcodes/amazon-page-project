export let cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

export function addToCart() {
  document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
        document.querySelector(".cart-quantity").innerHTML = cartQuantity;
      });
    });
  });
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}
