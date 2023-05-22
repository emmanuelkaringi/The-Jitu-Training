document.addEventListener('DOMContentLoaded', function () {
    const productDetails = document.getElementById('product-details');
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetchProductDetails(productId);
    }

    async function fetchProductDetails(productId) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            displayProductDetails(product);
        } catch (err) {
            console.log(err);
        }
    }

    function displayProductDetails(product) {
        const productTitle = document.querySelector('.product-title');
        const productCategory = document.querySelector('.product-category');
        const productDescription = document.querySelector('.product-description');
        const productPrice = document.querySelector('.product-price');

        productTitle.textContent = product.title;
        productCategory.textContent = product.category;
        productDescription.textContent = product.description;
        productPrice.textContent = `Ksh. ${product.price}`;

        addToCartBtn.addEventListener('click', function () {
            addToCart(product);
            alert('Product added to cart');
        });
    }
});
