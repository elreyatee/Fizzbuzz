$(document).ready(function() {

	function createDiv (value) {
		$('<div><p>' + value + '</p></div>').appendTo('body');
	}

	$('body').on('click', 'button', function() {

		for(var i = 1; i <= 100; i++) {
			if((i % 3 == 0) && (i % 5 == 0)) {
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