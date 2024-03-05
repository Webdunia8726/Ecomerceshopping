var addToCartButtons = document.querySelectorAll(".addToCartBtn");

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var productContainer = button.parentNode;
        var productName = productContainer.querySelector("h2").textContent;
        var price = productContainer.querySelector("p").textContent;
        var imageUrl = productContainer.querySelector("img").src;

        var cartItem = {
            name: productName,
            price: price,
            image: imageUrl
        };

        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart!");
    });
});