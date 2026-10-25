
let servicesArr = [];
let sectorsArr = [];
let languagesArr = [];

let $loadingPage = $(".loadingPage");
let modals = document.querySelectorAll(".Modal");
let collapseMenu = document.querySelector(".navbar .collapse");
let nav = document.querySelector("nav.navbar");
let navBtn = document.querySelector("button.navbar-toggler");

new WOW({
        animateClass: 'animate__animated'
}).init();

$(document).ready(function(){
        $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    items: 5,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 2,
            margin: 25
        },
        450: {
            items: 3
        },
        850: {
            items: 4
        },
        1050: {
            items: 5
        }
    }
})
