var n = prompt('Enter a #');
var total = 0;
for (var i = 0; i <= n; i++) {
	if ((i%3==0)||(i%5==0)){
	total = (total + i);
}
}
console.log(total);
