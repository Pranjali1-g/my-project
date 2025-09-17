# Experiment 7 – Product Cards with React

This experiment introduces React by rendering a small collection of product cards using **functional components, props, JSX,** and **declarative UI composition**. Unlike Experiments 4–6, which focused on imperative DOM/event handling, this adopts a **component-driven mindset**.

## Why This Experiment
In earlier experiments:  
- **Exp 4**: handled real-time text updates  
- **Exp 5**: implemented DOM-based filtering  
- **Exp 6**: explored canvas drawing  

This time, the focus shifts to structuring UI into **reusable components**, passing data using **props**, and leveraging React’s **declarative rendering** instead of manual DOM edits.

## Core React Concepts Practiced
- **Components**: `App`, `ProductCard`  
- **Props**: product objects passed into cards  
- **JSX**: HTML-like syntax compiled into JavaScript calls  
- **Declarative rendering**: UI is derived directly from data  
- **Conditional rendering**: render `<img>` only if `product.image` is present  
- **Composition**: `App` arranges `ProductCard` children inside a flex container  

## Components & Data
In `App.jsx`, products are defined as:

```js
const products = [
  { name: 'Wireless Mouse', price: 25.99, inStock: true },
  { name: 'Keyboard',       price: 45.50, inStock: false },
  { name: 'Monitor',        price: 199.99, inStock: true }
];
```

### `ProductCard.jsx`
- Displays product details (name, price, stock status)  
- Renders a bordered panel  
- Shows an image only if the product provides one  

### `App.jsx`
- Defines the product list  
- Renders three `ProductCard` components in a flex container  
- (Can be simplified later using `products.map()`)  

## Render & Data Flow
1. React starts in **`main.jsx`**, mounting `<App />` into `#root`  
2. **`App`** returns JSX with multiple `<ProductCard />` elements  
3. Each **`ProductCard`** receives a `product` object and React converts it into DOM nodes  
4. Because data is static, the app renders only once—no re-renders after the initial mount  

## Minimal Code Walkthrough
- **main.jsx** → `createRoot(...).render(<StrictMode><App />)`  
- **App.jsx** → Defines the product array → returns a flex container with `<ProductCard product={...} />`  
- **ProductCard.jsx** → Destructures `product` prop → conditionally renders image → displays fields + stock status  

## What’s New
Compared to earlier experiments, new concepts include:  
1. **React + Tooling** – First use of React with Vite for fast builds (instead of `<script>` tags)  
2. **Declarative UI Model** – UI expressed as a function of data  
3. **Reusable Component** – `ProductCard` centralizes markup and styling  
4. **Prop-Driven Flow** – Predictable one-way data passing via props  
5. **Separation of Concerns** – `main.jsx` (mounting), `App.jsx` (layout/data), `ProductCard` (presentation)  
6. **Foundation for State & Lists** – Structure prepares for `map()` and `useState`  
7. **Inline Styling Prototype** – Inline styles before moving to CSS Modules/Tailwind  

👉 **Key leap:** from *manual DOM changes* to *declaring a component tree from data.*

## Potential Enhancements
- Replace manual card rendering with `products.map()`  
- Add filtering (similar to Exp 5, but declaratively)  
- Fetch product data from JSON or an API  
- Introduce state (`useState`) for stock toggling, cart actions, etc.  
- Add prop validation (TypeScript or runtime checks)  
- Improve styling with CSS Modules, Tailwind, or styled-components  

## File Structure
```
Experiment-7/
├── index.html            # Root HTML with #root mount point
├── src/
│   ├── main.jsx          # React entry
│   ├── App.jsx           # Root component + data array
│   ├── ProductCard.jsx   # Presentational card component
│   ├── App.css / index.css
│   └── assets/
├── vite.config.js        # Vite build config
├── package.json          # Scripts + dependencies
└── README.md             # This document
```

## Quick Start
```bash
npm install
npm run dev    # Start dev server (Vite + HMR)
               # Open the shown localhost URL
```
## Live Demo
[Click here to view the project](https://23bad10001-experiment-07.bytexl.live/)


## Learning Objectives
- Understand React’s component + prop model  
- Compare declarative vs imperative rendering  
- Prepare for state (`useState`) and list rendering (`map`)  
- Establish a foundation with React + Vite toolchain  
