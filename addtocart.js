var cartItemsDiv = document.getElementById("cartItems");
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var totalPrice = 0;

cart.forEach(function(item, index) {
    var cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name} - ₹${item.price}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItemsDiv.appendChild(cartItemDiv);
    var itemPrice = parseFloat(item.price.replace(/[^\d.-]/g, ""));
    if (!isNaN(itemPrice)) {
        totalPrice += itemPrice;
    }
});

var totalElement = document.getElementById("totalPrice");
totalElement.textContent = "Total Price: ₹" + totalPrice.toFixed(2);

var removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var index = parseInt(button.getAttribute("data-index"));
        var itemPrice = parseFloat(cart[index].price.replace(/[^\d.-]/g, ""));
        if (!isNaN(itemPrice)) {
            totalPrice -= itemPrice;
        }
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    });
});

var clearCartBtn = document.getElementById("clearCartBtn");
clearCartBtn.addEventListener("click", function() {
    localStorage.removeItem("cart");
    location.reload();

    
});
var buyNowBtn = document.getElementById("buyNowBtn");
buyNowBtn.addEventListener("click", function() {
    // You can add your buy now logic here
    alert("Implement your Buy Now functionality here.");
});