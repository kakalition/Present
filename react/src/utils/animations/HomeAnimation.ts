import anime from 'animejs';

export function showUserPopupAnimation(selector: string) {
  anime({
    targets: selector,
    translateY: [
      { value: '-1rem', duration: 0 },
      { value: '0rem', duration: 200 },
    ],
    opacity: [
      { value: 1, duration: 200 },
    ],
    easing: 'easeOutSine',
  });
}

export function hideUserPopupAnimation(selector: string) {
  anime({
    targets: selector,
    translateY: [
      { value: '0rem', duration: 0 },
      { value: '-1rem', duration: 200 },
    ],
    opacity: [
      { value: 0, duration: 200 },
    ],
    easing: 'easeOutSine',
  });
}
