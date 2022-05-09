import _ from 'lodash';
import PropTypes from 'prop-types';
import UserPopupComponent from '../home/components/UserPopupComponent';
import HomeAnimation from '../home/utils/HomeAnimation';
import UserButtonComponent from '../home/components/UserButtonComponent';
import IconWithPopupBuilder from '../home/components/IconWithPopupBuilder';

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

  const te = IconWithPopupBuilder(
    {
      popupId: '#userPopup',
      showAnimation: HomeAnimation.showUserPopupAnimation('#userPopup'),
      hideAnimation: HomeAnimation.hideUserPopupAnimation('#userPopup'),
    },
    <UserButtonComponent size="w-16 h-16" padding="p-4" />,
    <UserPopupComponent username={username} />,
  );

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
      {te}
    </div>
  );
}

UIShellComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
