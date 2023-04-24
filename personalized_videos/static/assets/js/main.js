// toggle sidebar
const menubar = document.getElementById('menu-bars');
const sidebar = document.getElementById('side-bar');
const closeIcon = document.getElementById('close-icon');

menubar.addEventListener('click', function() {
    if (sidebar.classList.contains('side-hide')) {
        sidebar.classList.remove('side-hide');
        sidebar.classList.add('show-sidebar');
    }
});

closeIcon.addEventListener('click', function() {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
        sidebar.classList.add('side-hide');
    }
});

// owl carousel
$('.owl-carousel').owlCarousel ({
    loop: false,
    dots: false,
    margin: 2,
    responsiveClass: true,
    responsive: {
        0:{
            items:2.5
        },

        600:{
            items: 3.5
        },

        1000:{
            items:4.5
        }
    }
})