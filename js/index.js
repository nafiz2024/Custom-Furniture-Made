$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    // center: true,
    // loop: true,
    margin: 25,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
        },
        600: {
            items: 3,
            nav: false,
            loop: true,
        },
        1000: {
            items: 3,
            nav: false,
            loop: true,
        },
    },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".customNextBtn").click(function() {
    owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function() {
    owl.trigger("prev.owl.carousel", [300]);
});