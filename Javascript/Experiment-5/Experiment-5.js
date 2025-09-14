const categoryDropdown = document.getElementById('category');
const products = document.querySelectorAll('.product');

categoryDropdown.addEventListener('change', function () {
  const selectedCategory = this.value;

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (selectedCategory === "All" || selectedCategory === productCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
