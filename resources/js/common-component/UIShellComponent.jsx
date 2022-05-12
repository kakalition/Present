import PropTypes from 'prop-types';
import UserPopupComponent from '../home/components/UserPopupComponent';
import UserButtonComponent from '../home/components/UserButtonComponent';
import usePopupAddon from './hooks/usePopupAddon';

/**
 * @param {{username:string}} props
 * @returns
 */
export default function UIShellComponent(props) {
  const { username } = props;
  const [animationCallback, popupClass] = usePopupAddon('filterPopup', '4rem', '3.5rem');

  // Property
  const onHomeClicked = () => window.location.assign('/home');
  const onMarketplaceClicked = () => window.location.assign('/marketplace');
  const onHistoryClicked = () => window.location.assign('/history');

  const brandClass = 'font-ibm-plex-sans text-xl text-white font-semibold';
  const currentPageClass = 'font-ibm-plex-sans text-lg text-white';
  const notCurrentPageClass = 'font-ibm-plex-sans text-lg text-slate-400';

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

      <div className="flex relative flex-col items-end">
        <UserButtonComponent size="w-16 h-16" padding="p-4" onClickCallback={animationCallback} />
        <div id="filterPopup" className={popupClass}>
          <UserPopupComponent username={username} />
        </div>
      </div>

    </div>
  );
}

UIShellComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
