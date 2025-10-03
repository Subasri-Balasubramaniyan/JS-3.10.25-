
📦 ES6 Modules Demo

This project demonstrates the use of ES6 Modules in JavaScript, including named exports, default exports, and how to organize code into separate files for better modularity and maintainability.

📂 Project Structure
es6-modules-demo/
│── index.html      # HTML entry point
│── main.js         # Main JS file that imports modules
│── math.js         # Named exports: functions for math operations
│── greet.js        # Default export: greeting function

🚀 Features

Named exports: Export multiple functions or variables from a single module.

Default export: Export one main function/object from a module.

Importing modules: Learn how to import named and default exports in another file.

Modular code structure makes projects cleaner and more maintainable.

Compatible with modern browsers using <script type="module">.

📦 Files Explanation
math.js (Named Exports)

Contains math functions exported by name:

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

greet.js (Default Export)

Contains a default exported function:

export default function greet(name) {
  return `Hello, ${name}! Welcome to ES6 Modules Demo 🎉`;
}

main.js

Imports both named and default exports:

import { add, subtract } from './math.js'; // named imports
import greet from './greet.js';            // default import

console.log(greet("User"));
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));

index.html

Loads the main script as an ES6 module:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES6 Modules Demo</title>
</head>
<body>
  <h1>ES6 Modules Demo</h1>
  <p>Open Developer Console (F12) to see the output.</p>

  <script type="module" src="main.js"></script>
</body>
</html>

🏃 How to Run

Clone or download the project.

Important: Open in a modern browser using a local server (required for ES6 modules).

VS Code → Live Server extension

Python: python -m http.server 8000

Open index.html.

Open Developer Console → see the output.

📖 Concepts Covered

ES6 Modules: export / import

Named exports vs Default exports

Arrow functions

Template literals

Modular code structure

✅ Key Notes

Each module should be in a separate file.

Default export allows importing with any name.

Named exports must be imported with exact names (or alias using as).

Using modules improves code readability and reusability.
A very simple project demonstrating ES6 Modules (export, import, default export) using a mini shopping cart system.

📂 Project Structure
shopping-cart/
│── index.html     # Entry HTML file
│── main.js        # Main script (imports and uses modules)
│── cart.js        # Default export: shopping cart functions
│── products.js    # Named export: product list

🚀 Features

Named Exports: products.js exports an array of products.

Default Export: cart.js exports cart methods (add, show).

Imports: main.js imports both and demonstrates usage.

Run directly in the browser using type="module".

📦 Files Explanation
products.js

Contains an array of products and exports it using named export.

export const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

cart.js

Implements cart operations and exports them as a default object.

export default {
  add(product) { ... },
  show() { ... }
};

main.js

Imports both modules and demonstrates adding products to the cart.

import { products } from "./products.js";
import cart from "./cart.js";

index.html

Loads the main.js file as an ES6 module.

<script type="module" src="main.js"></script>

🏃 How to Run

Download/clone this project.

Open index.html in your browser.

Open Developer Tools → Console (F12 → Console tab).

You’ll see:

Available Products:
1. Laptop - ₹50000
2. Mobile - ₹20000
3. Headphones - ₹2000
Laptop added to cart 🛒
Headphones added to cart 🛒
🛍️ Your Cart:
1. Laptop - ₹50000
2. Headphones - ₹2000

📖 Concepts Covered

export / import

default export

Module usage in browser with type="module"

Organizing code into multiple files
