import anime from 'animejs';

namespace Animation{
  export function showSnackbar(id: string, fromY: string, duration: number = 5000) {
    anime({
      targets: `#${id}`,
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

  export function shakeElement(id: string, duration: number = 5000) {
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
}
