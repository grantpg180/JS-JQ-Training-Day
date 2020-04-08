var toppings = ["sausage", "pepperoni", "cheese", "ham", "bacon"];


var pizza = function(){
	var slogan = "“A delicious pizza with " + toppings.join(" and ") + ".";
	return slogan;
}

console.log(pizza());
