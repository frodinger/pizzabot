const vegetarian = "Vegetarian Pizza";
const hawaii = "Hawaii Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// functions
function checkOrderName(pizzaName) {
    return pizzaName.toLowerCase() == vegetarian.toLowerCase() || pizzaName.toLowerCase() == hawaii.toLowerCase() 
    || pizzaName.toLowerCase() == pepperoni.toLowerCase() || pizzaName.toLowerCase() == "vegetarian".toLowerCase() 
    || pizzaName.toLowerCase() == "hawaii".toLowerCase() || pizzaName.toLowerCase() == "pepperoni".toLowerCase();
}

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

// koden

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaii} and ${pepperoni}`);

let correctOrder = false;

while (!correctOrder) {
    let orderName = prompt('Enter the name of the pizza you want to order today');

    correctOrder = checkOrderName(orderName);
    if (!correctOrder) {
        alert("That pizza isn't on the menu");
    }
}

let orderQuantity = prompt(`How many of the ${orderName} do you want?`);

totalCost(orderQuantity);

/*

function checkIfValidQuantity(quant) {
    return quant >= 1;
}

let validQuantity = false;

while (!validQuantity) {
    let orderQuantity = prompt(`How many of the ${orderName} do you want?`);
    
    validQuantity = checkIfValidQuantity(orderQuantity);
    if (!validQuantity) {
        alert("You can't order less than one pizza");
    }
}



totalCost(orderQuantity);
*/