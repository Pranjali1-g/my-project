Dynamic Product Filter – Experiment 5

This experiment focuses on building an interactive product filtering system using HTML, CSS, and JavaScript. The feature allows users to filter a list of products in real time based on categories selected from a dropdown menu, reinforcing skills in DOM manipulation, event handling, and accessible UI design.

Objective

To create a web-based component where a <select> dropdown controls the visibility of products categorized through data-* attributes, ensuring a dynamic and user-friendly filtering experience without reloading the page.

Key Components
HTML

Dropdown (<select id="categoryFilter">) – Acts as the filter trigger with options: All, Clothing, Electronics, Books.

Product List (<ul id="productList">) – Contains filterable items.

List Items (<li class="product-item" data-category="...">) – Each product is tagged with a category for filtering.

JavaScript

Uses DOMContentLoaded to ensure safe execution.

Selects elements via getElementById and querySelectorAll.

Reads product categories with getAttribute('data-category').

Filters dynamically by toggling style.display.

Reuses a single applyFilter() function for initial and event-driven updates.

CSS

.container – Creates a bordered rectangular box with padding, centered on the page.

#productList – Uses flexbox in column layout with spacing between items.

.product-item – Styled as card-like boxes with padding, rounded corners, and a light background.

Interactive Flow

Page loads → all product items are cached.

User selects a category → script checks each item’s data-category.

Matching products remain visible; others are hidden.

Default state ("All") shows the full list.

Valid & Invalid Cases

Valid: Selecting “Clothing” shows only T-Shirt and Jeans.

Invalid: Missing data-category attribute prevents correct filtering.

Error Prevention: Dropdown always has a default value, so empty selection is impossible.

Learning Outcomes

Gained practical experience in DOM selection and event handling.

Understood the role of data- attributes* in semantic filtering.

Practiced real-time UI updates using style.display.

Designed a clean CSS layout with containers and styled list items.

Learned to define valid/invalid test cases for dropdown-based filters.