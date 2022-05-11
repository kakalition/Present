import anime from 'animejs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ChevronDownIcon from '../../common-component/icons/ChevronDownIcon';
import SortByPopupComponent from './SortByPopupComponent';

export default function SortByComponent(props) {
  const { currentSort } = props;

  const [showPopup, setShowPopup] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    if (showAnimation) {
      anime({
        targets: '#popup',
        begin: () => setShowPopup(true),
        bottom: '-15rem',
        opacity: 1,
        duration: 200,
        easing: 'easeOutSine',
      });
    } else {
      anime({
        targets: '#popup',
        complete: () => setShowPopup(false),
        bottom: '-14.5rem',
        opacity: 0,
        duration: 200,
        easing: 'easeOutSine',
      });
    }
  }, [showAnimation]);

  return (
    <button
      className="flex relative flex-row items-center borderize"
      type="button"
      onClick={() => setShowAnimation(!showAnimation)}
    >
      <h3 className="font-ibm-plex-sans text-lg">
        <span className="text-slate-600">Sort by: </span>
        <span className="font-semibold text-black underline decoration-2 underline-offset-1">{currentSort}</span>
      </h3>
      <div className="w-2" />
      <div className="w-6 h-6"><ChevronDownIcon className="stroke-slate-400" /></div>
      <div id="popup" className={`absolute ${showPopup ? 'inline' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
        <SortByPopupComponent />
      </div>
    </button>
  );
}

SortByComponent.propTypes = {
  currentSort: PropTypes.string.isRequired,
};
