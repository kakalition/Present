import PropTypes from 'prop-types';
import UserIcon from './icons/UserIcon';

/**
 * @param {{username:string}} props
 * @returns
 */
export default function UIShellComponent(props) {
  const { username } = props;

  const onHomeClicked = () => window.location.assign('/home');
  const onMarketplaceClicked = () => window.location.assign('/marketplace');
  const onHistoryClicked = () => window.location.assign('/history');

  const brandClass = 'font-ibm-plex-sans text-xl text-white font-semibold';
  const currentPageClass = 'font-ibm-plex-sans text-lg text-white';
  const notCurrentPageClass = 'font-ibm-plex-sans text-lg text-slate-400';

  return (
    <div className="flex justify-between items-center py-6 px-16 w-full bg-ui-shell">
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
      <button type="button">
        <div className="w-8 h-8"><UserIcon /></div>
      </button>
    </div>
  );
}

UIShellComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
