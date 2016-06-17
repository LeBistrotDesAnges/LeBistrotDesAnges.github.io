 (function($){

	 $('.carousel').owlCarousel({
        items: 3,
        margin:15,
        loop: true,
        nav:true,
        navText: ["<img src='img/flat_icones/previous.png'>","<img src='img/flat_icones/next.png'>"],
        responsive: {
            0: {
                items: 1,
            },
             481: {
                items: 2,
            },
            961: {
                items: 3,
            },
        }
    });
})(jQuery);


