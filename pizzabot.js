const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt('Enter the name of the pizza you want to order today');

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

let orderTotal = orderQuantity * pizzaPrice;
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);

function cookingTime(orderQuantity) {
    if (orderQuantity <= 2 && orderQuantity >= 1) {
        return "The pizzas will take 10 minutes.";
    } else if (orderQuantity <= 5 && orderQuantity >= 3) {
        return "The pizzas will take 15 minutes.";
    } else {
        return "The pizzas will take 20 minutes.";
    }
}