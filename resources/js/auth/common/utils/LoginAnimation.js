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
