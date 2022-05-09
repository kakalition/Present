/* eslint-disable react/jsx-filename-extension */
import _ from 'lodash';
import { useEffect, useState } from 'react';

// eslint-disable-next-line max-len
/**
 * @param {{ popupId:string, showAnimation: animejs, hideAnimation: animejs }} popupAnimationObject
 * @param {JSX.Element} iconComponent
 * @param {JSX.Element} popupComponent
 * @returns
 */
export default function IconWithPopupBuilder(popupAnimationObject, iconComponent, popupComponent) {
  const { popupId, showAnimation, hideAnimation } = popupAnimationObject;
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState('none');

  useEffect(() => {
    if (showPopup) {
      showAnimation();
      setPopupVisibility('block');
    } else {
      hideAnimation();
      setTimeout(() => setPopupVisibility('none'), 200);
    }
  }, [showPopup]);

  // TODO: Issue, when reentering popup debounce happens rapidly
  const handlePopup = _.debounce((value) => setShowPopup(value), 200);

  return (
    <div className="relative">
      <div id="userButton" onMouseEnter={() => handlePopup(1)} onMouseLeave={() => handlePopup(0)}>
        {iconComponent}
      </div>
      <div id={popupId.replace('#', '')} className="relative" style={{ right: 200, display: popupVisibility }} onMouseEnter={() => handlePopup(1)} onMouseLeave={() => handlePopup(0)}>
        {popupComponent}
      </div>
    </div>
  );
}
