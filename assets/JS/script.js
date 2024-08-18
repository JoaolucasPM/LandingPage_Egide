document.addEventListener('DOMContentLoaded', function() {
    
    // Inicialize o Swiper
    const swiper = new Swiper('.mySwiper', {
        direction: 'horizontal', 
        loop: true, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true, 
        },
        mousewheel: true, 
    });

    // Define a função Navigate globalmente
    window.Navigate = function(slideIndex) {
        swiper.slideTo(slideIndex); 
    }

    // Animação do texto
    const typed = document.querySelector('.typed');
    if (typed) {
        let typed_string = typed.getAttribute('data-typed-items');
        typed_string = typed_string.split(',');

        new Typed('.typed', {
            strings: typed_string,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
        });
    }
});
