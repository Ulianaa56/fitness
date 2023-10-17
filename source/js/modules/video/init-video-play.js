const video = document.querySelector('.video');

export const initVideoPlay = () => {
  if (!video) {
    return;
  }

  const videoScreen = video.querySelector('.video__screen');
  const videoPlayButton = video.querySelector('.video__button-box');
  videoPlayButton.addEventListener('click', () => {
    if (videoScreen.classList.contains('is-active')) {
      return;
    }
    videoScreen.classList.add('is-active');
    const src = video.dataset.src;
    videoScreen.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
};
