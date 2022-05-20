import anime from 'animejs';
import { useEffect, useState } from 'react';

type NullableCallback = () => void | null;

export default function usePopupAddon(
  targetId: string,
  fromY: string,
  toY: string,
  afterHideCallback: NullableCallback,
) {
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
  }, [targetId, fromY, toY, afterHideCallback, showAnimation]);

  return [
    () => setShowAnimation(!showAnimation),
    `absolute ${showPopup ? 'inline' : 'hidden'}`,
  ] as [() => void, string];
}
