import anime from 'animejs/lib/anime.es';

const HomeAnimation = {
  showUserPopupAnimation: (id) => () => {
    anime({
      targets: id,
      translateY: [
        { value: '-1rem', duration: 0 },
        { value: '0rem', duration: 200 },
      ],
      opacity: [
        { value: 1, duration: 200 },
      ],
      easing: 'easeOutSine',
    });
  },
  hideUserPopupAnimation: (id) => () => {
    anime({
      targets: id,
      translateY: [
        { value: '0rem', duration: 0 },
        { value: '-1rem', duration: 200 },
      ],
      opacity: [
        { value: 0, duration: 200 },
      ],
      easing: 'easeOutSine',
    });
  },
};

export default HomeAnimation;
