const pizzaPrice = 80;

const pizzaType = document.getElementById("pizzaType");
const pizzaQuantity = document.getElementById("pizzaQuantity");
const orderBtn = document.getElementById("orderBtn");
const orderTextEl = document.getElementById("orderText");

orderBtn.addEventListener("click",(e) => {
    const orderName = pizzaType.value;
    const orderQuantity = pizzaQuantity.value;
    const orderTotal = orderQuantity * pizzaPrice;
    let cookingTime = "";
  
    if (orderQuantity <= 2) {
      cookingTime = 10;
    } else if (orderQuantity <= 5) {
      cookingTime = 15;
    } else if (orderQuantity >= 6) {
      cookingTime = 20;
    }
    orderTextEl.textContent = `Great, I'll get started on your ${orderName} right away. The pizzas will take ${cookingTime} minutes. It will cost ${orderTotal} kr.`;
});