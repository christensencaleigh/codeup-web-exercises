$(document).ready(function() {
	// alert( 'The DOM has finished loading!' );

//jquery selectors

	// //id selector
	// alert($('#my-paragraph').html());
	// alert($('#xmas').html() );
	//
	// //class selector
	// $('.kalypso').css('border', '1px solid red');
	//
	// //element selectors
	// $('li').css('font-size', '20px');
	// alert($('h1').html());
	//
	// //multiple selectors
	// $('li, h1, p').css('background-color', 'green')
	//
//jquery events

	//change color of h1 element

	$('#kalypso').click(function() {
		$(this).css('background-color', 'green');
	});

	//make p have font size of 18px using dblclick

	$('p').dblclick(function() {
		$(this).css('font-size', '18px');
	})

	//set all li test color to red when hovering, reset to black when it is not

	$('li').hover(
		function() {
			$(this).css('color', 'red');
	},
		function() {
			$(this).css('color', 'black');
		}
	);

});









