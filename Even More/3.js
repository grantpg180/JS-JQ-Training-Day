  var person = prompt("Who are you?");
  if ((person !== 'Alice') || (person !== 'Bob')) {
    console.log("Access Denied!");
} else{
	console.log("Hello" + person);
}