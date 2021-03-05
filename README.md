# Pizzeria
#### Independent project #4 for Epicodus
#### Project initiated: 02-25-2021
#### By Sofia Acosta
## Project Description
This is my indepentent project to showcase the lesson learned last week: Object-Oriented JavaScript. This is a website for a pizza company where a user can choose one or more individual toppings and a size to order a pizza.      
## Specs
 
```
Describe: Pizza()
Test: "It will create Pizza instances with properties: toppings and size"
let pizza = new Pizza(["mushrooms", "pepperoni"], "medium");
Expect(pizza.toppings).toEqual(["mushrooms", "pepperoni"]);
Expect(pizza.size).toEqual("medium");

Describe: Pizza.prototype.calculatePrice()
Test: "It will define a base price of $10 and calculate extra cost by adding selected toppings"
let pizza = new Pizza(["mushrooms", "pepperoni"], "medium");
Expect(pizza.calculatePrice()).toEqual(13);

Describe: Pizza.prototype.calculatePrice()
Test: "It will define a base price of $10 and calculate additional cost by adding selected toppings and size"
let pizza = new Pizza(["mushrooms", "black-olives", "pepperoni"], "large");
Expect(pizza.calculatePrice()).toEqual(18);

```

## Technologies Used
* HTML
* Javascript
* CSS
* JQuery
## Set up / Installation requirements
*Download a .zip copy of this repository: https://github.com/Sofacosta/pizzeria.git by clicking the green "code" button. 
* Launch the index.html file into your browser
 
OR
 
* Open your terminal and navigate to the folder where you would like to save this project
* Clone this repository in your terminal: $ git clone
* Go to the top level of the repository: $ cd programming-language-suggester
* Open index.html into your browser: $ open index.html
 
## Known Bugs
* No known bugs
## Notes

## License
* [MIT](https://choosealicense.com/licenses/mit)
* Copyright 2021 Sofia Acosta
## Contact
Sofia Acosta sofiaacostarascon@gmail.com
 

