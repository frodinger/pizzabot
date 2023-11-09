/*
Jag får det inte att fungera men här är iaf mitt försök
*/
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const pizzaType = document.getElementById("pizzaType");
const pizzaQuantity = document.getElementById("pizzaQuantity");
const orderBtn = document.getElementById("orderBtn");
const orderTextEl = document.getElementById("orderText");

const orderName = pizzaType.value;
const orderQuantity = pizzaQuantity.value;
const orderTotal = orderQuantity * pizzaPrice;


// funktioner
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

orderBtn.addEventListener("click", (e) => {
    const orderText = `Great, I'll get started on your ${orderName} right away. ${cookingTime(orderQuantity)} It will cost ${orderTotal} kr`;
    orderTextEl.textContent = orderText;
    /*
    if (orderQuantity < 1) {
        orderTextEl.textContent = "You can't order less than 1 pizza";
    } else {
        const orderText = `Great, I'll get started on your ${orderName} right away. ${cookingTime(orderQuantity)} It will cost ${orderTotal} kr`;
        orderTextEl.textContent = orderText;
    }
    */
});