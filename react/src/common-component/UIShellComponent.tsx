import UserPopupComponent from './UserPopupComponent';
import UserButtonComponent from './UserButtonComponent';
import usePopupAddon from '../utils/hooks/usePopupAddon';

type Props = { username: string };

export default function UIShellComponent({ username }: Props) {
  const [animationCallback, popupClass] = usePopupAddon('filterPopup', '5rem', '4.5rem');

  // Property
  const onHomeClicked = () => window.location.assign('/home');
  const onMarketplaceClicked = () => window.location.assign('/marketplace');
  const onHistoryClicked = () => window.location.assign('/history');

  const brandClass = 'font-ibm-plex-sans text-xl text-white font-semibold';
  const currentPageClass = 'font-ibm-plex-sans text-lg text-white';
  const notCurrentPageClass = 'font-ibm-plex-sans text-lg text-slate-400';

  return (
    <div className="flex relative justify-between items-center px-28 w-full bg-ui-shell">

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
        <UserButtonComponent size="w-12 h-12" adjustmentClass="p-2 m-3 bg-ui-shell hover:brightness-200" onClick={animationCallback} />
        <div id="filterPopup" className={popupClass}>
          <UserPopupComponent username={username} />
        </div>
      </div>

    </div>
  );
}
