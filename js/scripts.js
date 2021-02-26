// Pizza constructor that receives toppings and size data collected from the fomr
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
} 
Pizza.prototype.calculatePrice = function() {
  // The calculatePrice method on the Pizza prototype caclulates the price of the pizza using the toppings and size information that was gathered from the form and passed to the constructor. A basePrice is defined and toppings prices are calculated using a forEach
  const basePrice = 10;
  let additions = 0;
  let sizeModifier = 0;

  this.toppings.forEach(function(topping) {
    if (topping === "mushrooms" || topping === "onions" || topping === "extra-cheese" || topping === "black-olives" || topping === "green-peppers") {
      additions += 1;
    } if (topping === "pepperoni" || topping === "sausage" || topping === "bacon" || topping === "artichokes" || topping === "raw-arugula") {
      additions += 2;
    }
  });
  
  if (this.size === "medium") {
    sizeModifier += 2;
  } if (this.size === "large") {
    sizeModifier += 4; 
  }

  return basePrice + additions + sizeModifier;
}

// User Interface Logic ------------

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    const toppings = $("input[name=toppings]:checked").map(function() {
      return $(this).val();
    }).get();
    const size = $("input[name=size]:checked").val();
    console.log(toppings);
    console.log(size);
    const pizza = new Pizza(toppings, size);

    $('#price').html(`${pizza.calculatePrice()}.00`);
    $('#response').show();
  });
});