$(document).ready(function() {

	function startFB () {
		var number = prompt("Please enter a number");
		while (isNaN(+number) == true) {
			number = prompt("Supply a new number");
		} 
		return +number;
	}
	
	function createDiv (value) {
		$('<div class="style"><p>' + value + '</p></div>').appendTo('#wrapper');
	}

	$('body').on('click', 'button', function() {

		$('#wrapper').empty();
		var limit = Math.floor(startFB());

		for(var i = 1; i <= limit; i++) {
			if(i % 15 == 0) {
				createDiv("fizz buzz");
			} else if (i % 3 == 0) {
				createDiv("fizz");
			} else if (i % 5 == 0) {
				createDiv("buzz");
			} else {
				createDiv(i);
			}
		}
	});
});