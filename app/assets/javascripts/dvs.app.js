/*  
Theme Name: Visio - Responsive Website Template
Theme URI: http://preview.devisio.ro/visio-v1.2/ 
Description: Visio - Responsive Website Template is a responsive website template based on the well known Bootstrap framework. Easy to work with, easy to customize and infinite solutions that can be implemented in your project are just a few attributes that recommend Visio to be one of the most complete template.
Author: Devisio
Author URI: http://www.devisio.ro
Version: 1.2
File version: 1.1                        
License URI: http://wrapbootstrap.com                  
*/

// On load functions
$(window).load(function(){
	// Isotope Masonry
	if($('.masonry-wrapper').length > 0){
		$('.masonry-wrapper').isotope({
		    itemSelector: '.masonry-block',
		    masonry: {
		      columnWidth: '.masonry-block',
		      gutter: '.masonry-gutter'
		    }
		});
	}
});

// On document ready functions
$(document).ready(function() {
	// GLOBAL VARIABLES
	var navbarOffsetTop = $('.header-affix').data('offset-top');

	// Affix navbar main
	$('.header-affix').affix({
		offset: {
			top: navbarOffsetTop
		}
	});;

	// Affix navbar before event fires
	$(".header-affix").on('affix.bs.affix', function(){
		// Variables
		var navAnimationIn = $(this).data('nav-animation');

		// Add a body class to before the affix event fires
		$('body').addClass('header-affixed');
		
		if($(this).data('offset-top') > 0){
			// Animate the affixed menu with Animate CSS (you can add any animation class you want)
	     	$(this).addClass('animated ' + navAnimationIn);
	     	$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	     		$(this).removeClass('animated ' + navAnimationIn);
	     	});
	     }
    });

    // Bootstrap - Submenu event for small resolutions
	if($(window).width() < 991){
		$('.dropdown-submenu > a').click(function(){
			//event.preventDefault();
			//event.stopPropagation();
			var parentDropdown = $(this).parent();

			if(parentDropdown.hasClass('open')){
				$(parentDropdown).removeClass('open');
			} else{
				$(parentDropdown).addClass('open');
			}

			return false;
		})
	}	

    // Fix the closing problem when clicking inside dopdown menu
	$('ul.dropdown-menu').on('click', function(event) {
	    event.stopPropagation();
	});
	
	// Collapsible Menu
	$(".nav-collapsible > li > a").on("click", function(e){
		if(!$(this).hasClass("active")) {
			
	      // hide any open menus and remove all other classes
			$(".nav-collapsible li ul").slideUp(350);
			$(".nav-collapsible li a").removeClass("active");
	      
			// open our new menu and add the open class
			$(this).next("ul").slideDown(350);
			$(this).addClass("active");
			
		}else if($(this).hasClass("active")) {
			
			$(this).removeClass("active");
			$(this).next("ul").slideUp(350);
		}
	});

	// Bootstrap Carousels
	$('.carousel').carousel({
		interval: 5000,
		pause	: 'hover'
	});
	function formBottomFixedWidth(){
		// Bottom fixed form - take parent container width
		if($(window).width() > 768){
	    	$('.form-bottom-fixed').width($('.form-bottom-fixed').parent().width());
	    } else{
	    	$('.form-bottom-fixed').width("100%");
	    }
	}
	formBottomFixedWidth();
	$(window).on('resize', function() {
	    formBottomFixedWidth();
	});

	// Smooth scroll
	$('.scroll-me').bind('click', function (event) { 
        // Animate scroll to the selected section
       $('html, body').stop(true, true).animate({scrollTop: $(this.hash).offset().top}, 600);

        event.preventDefault();
    });

	// Owl Carousel
	if($(".owl-carousel").length > 0){
		$(".owl-carousel").each(function(){ 
			$(this).owlCarousel({
				rtl: $(this).data("owl-rtl"),
				items: $(this).data("owl-items"),
				loop: $(this).data("owl-loop"),
			    margin: $(this).data("owl-item-margin"),
			    nav: $(this).data("owl-nav"),
			    dots: $(this).data("owl-dots"),
			    paginationNumbers: true,
			    navText: ["", "",],
			    responsive:{
			        320:{
			            items: 1
			        },
			        500:{
			            items: 2
			        },
			        800:{
			            items: parseInt($(this).data("owl-items"))
			        },
			        1200:{
			            items: $(this).data("owl-items")
			        }
			    }
			}); 
		});
	}

	if($(".owl-carousel-single").length > 0){
		$(".owl-carousel-single").each(function(){ 
			$(this).owlCarousel({
				rtl: $(this).data("owl-rtl"),
				items: $(this).data("owl-items"),
				loop: $(this).data("owl-loop"),
			    margin: $(this).data("owl-item-margin"),
			    nav: $(this).data("owl-nav"),
			    dots: $(this).data("owl-dots"),
			    paginationNumbers: true,
			    navText: ["", "",],
			    responsive:{
			        320:{
			            items: 1
			        },
			        500:{
			            items: 1
			        },
			        800:{
			            items: 1
			        },
			        1200:{
			            items: 1
			        }
			    }
			}); 
		});
	}

	if($(".owl-carousel-hash").length > 0){
		$('.owl-carousel-hash').owlCarousel({
	        items: $(this).data("owl-items"),
			loop: $(this).data("owl-loop"),
		    margin: $(this).data("owl-item-margin"),
		    nav: $(this).data("owl-nav"),
		    dots: $(this).data("owl-dots"),
		    rtl: $(this).data("owl-rtl"),
		    paginationNumbers: true,
		    navText: ["", "",],
		     URLhashListener: true,
	        autoplayHoverPause: true,
	        startPosition: 'URLHash',	
		    responsive:{
		        320:{
		            items: 1
		        },
		        500:{
		            items: 1
		        },
		        800:{
		            items: 1
		        },
		        1200:{
		            items: 1
		        }
		    }
	    });
	}

	// Sort list
	$('.sort-list-buttons .cbp-filter-item').click(function(){
		var btnValue = $(this).data('text');

		$('.sort-list-title > h3').empty().text(btnValue);
	});	
	// Fancybox - default loading
	$(".theater").fancybox({
		helpers: {
		    overlay: {
		      locked: false
		    }
		}
	});
	// Fancybox	- load content in iframe 
	$(".ext-source").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: '50%',
		'height'			: '60%',
		'scrolling'   		: 'no'
	});
	// Parallax
	if($(".parallax-section").length > 0){
		$(".parallax-section").parallax({
	    	speed : 0.15
	    });
	}
	// Milestone counter
	$('.milestone-count').countTo({
        //from: 50,
        //to: 250,
        //speed: 1000,
        //refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });
	// Scroll to top
	$().UItoTop({ easingType: 'easeOutQuart' });	
	// CSS animate
	$(".css-animate").click(function(){
		var target = $($(this).data("target"));
		if(!target.hasClass("in")){
			$(this).addClass('active');
			target.addClass('in');
		} else{
			$(this).removeClass('active');
			target.removeClass('in');
		}
	});	
	// Animate on click with data attributes (based on the animate.css animations)
	$(".animate-click").click(function(){
		var animateIn = $(this).data("animate-in");
		var animateOut = $(this).data("animate-out");
		var animateTarget = $($(this).data("target"));
		var animateTrigger = $(this);
		
		if(animateIn != undefined || animateIn != ""){
			if(!animateTarget.hasClass("in")){
				animateTarget.addClass("in animated " + animateIn);
				animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					animateTarget.removeClass("animated " + animateIn);
					animateTrigger.addClass("active");
				});
			}
			else if(animateTarget.hasClass("in")){
				animateTarget.addClass("animated " + animateOut);
				animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					animateTarget.removeClass("animated " + animateOut);
					animateTrigger.removeClass("active");
					animateTarget.removeClass("in");
				});
			}
		}
		return false;
	});
	
	$(".click-trigger").click(function(){
		var triggerButton = $(this).data("trigger-button");
		//alert(triggerButton)
		$(triggerButton).trigger('click');
	});

	// Animate on hover with data attributes
	$(".animate-hover").hover(function(){
		var animateIn = $(this).data("animate-in");
		var animateOut = $(this).data("animate-out");
		var animateTarget = $(this);
		var animateTrigger = $(this);
		
		if(animateIn != undefined){
			if(!animateTarget.hasClass("in")){
				animateTarget.addClass("in animated " + animateIn);
				animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					animateTarget.removeClass("animated " + animateIn);
					animateTrigger.addClass("active");
				});
			}
			else if(animateTarget.hasClass("in")){
				animateTarget.addClass("animated " + animateOut);
				animateTarget.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					animateTarget.removeClass("animated " + animateOut);
					animateTrigger.removeClass("active");
					animateTarget.removeClass("in");
				});
			}
		}
	});
	// Calendar
	$("#filter_date_in, #filter_date_out").datepicker({
        dateFormat: 'MM dd, yy',
        minDate: 0,
        showOtherMonths: true
    });
    // Optional filters
    $("#btnToggleOptionalFIlters").click(function(){
    	var animateIn = $(this).data("animate-in");
	    var animateOut = $(this).data("animate-out");

    	if($(this).hasClass("opened")){
    		$(".hidden-form-filters").addClass('hide');
    		$(this).removeClass("opened");
    	} else{
	    	$(this).addClass("opened");
	    	$(".hidden-form-filters").removeClass("hide");
	    }
	    return false;
    });
    // Layer Slider Dynamic- Set height to fit navbar
    if($(".layer-slider-dynamic").length > 0){
    	layerSliderDynamic();
    }

    // Layer Slider Fullsize
    if($(".layer-slider-fullsize").length > 0){
    	layerSliderFullsize();
    }
 	
 	// Full Page Cover
    if($(".full-page-cover").length > 0){
    	fullPageCover();
    }

    // Dynamic Height Page Cover
    if($(".dynamic-page-cover").length > 0){
    	dynamicPageCover();
    }

    // Window resize events
    $(window).resize(function() {
    	if($(".layer-slider-dynamic").length > 0){
	    	layerSliderDynamic();
	    }
		if($(".layer-slider-fullsize").length > 0){
	    	layerSliderFullsize();
	    }

	    // Full Page Cover
	    if($(".full-page-cover").length > 0){
	    	fullPageCover();
	    }

	    // Dynamic Height Page Cover
	    if($(".dynamic-page-cover").length > 0){
    		dynamicPageCover();
    	}
	});
    
    // Slider functions
    function layerSliderDynamic(){
    	var windowHeight = $(window).height();
    	var headerHeight = $("#header").height();
    	var searchHeight = $(".slider-opt-height").height();
    	if(searchHeight == undefined){
    		searchHeight = 0;
    	}
    	var newSliderHeight = parseInt(windowHeight) - parseInt(headerHeight) + parseInt(searchHeight);
    
    	$("#layerslider").css({"height": newSliderHeight + "px"});
    }

    function layerSliderFullsize(){
    	var windowHeight = $(window).height();
    	$("#layerslider").css({"height": windowHeight + "px"});
    }

    // Cover backgrounds functions
    function fullPageCover(){
    	var windowHeight = $(window).height();
    	$(".full-page-cover").css({"height": windowHeight + "px"});
    }

    function dynamicPageCover(){
    	var windowHeight = $(window).height();
    	var headerHeight = $("#header").height();
    	var searchHeight = $(".slider-opt-height").height();
    	if(searchHeight == undefined){
    		searchHeight = 0;
    	}
    	var newCoverHeight = parseInt(windowHeight) - parseInt(headerHeight) + parseInt(searchHeight);
    
    	$(".dynamic-page-cover").css({"height": newCoverHeight + "px"});
    }

    var screenRes = $(window).width(),
        screenHeight = $(window).height(),
        html = $('html');

    // Disable Empty Links
    $("[href=#]").click(function(event){
        event.preventDefault();
    });

    // Rating Stars
    var star = $(".rating span.star");
    
    star.hover(
        function() {
            $(this).addClass("over");
            $(this).prevAll().addClass("over");
        }
        , function() {
            $(this).removeClass("over");
            $(this).prevAll().removeClass("over");
        }
    );
    star.click( function() {
        $(this).parent().children(".star").removeClass("voted");
        $(this).prevAll().addClass("voted");
        $(this).addClass("voted");
    });

    // Tooltip & Popover
    $('.ttip').tooltip({
    	placement: $(this).data('placement'),
    	html: true
    });

    $('.pop').popover({
    	placement: 'right',
    	html: true
    });

    // Collapse
    $('.collapse-wrapper .panel').on('shown.bs.collapse', function () {
	 	$(this).addClass('open');
	});

	$('.collapse-wrapper .panel').on('hidden.bs.collapse', function () {
	 	$(this).removeClass('open');
	});

	// WOW animation
	if($('.scroll-on').length > 0){
		wow = new WOW({
			boxClass:     'scroll-on',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
	    });
  		wow.init();
  	}

  	// Grid-List view for shop
  	$('#list').click(function(event){
  		event.preventDefault();
  		$('#products .grid-list-item').addClass('list-group-item');
  	});
  	
    $('#grid').click(function(event){
    	event.preventDefault();
    	$('#products .grid-list-item').removeClass('list-group-item');
    	$('#products .grid-list-item').addClass('grid-group-item');
    });

// END document ready	
});