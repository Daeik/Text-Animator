//*************************
//*************************
//
// TXT effect control by KDI
//
//*************************
//*************************


(function($) {


	$.fn.lift = function(byWord, distance, animSpd) {

		var distance = distance || 20;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'top':'-='+distance}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.lower = function(byWord, distance, animSpd) {

		var distance = distance || 20;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'top':'+='+distance}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.wave = function(byWord, distance, animSpd) {

		var distance = distance || 20;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	el.self.lift(byWord, distance, animSpd).lower(byWord, distance, animSpd);

	 	return el.self;

	};	

	$.fn.slideLeft = function(byWord, distance,animSpd) {

		var distance = distance || 20;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'left':'-='+distance}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.slideRight = function(byWord, distance,animSpd) {

		var distance = distance || 20;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'left':'+='+distance}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.enlarge = function(byWord, size, animSpd) {

		var size = size || 10;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'font-size':'+='+size}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.minimize = function(byWord, size, animSpd) {

		var size = size || 10;
		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'font-size':'-='+size}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.dimout = function(byWord, animSpd) {

		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'opacity': 0}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.dimin = function(byWord, animSpd) {

		var animSpd = animSpd || 100;

		var el = $(this).di_setup(byWord);

	 	for (var i=0; i<el.strlen; i++) {
	 		el.self.find('.'+i).animate({'opacity': 1}, animSpd + i*30);
	 	}

	 	return el.self;

	};

	$.fn.shatter = function(byWord, distance, animSpd) {

		var distance = distance || 200;
		var animSpd = animSpd || 1000;

		var el = $(this).di_setup(byWord);

		var wrapperW = el.self.outerWidth();
		var wrapperH = el.self.outerHeight();
		var wrapperOffset = el.self.offset();
		var centerX = wrapperOffset.left + wrapperW/2;
		var centerY = wrapperOffset.top + wrapperH/2;

	 	for (var i=0; i<el.strlen; i++) {

	 		var sel = el.self.find('.'+i);
	 		var offset = el.self.find('.'+i).offset();
	 		var x = offset.left;
	 		var y = offset.top;
	 		var randX = Math.floor(Math.random() * 10 + 1);
	 		var randY = Math.floor(Math.random() * 10 + 1);
	 		
	 		var toX = distance * randX;
	 		var toY = distance * randY;

	 		if (x <= centerX && y <= centerY) {
	 			sel.animate({
	 				'top':'-=' + toX,
	 				'left':'-=' + toY
	 			}, animSpd);
	 		} else if (x > centerX && y > centerY) {
	 			sel.animate({
	 				'top':'+=' + toX,
	 				'left':'+=' + toY
	 			}, animSpd);
	 		} else if (x <= centerX && y > centerY) {
	 			sel.animate({
	 				'top':'+=' + toX,
	 				'left':'-=' + toY
	 			}, animSpd);
	 		} else if (x > centerX && y <= centerY) {
	 			sel.animate({
	 				'top':'-=' + toX,
	 				'left':'+=' + toY
	 			}, animSpd);
	 		}


	 		//el.self.find('.'+i).animate({'opacity': 1}, animSpd + i*30);
	 	}

	 	return el.self;

	}


	$.fn.di_setup = function(byWord) {

		if ($(this).text() == '') {
			console.log('Empty String');
			return;
		}

	 	var self,
 		      current_str,
 		      str,
	 	      strlen;
		
		if (byWord == null) byWord = false;		 	

	 	self = $(this);
	 	str = $(this).text();
	 	if (byWord) str = str.split(' ');

	 	strlen = str.length;

		 if ($(this).hasClass('di_on')) {
			return {
				'self':self,
				'strlen':strlen
			};
		 } else {

		 	// Empty text in the element
		 	self.html('').addClass('di_on');

			// Add animate orders
		 	if (!byWord) {
			 	for (var i=0; i<strlen; i++) {
			 		self.append('<span class="'+i+' di_el">'+str[i]+'</span>');
			 	}
		 	} else {
			 	for (var i=0; i<strlen; i++) {
			 		self.append('<span class="'+i+' di_el">'+str[i]+' </span>');
			 	}
		 	}

			// Set element's CSS to animate 
		 	$('span.di_el').css('position','relative');

		 	return {
		 		'self' : self,
		 		'strlen' : strlen 
		 	};


		 } 

	};


})(jQuery);