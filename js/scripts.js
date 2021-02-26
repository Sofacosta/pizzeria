// Pizza constructor that receives toppings and size data collected from the fomr
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
} 

Pizza.prototype.calculatePrice = function () {
  // The calculatePrice method on the Pizza prototype caclulates the price of the pizza using the toppings and size information that was gathered from the form and passed to the constructor. A basePrice is defined and toppings prices are calculated using a forEach
  const basePrice = 10;
  let additions = 0;

  this.toppings.forEach(function(topping) {
    if (topping === "mushrooms" || topping === "onions" || topping === "extra-cheese" || topping === "black-olives" || topping === "green-peppers") {
      additions += 1;
    } if (topping === "pepperoni" || topping === "sausage" || topping === "bacon" || topping === "artichokes" || topping === "raw-arugula") {
      additions += 2;
    }
  });
    //if (this.size === "medium") {
      //additions += 2;
    //} if (this.size === "large") {
      //additions += 4; 
    //} LEFT OFF HERE!!!!
    }

  console.log(additions);
  return basePrice + additions;

// this data will come from the form
const toppings = ["mushrooms", "pepperoni"];
const size = "medium";

// here we are creating a new pizza order using the Pizza constructor and passing in the data collected from the form
const pizza = new Pizza(toppings, size);

// here we are calculating the price of the pizza using the calculatePrice function on the prototype of our newly placed pizza order
console.log("The price of this fresh, hot pizza is the low sum of only: $" + pizza.calculatePrice());