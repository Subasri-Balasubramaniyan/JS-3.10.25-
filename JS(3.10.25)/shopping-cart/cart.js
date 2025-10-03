// cart.js
let cart = [];

export default {
  add(product) {
    cart.push(product);
    console.log(`${product.name} added to cart 🛒`);
  },
  show() {
    console.log("🛍️ Your Cart:");
    cart.forEach((p, i) => {
      console.log(`${i + 1}. ${p.name} - ₹${p.price}`);
    });
  }
};
