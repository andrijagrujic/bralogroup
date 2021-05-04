$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        auto:true,
        keyPress:false,
        speed:500,
        item: 5,
        slideMove: 1,
        slideEndAnimation: true,
        autoWidth:false,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        slideMargin:2,

        pager: false,
        controls: true,
        prevHtml: ' ',
        nextHtml: ' ',

        responsive : [
            {
                breakpoint:1280,
                settings: {
                    item:4,
                    slideMargin:6,
                }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMargin:6,
                }
            },
            {
                breakpoint:400,
                settings: {
                    item:2,
                 }
            },
        ],
    });
});
