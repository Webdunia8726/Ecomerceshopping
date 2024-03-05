document.getElementById("addToCartBtn").addEventListener("click", function() {
    // Get product data
    var productName = document.querySelector("#product h2").textContent;
    var price = document.querySelector("#product p").textContent;
    var imageUrl = document.querySelector("#product img").src;

    // Save product data to localStorage
    var cartItem = {
        name: productName,
        price: price,
        image: imageUrl
    };

    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show message
    document.getElementById("message").textContent = "Product added to cart!";
});