$(document).ready(function() {
    function Pizzeria(size,topping,crust,flavor){
        this.flavor =flavor;
        this.crust = crust;
        this.topping = topping;
        this.size = size; 
    }
    Pizzeria.prototype.ToppingPrice = function () {
        if (this.size === "large") {
            if (this.topping === "mushroom") {
                return 870;
            }else if (this.topping === "Green pepper") {
                return 850;
            }else {
                return 820;
            }
            
        } else if (this.size === "madium") {
            if (this.topping === "mushroom") {
                return 820;
            }else if (this.topping === "Green pepper") {
                return 800;
            }else {
                return 770;
            }
        }else {
            if (this.topping === "mushroom") {
                return 670;
            } else if (this.topping === "Green pepper") {
                return 650;
            }else {
                return 620;
            }
        }
        Pizzeria.prototype.crustPrice = function () {

        if (this.size === "large") {
            if (this.crust === "crispy") {
                return 1000;
            }else if (this.crust === "stuffed") {
                return 950;
            }else {
                return 980;
            }
            
        } else if (this.size === "medium") {
            if (this.crust === "crispy") {
                return 950;
            }else if (this.crust === "stuffed") {
                return 900;
            }else {
                return 930;
            }
        } else if (this.size === "small") {
        if (this.crust === "crispy") {
            return 800;
        }else if (this.crust === "stuffed") {
            return 750;
        }else {
            return 780;
        }
    }
        
} 
Pizzeria.prototype.flavorPrice = function () {

    if (this.size === "large") {
        if (this.flavor === "buffalo Chicken") {
            return 1300;
        }else if (this.flavor === "Sunchoke Pizza") {
            return 1210;
        }else if (this.flavor === "Chicken alfredo Pizza") {
            return 1250;
        }else if (this.flavor === "Raspberry Pizza") {
            return 1400;
        }else if (this.flavor === "periperi Pizza") {
            return 1350;
        
        }else {
            return 1410;
        }
        
    } else if (this.size === "medium") {
        if (this.flavor === "buffalo Chicken") {
            return 1250;
        }else if (this.flavor === "Sunchoke Pizza") {
            return 1160;
        }else if (this.flavor === "Chicken alfredo Pizza") {
            return 1200;
        }else if (this.flavor === "Raspberry Pizza") {
            return 1350;
        }else if (this.flavor === "periperi Pizza") {
            return 1250;
        }else {
            return 1360;
        }
    } else if (this.size === "small") {
    if (this.flavor === "buffalo Chicken") {
        return 1100;
    }else if (this.flavor === "Sunchoke Pizza") {
        return 1010;
    }else if (this.flavor === "Chicken alfredo Pizza") {
        return 1050;
    }else if (this.flavor === "Raspberry Pizza") {
        return 1200;
    }else if (this.flavor === "periperi Pizza") {
        return 1150;
    
      }else {
        return 1210;
    }
}
}    
}
$("#order-form").submit(function(event) {
    event.preventDefault();
    var PizzaFlavor = $("#Flavor").val();
    var PizzaSize = $("#size").val();
    var PizzaCrust = $("#crust").val();
    var PizzaTopping = $("#toppings").val();
    var newPizza = new pizza(PizzaFlavor, PizzaSize, PizzaCrust, PizzaTopping);
})  


}); 
