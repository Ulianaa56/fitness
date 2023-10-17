export const slideToFocus = (block, slider, elements) => {
  const links = elements ? elements : block.querySelectorAll('a');
  const handleLinkEvent = (evt) => {
    const slideAll = block.querySelectorAll('.swiper-slide');
    const slideFocus = evt.target.closest('.swiper-slide');
    const index = Array.from(slideAll).indexOf(slideFocus);
    slider.slideTo(index);
  };

  links.forEach((link) => {
    if (links.length) {
      link.addEventListener('focus', handleLinkEvent);
    }
  });
};
