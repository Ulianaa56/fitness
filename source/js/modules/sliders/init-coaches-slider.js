import {slideToFocus} from './slide-to-focus.js';


export const initCoachesSlider = () => {
  const coaches = document.querySelectorAll('.coaches');
  if (!coaches.length) {

    return;
  }
  coaches.forEach((block) => {
    const slider = block.querySelector('[data-slider="coaches"]');
    const buttonPrev = block.querySelector('[data-slider="button-prev"]');
    const buttonNext = block.querySelector('[data-slider="button-next"]');

    const sliderCoaches = new window.Swiper(slider, {
      spaceBetween: 31,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 2,
          allowTouchMove: true,
        },
        1200: {
          spaceBetween: 40,
          slidesPerView: 4,
          allowTouchMove: false,
        },
      },
    });

    if ('ontouchstart' in document.documentElement) {
      return;
    } else {
      setTimeout(() => {
        const interactiveElements = block.querySelectorAll('.card-coaches__content');
        slideToFocus(slider, sliderCoaches, interactiveElements);
      }, 500);
    }

  });
};
