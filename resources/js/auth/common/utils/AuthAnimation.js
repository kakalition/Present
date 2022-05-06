import anime from 'animejs/lib/anime.es';

export function showSnackbarAnimation() {
  anime({
    targets: '#snackbar',
    translateY: '0rem',
    opacity: 1,
    easing: 'easeOutSine',
    duration: 200,
  });
}

export function hideSnackbarAnimation() {
  anime({
    targets: '#snackbar',
    translateY: '1rem',
    opacity: 0,
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
