﻿

const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");
const slider3 = document.getElementById("glide_3");
const slider4 = document.getElementById("glide_4");
const slider5 = document.getElementById("glide_5");

/*
=============
Hero
=============
 */
if (slider1) {
    new Glide(slider1, {

        breakpoint: 600,
        type: "carousel",
        startAt: 3,
        autoplay: 3000,
        hoverpause: true,
        perView: 6,
        animationDuration: 800,
        animationTimingFunc: "linear",
        breakpoints: {
            500: {
                perView: 2,
            },
            900: {
                perView: 3,
            }
        }
    }).mount();


   
}
/*
=============
Latest Products
=============
 */

if (slider2) {
  new Glide("#glide_2", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}


if (slider3) {
    new Glide("#glide_3", {
        type: "carousel",
        startAt: 0,
        perView: 4,
        rewin: false,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        },
    }).mount();
}



if (slider4) {
    new Glide("#glide_4", {
        type: "carousel",
        startAt: 0,
        perView: 1,
        rewin: false,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    }).mount();
}

if (slider5) {
    new Glide("#glide_5", {
        type: "carousel",
        startAt: 0,
        perView: 3,
        rewin: false,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            998: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();
}