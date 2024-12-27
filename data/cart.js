export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

function addToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart() {
  document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productID = button.dataset.productId;
      console.log(productID);
      let matchingItem;

      cart.forEach((cartItem) => {
        if (cartItem.productid === productID) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        cart.push({
          id: productID,
          quantity: 1,
        });
      }
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
        document.querySelector(".cart-quantity").innerHTML = cartQuantity;
      });

      addToLocalStorage();
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
  addToLocalStorage();
}
