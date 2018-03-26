/* carts.js
 * 
 * Handles dynamic display of the shopping cart page
 * Display no-item message when there's no item in the shopping cart;
 * display item list, summary, and checkout button otherwise.
 */

/* Name of Glazing
 * Mapping of glazing id to name displayed */
function nameOfGlazing(glazing) {
    if (glazing === "none") return "None";
    if (glazing === "sugarmilk") return "Sugar Milk";
    if (glazing === "vanillamilk") return "Vanilla Milk";
    if (glazing === "doublechocolate") return "Double Chocolate";
    return "";
}

/* Clean Page
 * Clean shopping cart, summary and checkout (in case of no-item) */
function cleanPage() {
    $("#shopping-cart").remove();
    $("#summary").remove();
    $("#checkout").remove();
}

/* Create Item List
 * Dynamically generates item list from local storage */
function createItemList(cart) {
    for (i = 0; i < cart.length; i++) {
        var item = cart[i];
        var list = $("#cart-items");
        list.append("<li id=\"" + item.cinnamon + "-" + item.glazing + "\"><img class=\"small-pic\" src=\"assets/images/" + item.image + "\" alt=\"\"><div class=\"cart-text\">" + item.cinnamon + "<div class=\"cart-subtext\">Glazing: " + nameOfGlazing(item.glazing) + "</div></div><div class=\"cart-num\">" + item.quantity + "</div><img class=\"cart-arrow\" src=\"assets/images/arrow.png\" alt=\"\"><img class=\"cart-cross\" src=\"assets/images/cross.png\" alt=\"\"></li>");
    }
}

/* Update Summary
 * Dynamically generates prices based on quantaties from local storage */
function updateSummary(cart, totalValue) {
    var totalValue = 0;
    for (i = 0; i < cart.length; i++) {
        totalValue += 5 * cart[i].quantity;
    }
    var tax = Math.round(totalValue * 7) / 100;
    var estimatedTotal = Math.round(totalValue * 107) / 100;

    /* Fixing minor syntax issues for special cases*/
    if (totalValue * 7 % 100 === 0) {
        tax += ".00";
        estimatedTotal += ".00";
    } else if (totalValue * 7 % 10 === 0) {
        tax += "0";
        estimatedTotal += "0";
    }

    /* Display text */
    $("#subtotal").text("$" + totalValue + ".00");
    $("#tax").text("$" + tax);
    $("#estimated-total").text("$" + estimatedTotal);
}

$(document).ready(function() {

    /* Load shopping cart */
    var cart = JSON.parse(localStorage.getItem("savedCart"));
    if (cart === null) {
        cart = [];
    } else {
        updateItemCount(cart);
    }

    /* Display no-item message when there's no item in the cart */
    if (cart.length == 0) {
        cleanPage();
    } else {
        /* Otherwise remove default no-item message and add item list
         * and price summary to page */
        $("#no-item").remove();
        createItemList(cart);
        updateSummary(cart);
    }

    /* Delete an item from the cart */
    $(".cart-cross").click(function() {

        /* Remove item from html and from cart */
        var index = $(this).parent().index();
        $(this).parent().remove();
        cart.splice(index, 1);
        updateItemCount(cart);

        /* Handles the case when there's no item left */
        if (cart.length === 0) {
            cleanPage();
            $("#container").append("<h1 id=\"no-item\">There's no item in your cart!</h1>");
        } else {
            /* Updates price summary */
            updateSummary(cart);
        }

        /* Updates cart in local storage */
        localStorage.setItem("savedCart", JSON.stringify(cart));
        
    });
});

