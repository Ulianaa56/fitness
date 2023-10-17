export const initReviewSlider = () => {
  const reviews = document.querySelectorAll('.reviews');
  if (!reviews.length) {
    return;
  }

  reviews.forEach((block) => {
    const reviewSlider = block.querySelector('[data-slider="reviews"]');
    const buttonPrev = block.querySelector('[data-slider="button-prev"]');
    const buttonNext = block.querySelector('[data-slider="button-next"]');

    return new window.Swiper(reviewSlider, {
      centeredSlides: true,
      spaceBetween: 80,
      slidesPerView: 1,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
    });
  });
};
