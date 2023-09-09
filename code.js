

/*Menu de barras */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})


/*Swiper JS para las cards y metronomo */

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            
            },
        900: {
            slidesPerView: 3,
                
        },

        1380: {
            slidesPerView: 4,
                
        }

    },
});

var swiper2 = new Swiper(".mySwiper2", {
    cssMode: true,
    slidesPerView: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
            
            },
        900: {
            slidesPerView: 4,
                
        },
        1110: {
            slidesPerView: 5,
                
        },

        1400: {
            slidesPerView: 6,
                
        },

    },
});

