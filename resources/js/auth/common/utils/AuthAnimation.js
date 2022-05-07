import anime from 'animejs/lib/anime.es';

export function showSnackbarAnimation(fromY, duration = 5000) {
  anime({
    targets: '#snackbar',
    translateY: [
      { value: fromY },
      { value: '0rem', duration: 200 },
      { value: fromY, delay: duration, duration: 200 },
    ],
    opacity: [
      { value: 0 },
      { value: 1, duration: 200 },
      { value: 0, delay: duration, duration: 200 },
    ],
    easing: 'easeOutSine',
    duration: 200,
  });
}

export function shakeInputAnimation(id) {
  anime({
    targets: `#${id}`,
    translateX: [
      { value: '10px', duration: 50 },
      { value: '-10px', duration: 50 },
      { value: '0px', duration: 50 },
    ],
    easing: 'easeOutSine',
  });
}
