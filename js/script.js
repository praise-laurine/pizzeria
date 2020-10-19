$(document).ready(function () {
    function Pizzeria(size, topping, crust, flavor) {
        this.flavor = flavor;
        this.crust = crust;
        this.topping = topping;
        this.size = size;
    }
    var totalAmount = 0;
    var OrderNew = [];
    Pizzeria.prototype.ToppingPrice = function () {
        if (this.size === "large") {
            if (this.topping === "mushroom") {
                return 870;
            } else if (this.topping === "Green pepper") {
                return 850;
            } else {
                return 820;
            }

        } else if (this.size === "madium") {
            if (this.topping === "mushroom") {
                return 820;
            } else if (this.topping === "Green pepper") {
                return 800;
            } else {
                return 770;
            }
        } else {
            if (this.topping === "mushroom") {
                return 670;
            } else if (this.topping === "Green pepper") {
                return 650;
            } else {
                return 620;
            }
        }
    }
    Pizzeria.prototype.crustPrice = function () {

        if (this.size === "large") {
            if (this.crust === "crispy") {
                return 1000;
            } else if (this.crust === "stuffed") {
                return 950;
            } else {
                return 980;
            }

        } else if (this.size === "medium") {
            if (this.crust === "crispy") {
                return 950;
            } else if (this.crust === "stuffed") {
                return 900;
            } else {
                return 930;
            }
        } else if (this.size === "small") {
            if (this.crust === "crispy") {
                return 800;
            } else if (this.crust === "stuffed") {
                return 750;
            } else {
                return 780;
            }
        }

    }
    Pizzeria.prototype.flavorPrice = function () {

        if (this.size === "large") {
            if (this.flavor === "buffalo Chicken") {
                return 1300;
            } else if (this.flavor === "Sunchoke Pizza") {
                return 1210;
            } else if (this.flavor === "Chicken alfredo Pizza") {
                return 1250;
            } else if (this.flavor === "Raspberry Pizza") {
                return 1400;
            } else if (this.flavor === "periperi Pizza") {
                return 1350;

            } else {
                return 1410;
            }

        } else if (this.size === "medium") {
            if (this.flavor === "buffalo Chicken") {
                return 1250;
            } else if (this.flavor === "Sunchoke Pizza") {
                return 1160;
            } else if (this.flavor === "Chicken alfredo Pizza") {
                return 1200;
            } else if (this.flavor === "Raspberry Pizza") {
                return 1350;
            } else if (this.flavor === "periperi Pizza") {
                return 1250;
            } else {
                return 1360;
            }
        } else if (this.size === "small") {
            if (this.flavor === "buffalo Chicken") {
                return 1100;
            } else if (this.flavor === "Sunchoke Pizza") {
                return 1010;
            } else if (this.flavor === "Chicken alfredo Pizza") {
                return 1050;
            } else if (this.flavor === "Raspberry Pizza") {
                return 1200;
            } else if (this.flavor === "periperi Pizza") {
                return 1150;

            } else {
                return 1210;
            }
        }
    }
    Pizzeria.prototype.flavorPrice = function () {
        return this.crustPrice() + this.ToppingPrice() 
    }

    $("#order-form").submit(function (event) {
        event.preventDefault();
        var PizzaFlavor = $("#Flavor").val();
        var PizzaSize = $("#size").val();
        var PizzaCrust = $("#crust").val();
        var PizzaTopping = $("#toppings").val();
        var newPizza = new Pizzeria(PizzaFlavor, PizzaSize, PizzaCrust, PizzaTopping);
        OrderNew.push(newPizza);
        console.log(OrderNew)
        $("#Flavor").val("");
        $("#size").val("");
        $("#crust").val("");
        $("#toppings").val("");

        totalAmount = 0
        for (let i = 0; i < OrderNew.length; i++ ){
            totalAmount += OrderNew[i].flavorPrice();
        }
        $("#ordersTaken").append(
            "<tr>" +
            '<th scope="orderCalculation">' +
            newPizza.flavor +
            " - " +
            newPizza.size +
            "  @ " +
            newPizza.flavorPrice() +
            "</th>" +
            "<td>" +
            newPizza.topping +
            " @ " +
            newPizza.ToppingPrice() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " @ " +
            newPizza.crustPrice() +
            "</td>" +
            "<td>" +
            newPizza.flavorPrice() +
            "</td>" +
            "</tr>"
        );

        $("#order-summary").append("");
        if (OrderNew.length > 0) {
            $("#form-heading").empty();
            $("#form-heading").append("Make A New Order");
        }
        $("#totalAmount").fadeIn();
        $("#Checkout").fadeIn();
        $("#orderClass").fadeIn();

        $("#totalAmount").empty();
        $("#totalAmount").append(totalAmount);
        $(".totalAmount").show();

});

$("#Checkout").click(function () {
    $(".checkout-info").show();
});

$("#checkoutForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var name = $("#phone").val();
    var deliveryOption = $("#OptionDelivery").val();
    NameOfCustomer = name;
    $("#name").val("");
    $("#OptionDelivery").val("");
    $(".checkout-info").hide();
    $("#Checkout").hide();
    $("#totalAmount").empty();
    if (deliveryOption === "Home Delivery?") {
        $(".deliveryLocation").show();
        $(".deliveryCost").show();
        $("#totalAmount").empty();
        $("#delivery-cost").append(400);
        totalAmount += 400;
        $("#totalAmount").empty();
        $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $(".TotalAmount").show();

        $("#totalAmount").append(totalAmount);
    } else {
        alert(NameOfCustomer + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hours." + " Make sure you have the total amount for the order during the delivery to avoid delays." + " Incase there is any comment of complaint, Please reach out to us as soon as possible.");
    }
});

$("#locationForm").submit(function (event) {
    event.preventDefault();
    var estateEntered = $("#estate").val();
    var houseNumberEntered = $("#houseNumber").val();
    estate = estateEntered;
    houseNumber = houseNumberEntered;
    $("#Checkout").hide();
    $(".deliveryLocation").hide();
    $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $(".TotalAmount").show();
    alert(NameOfCustomer + ": Your new total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hour." + " Make sure you have the total amount for the order during the delivery to avoid delays." + " Incase there is any comment of complaint, Please reach out to us as soon as possible");
});
// $("#contacts").submit(function (event) {
//     event.preventDefault();
//     var name1 = $("#form1").val();
//     var email1 = $("#form2").val();
//     var message1 = $("#form3").val();
//     alert("Hello! " + name1 + "," + " We have received your message. Thank you for reaching out to us. ");

// });




});