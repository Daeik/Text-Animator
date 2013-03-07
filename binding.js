/**********************************
*******Biding DOM to Elements******
**********************************/

$(document).ready(function() {

	var ex = $('#ex');
	$('#lower').click(function() { ex.lower(null,100); });
	$('#lift').click(function() { ex.lift(null,100); });
	$('#wave').click(function() { ex.wave(null,80); });
	$('#slideLeft').click(function() { ex.slideLeft(null,200); });
	$('#slideRight').click(function() { ex.slideRight(null,200); });
	$('#enlarge').click(function() { ex.enlarge(null,15); });
	$('#minimize').click(function() { ex.minimize(null,15); });
	$('#dimout').click(function() { ex.dimout(); });
	$('#dimin').click(function() { ex.dimin(); });
	$('#shatter').click(function() { ex.shatter(); });

	$('#chain').click(function() { 
		ex.dimout().dimin().shatter(); 
	});
	
	$('#reset').click(function() { reset($('#ex')); });

	$('#nav li').on('mouseenter',function() {
		$(this).wave(null, 5, 200);
	});

});

function reset(el) {

	el.find('.di_el').stop();
	el.find('.di_el').css({
		'top': 0,
		'left': 0,
		'opacity': 1,
		'font-size': '22px'
	});

}