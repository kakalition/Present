import anime from 'animejs/lib/anime.es';
import { useEffect, useState } from 'react';

export default function usePopupAddon(targetId, fromY, toY, afterHideCallback = () => {}) {
  const [showPopup, setShowPopup] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (showAnimation) {
      anime({
        targets: `#${targetId}`,
        begin: () => setShowPopup(true),
        top: fromY,
        opacity: 1,
        duration: 200,
        easing: 'easeOutSine',
      });
    } else {
      anime({
        targets: `#${targetId}`,
        complete: () => {
          setShowPopup(false);
          afterHideCallback();
        },
        top: toY,
        opacity: 0,
        duration: 200,
        easing: 'easeOutSine',
      });
    }
  }, [showAnimation]);

  return [
    () => setShowAnimation(!showAnimation),
    `absolute ${showPopup ? 'inline' : 'hidden'}`,
  ];
}
