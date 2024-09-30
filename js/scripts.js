(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});




    //slider1
	jQuery(document).ready(function() {

	 $(".slider1").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	stageClass: 'owl-stage',
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 1
	 		},
	 		991 : {
	 		 	"items" : 1
	 		}


	 	}
	 });



	var owl = $('.slider1');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn_a1').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn_a1').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	});



	//slider1
	jQuery(document).ready(function() {

	 $(".slider2").owlCarousel({
	 	"items" : 5,
	 	"margin" : 20,
	 	"autoplay": true,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	stageClass: 'owl-stage',
	 	"responsive" : {
	 		0 : {
	 			"items" : 2
	 		},
	 		576 : {
	 			"items" : 2
	 		},
	 		767 : {
	 			"items" : 4
	 		},
	 		991 : {
	 		 	"items" : 7
	 		}


	 	}
	 });


	});

















	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
		    var hamburgers = document.querySelectorAll(".hamburger");
		    if (hamburgers.length > 0) {
		      forEach(hamburgers, function(hamburger) {
		        hamburger.addEventListener("click", function() {
		          this.classList.toggle("is-active");
		        }, false);
		      });
		    }	



		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);