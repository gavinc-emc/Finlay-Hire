jQuery(document).ready(function() {

	/*******************************************
	 * HELPER FUNCTIONS *
	 *******************************************/

	/*
	 * Image lazy loading
	 * Further reading: https://www.appelsiini.net/projects/lazyload
	 * Example image tag:  <img class="lazy" data-original="img/example.jpg" width="640" height="480">
	 * Uncomment out the code below and in the index.php file to enable lazyloading
	 */

	// jQuery("img.lazy").lazyload({
	//     threshold : 200
	// });

	/*
	 * Check alt tags aren't empty for images
	 * For development use only
	 */

	// jQuery('img').each(function() {
	// 	console.log(jQuery(this).attr('alt'));
	// });

	/*******************************************
	 * RESPONSIVE NAV *
	 *******************************************/

	jQuery('.nav-btn').on('click', function() {
		jQuery('html').addClass('js-nav');
	});

	jQuery('.close-btn, .js-nav #innerwrap').on('click', function() {
		jQuery('html').removeClass('js-nav');
	});

    if (jQuery('.moduletable.home-banner').length) {
        jQuery('.moduletable.home-banner').owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            items: 1
        });
    }

	if (jQuery('.moduletable.services-carousel').length) {
        jQuery('.moduletable.services-carousel .latest-news-articles').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            dots: true,
            items: 1
        });
    }

    if (jQuery('.moduletable.products-carousel').length) {
        jQuery('.moduletable.products-carousel .latest-news-articles').owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            dots: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                550:{
                    items: 2
                },
                920:{
                    items: 3
                },
                1360:{
                    items: 4
                    ,nav: true
                    ,margin: 78
                }
            }
        });
    }

    if (jQuery('.moduletable.products-carousel').length) {
		jQuery('.moduletable.products-carousel .categories-module').owlCarousel({
	        loop: false,
            margin: 20,
            nav: false,
            dots: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                550:{
                    items: 2
                },
                920:{
                    items: 3
                },
                1360:{
                    items: 4
                    ,nav: true
                    ,margin: 78
                }
            }
		});
    }

    if (jQuery('.moduletable.news-carousel').length) {
        jQuery('.moduletable.news-carousel .latest-news-articles').owlCarousel({
            loop: false,
            nav: true,
            dots: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                920:{
                    items: 2,
                    margin: 30
                },
                1360:{
                    items: 3,
                    margin: 30
                }
            }
        });
    }

    if (jQuery('.moduletable.product-customer-testimonials-carousel').length) {
        jQuery('.moduletable.product-customer-testimonials-carousel .latest-news-articles').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                850:{
                    items: 2
                    ,margin: 29
                }
            }
        });
    }

    if (jQuery('.moduletable.product-related-products-carousel').length) {
        jQuery('.moduletable.product-related-products-carousel .latest-news-articles').owlCarousel({
            loop: false,
            margin: 35,
            nav: true,
            dots: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                520:{
                    items: 2
                },
                920:{
                    items: 3
                    //,margin: 28
                },
                1360:{
                    items: 4
                }
            }
        });
    }

});
