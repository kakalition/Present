import _ from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import UserPopupComponent from '../home/components/UserPopupComponent';
import HomeAnimation from '../home/utils/HomeAnimation';
import UserButtonComponent from './UserButtonComponent';

/**
 * @param {{username:string}} props
 * @returns
 */
export default function UIShellComponent(props) {
  const { username } = props;

  // Property
  const onHomeClicked = () => window.location.assign('/home');
  const onMarketplaceClicked = () => window.location.assign('/marketplace');
  const onHistoryClicked = () => window.location.assign('/history');

  const brandClass = 'font-ibm-plex-sans text-xl text-white font-semibold';
  const currentPageClass = 'font-ibm-plex-sans text-lg text-white';
  const notCurrentPageClass = 'font-ibm-plex-sans text-lg text-slate-400';

  // State
  const [showUserPopup, setUserPopup] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState('none');
  useEffect(() => {
    if (showUserPopup) {
      setPopupVisibility('block');
      HomeAnimation.showUserPopupAnimation();
    } else {
      setTimeout(() => setPopupVisibility('none'), 200);
      HomeAnimation.hideUserPopupAnimation();
    }
  }, [showUserPopup]);

  // TODO: Issue, when reentering popup debounce happens rapidly
  const handlePopup = _.debounce((value) => setUserPopup(value), 200);

  return (
    <div className="flex relative justify-between items-center px-16 w-full bg-ui-shell">
      <div className="flex items-center">
        <button type="button">
          <p className={brandClass}>Present</p>
        </button>

        <div className="w-12" />
        <div className="h-8 border-r-2 border-r-slate-500" />
        <div className="w-12" />

        <button type="button" onClick={onHomeClicked}>
          <p className={currentPageClass}>Home</p>
        </button>

        <div className="w-12" />

        <button type="button" onClick={onMarketplaceClicked}>
          <p className={notCurrentPageClass}>Marketplace</p>
        </button>

        <div className="w-12" />

        <button type="button" onClick={onHistoryClicked}>
          <p className={notCurrentPageClass}>History</p>
        </button>

      </div>
      <div className="relative">
        <div id="userButton" className="" onMouseEnter={() => handlePopup(1)} onMouseLeave={() => handlePopup(0)}>
          <UserButtonComponent size="w-16 h-16" padding="p-4" />
        </div>
        <div id="userPopup" className="relative" style={{ right: 150, display: popupVisibility }} onMouseEnter={() => handlePopup(1)} onMouseLeave={() => handlePopup(0)}>
          <UserPopupComponent
            username={username}
          />
        </div>
      </div>
    </div>
  );
}

UIShellComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
