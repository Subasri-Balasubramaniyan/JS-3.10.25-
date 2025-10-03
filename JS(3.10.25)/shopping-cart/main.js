// main.js
import { products } from "./products.js";  // named import
import cart from "./cart.js";              // default import

console.log("Available Products:");
products.forEach((p) => console.log(`${p.id}. ${p.name} - ₹${p.price}`));

// Add some products to cart
cart.add(products[0]); // Laptop
cart.add(products[2]); // Headphones

// Show cart
cart.show();
