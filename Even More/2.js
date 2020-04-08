function myFunction() {
  var person = prompt("Who are you?", "Name");
  if (person != null) {
    document.getElementById("testing").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}