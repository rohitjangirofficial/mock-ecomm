import { ProductType } from "../types";

const getCart = () => {
  const cartData = localStorage.getItem("cart");
  const cart = cartData ? JSON.parse(cartData) : [];
  return cart;
};

const addToCart = (product: ProductType) => {
  const cart = getCart();

  const existingProductIndex = cart.findIndex(
    (item: ProductType) => item.slug === product.slug,
  );

  if (existingProductIndex == -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[existingProductIndex].quantity += 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const incrementQuantity = (slug: string) => {
  const cart = getCart();
  const item = cart.find((item: ProductType) => item.slug === slug);

  item.quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
};

const decrementQuantity = (slug: string) => {
  const cart = getCart();
  const itemIndex = cart.findIndex((item: ProductType) => item.slug === slug);

  if (itemIndex !== -1) {
    const item = cart[itemIndex];

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const clearCart = () => {
  localStorage.removeItem("cart");
};

export { addToCart, getCart, clearCart, incrementQuantity, decrementQuantity };
