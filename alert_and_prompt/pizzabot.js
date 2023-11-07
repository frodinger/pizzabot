const vegetarian = "Vegetarian Pizza";
const hawaii = "Hawaii Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function checkOrderName(pizzaName) {
    return pizzaName.toLowerCase() == vegetarian.toLowerCase() || pizzaName.toLowerCase() == hawaii.toLowerCase() 
    || pizzaName.toLowerCase() == pepperoni.toLowerCase() || pizzaName.toLowerCase() == "vegetarian".toLowerCase() 
    || pizzaName.toLowerCase() == "hawaii".toLowerCase() || pizzaName.toLowerCase() == "pepperoni".toLowerCase();
}

function orderPizza() {
    alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaii} and ${pepperoni}`);
    
    let orderName = prompt('Enter the name of the pizza you want to order today');
    
    if (checkOrderName(orderName) == false) {
        alert("That pizza isn't on the menu");
    }
    else {
        let orderQuantity = prompt(`How many of the ${orderName} do you want?`);
        
        function cookingTime(orderQuant){
            let cookTime = "";
            if (orderQuant <= 2) {
                cookTime = "The pizzas will take 10 minutes.";
            } else if (orderQuant <= 5) {
                cookTime = "The pizzas will take 15 minutes.";
            } else if (orderQuant >= 6) {
                cookTime = "The pizzas will take 20 minutes.";
            }
            return cookTime;
        }
        
        function totalCost(orderQuant) {
            let orderTotal = orderQuant * pizzaPrice;
            alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${cookingTime(orderQuant)}`);
        }
        
        cookingTime(orderQuantity);
        totalCost(orderQuantity);
    }
}