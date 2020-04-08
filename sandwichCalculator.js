function sandwichCalculator(slicesOfBread, slicesOfCheese){
	var sandwiches = Math.floor(slicesOfBread /2);


if ((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) {
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese = 0) || (slicesOfBread < 2)) {
		console.log("Oops, no sandwiches for you.");
		return 0;
	}

}

sandwichCalculator(10, 6);
//calls the functions
console.log(sandwichCalculator(10, 6));
//logs the amount of sandwiches for "10" slices of bread