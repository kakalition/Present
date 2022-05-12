import anime from 'animejs/lib/anime.es';
import { useEffect, useState } from 'react';

export default function usePopupAddon(targetId, fromY, toY) {
  const [showPopup, setShowPopup] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    if (showAnimation) {
      anime({
        targets: `#${targetId}`,
        begin: () => setShowPopup(true),
        bottom: fromY,
        opacity: 1,
        duration: 200,
        easing: 'easeOutSine',
      });
    } else {
      anime({
        targets: `#${targetId}`,
        complete: () => setShowPopup(false),
        bottom: toY,
        opacity: 0,
        duration: 200,
        easing: 'easeOutSine',
      });
    }
  }, [showAnimation]);

  return {
    animationCallback: () => setShowAnimation(!showAnimation),
    popupClass: `absolute ${showPopup ? 'inline' : 'hidden'}`,
  };
}
