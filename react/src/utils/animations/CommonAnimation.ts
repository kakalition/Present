import anime from 'animejs';

export function showSnackbar(selector: string, fromY: string, duration = 5000) {
  anime({
    targets: selector,
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

export function shakeElement(selector: string) {
  anime({
    targets: selector,
    translateX: [
      { value: '10px', duration: 50 },
      { value: '-10px', duration: 50 },
      { value: '0px', duration: 50 },
    ],
    easing: 'easeOutSine',
  });
}
