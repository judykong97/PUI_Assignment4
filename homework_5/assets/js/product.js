
function Product(glazing, quantity) {
	this.cinnamon = "Original Cinnamon Rolls";
	this.glazing = glazing;
	this.quantity = quantity;
	this.image = "original.jpg";
}

function selectGlazing(product, glazing) {
	var name = "#glazing-" + product.glazing;
	$(name).css("background-color", "#BBBBBB");
    product.glazing = glazing;
    product.image = "original-" + glazing + ".jpg";
    $("#product-image").attr("src", "assets/images/" + product.image);
    $("#glazing-" + glazing).css("background-color", "#666666");
}

function selectQuantity(product, quantity) {
	var name = "#quantity-" + product.quantity;
	$(name).css("background-color", "#BBBBBB");
	product.quantity = quantity;
	$("#quantity-" + quantity).css("background-color", "#666666");
}

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
		updateItemCount(cart);
	}

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
		addToCart(cart, currProduct);
		updateItemCount(cart);
		localStorage.setItem("savedCart", JSON.stringify(cart));
		currProduct = new Product(currProduct.glazing, currProduct.quantity);
	});

});
