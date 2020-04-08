$("#target").keyup(function() {
	alert("You got keyed up fam.");
});
$("#target").keyup(function() {
	var value = $(this).val();
	$("p").text( value );
})
.keyup();