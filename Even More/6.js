var n = prompt('Enter a number');
var choice = prompt('Choose "s" for sum or "p" for product');
var total = 0;
if (choice == 's'){
	for (var i = 0; i < n; i++){
		total = (total + i);
	}
} else if (choice == 'p') {
	total = 1;
	for (var = i; i <= 1; i++){
		total = ((total) * 1);
	}
} else{
	console.log("invalid");
}
console.log(total);