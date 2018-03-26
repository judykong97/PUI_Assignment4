
function nameOfGlazing(glazing) {
    if (glazing === "none") return "None";
    if (glazing === "sugarmilk") return "Sugar Milk";
    if (glazing === "vanillamilk") return "Vanilla Milk";
    if (glazing === "doublechocolate") return "Double Chocolate";
    return "";
}

function cleanPage() {
    $("#shopping-cart").remove();
    $("#summary").remove();
    $("#checkout").remove();
}

function createItemList(cart) {
    for (i = 0; i < cart.length; i++) {
        var item = cart[i];
        var list = $("#cart-items");
        list.append("<li id=\"" + item.cinnamon + "-" + item.glazing + "\"><img class=\"small-pic\" src=\"assets/images/" + item.image + "\" alt=\"\"><div class=\"cart-text\">" + item.cinnamon + "<div class=\"cart-subtext\">Glazing: " + nameOfGlazing(item.glazing) + "</div></div><div class=\"cart-num\">" + item.quantity + "</div><img class=\"cart-arrow\" src=\"assets/images/arrow.png\" alt=\"\"><img class=\"cart-cross\" src=\"assets/images/cross.png\" alt=\"\"></li>");
    }
}

function updateSummary(cart, totalValue) {
    var totalValue = 0;
    for (i = 0; i < cart.length; i++) {
        totalValue += 5 * cart[i].quantity;
    }
    var tax = Math.round(totalValue * 7) / 100;
    var estimatedTotal = Math.round(totalValue * 107) / 100;
    if (totalValue * 7 % 100 === 0) {
        tax += ".00";
        estimatedTotal += ".00";
    } else if (totalValue * 7 % 10 === 0) {
        tax += "0";
        estimatedTotal += "0";
    }

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

    if (cart.length == 0) {
        cleanPage();
    } else {
        $("#no-item").remove();
        createItemList(cart);
        updateSummary(cart);
    }

    $(".cart-cross").click(function() {
        var index = $(this).parent().index();
        $(this).parent().remove();
        cart.splice(index, 1);
        updateItemCount(cart);
        if (cart.length === 0) {
            cleanPage();
            $("#container").append("<h1 id=\"no-item\">There's no item in your cart!</h1>");
        } else {
            updateSummary(cart);
        }
        localStorage.setItem("savedCart", JSON.stringify(cart));
    });
});

