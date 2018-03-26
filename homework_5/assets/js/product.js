/* product.js
 *
 * Handles the add-to-cart process of items on product detail page
 * Also updates item count of shopping cart on loading of every other page
 */

/* Product object
 * Stores all attibutes of a product in the object: 
 * name of product, glazing, quantaty, and image */
function Product(glazing, quantity) {
	this.cinnamon = "Original Cinnamon Rolls";
	this.glazing = glazing;
	this.quantity = quantity;
	this.image = "original.jpg";
}

/* Select glazing for product
 * Allows only one glazing to be selected at a time
 * and updates the html file accordingly */
function selectGlazing(product, glazing) {
	var name = "#glazing-" + product.glazing;
	$(name).css("background-color", "#BBBBBB");
    product.glazing = glazing;
    product.image = "original-" + glazing + ".jpg";
    $("#product-image").attr("src", "assets/images/" + product.image);
    $("#glazing-" + glazing).css("background-color", "#666666");
}

/* Select quantity for product
 * Allows only one quantity to be selected at a time
 * and updates the html file accordingly */
function selectQuantity(product, quantity) {
	var name = "#quantity-" + product.quantity;
	$(name).css("background-color", "#BBBBBB");
	product.quantity = quantity;
	$("#quantity-" + quantity).css("background-color", "#666666");
}

/* Add to cart
 * Add product to the cart and combine duplicates of the same item */
function addToCart(cart, product) {
	for (i = 0; i < cart.length; i++) {
		var item = cart[i];
		if (item.cinnamon === product.cinnamon && item.glazing === product.glazing) {
			item.quantity += product.quantity;
			return;
		}
	}
	cart.push(product);
}

/* Update item count
 * Updates the html page with most updated item count */
function updateItemCount(cart) {
	var count = 0;
	for (i = 0; i < cart.length; i++) {
		count += cart[i].quantity;
	}
	$("#item-count").text(count + " Items");
}

$(document).ready(function() {

	/* Load shopping cart */
	var cart = JSON.parse(localStorage.getItem("savedCart"));
	if (cart === null) {
		cart = [];
	} else {
		/* Updates item count on the page from default zero if there are items */
		updateItemCount(cart);
	}

	/* Set product default to no glazing and quantity 1 */
	var currProduct = new Product("none", 1);

	/* Select a glazing */
	$("#glazing-none").click(function() {
		selectGlazing(currProduct, "none");
	});
	$("#glazing-sugarmilk").click(function() {
		selectGlazing(currProduct, "sugarmilk");
	});
	$("#glazing-vanillamilk").click(function() {
		selectGlazing(currProduct, "vanillamilk");
	});
  	$("#glazing-doublechocolate").click(function() {
  		selectGlazing(currProduct, "doublechocolate");
	});

	/* Select a quantity */
	$("#quantity-1").click(function() {
		selectQuantity(currProduct, 1);
	});
	$("#quantity-2").click(function() {
		selectQuantity(currProduct, 2);
	});
	$("#quantity-6").click(function() {
		selectQuantity(currProduct, 6);
	});
	$("#quantity-12").click(function() {
		selectQuantity(currProduct, 12);
	});

	/* Add to cart */
	$("#add-to-cart").click(function() {
		/* Add product to cart and update item count on the page */
		addToCart(cart, currProduct);
		updateItemCount(cart);
		/* Save updated cart to local storage */
		localStorage.setItem("savedCart", JSON.stringify(cart));
		currProduct = new Product(currProduct.glazing, currProduct.quantity);
	});

});
