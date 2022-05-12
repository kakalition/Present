import PropTypes from 'prop-types';
import usePopupAddon from '../../common-component/hooks/usePopupAddon';
import ChevronDownIcon from '../../common-component/icons/ChevronDownIcon';
import SortByPopupComponent from './SortByPopupComponent';

export default function SortByComponent(props) {
  const { currentSort } = props;
  const { animationCallback, popupClass } = usePopupAddon('popup', '-15rem', '-14.5rem');

  return (
    <div className="flex relative flex-col">
      <button
        className="flex relative flex-row items-center"
        type="button"
        onClick={animationCallback}
      >
        <h3 className="font-ibm-plex-sans text-lg">
          <span className="text-slate-600">Sort by: </span>
          <span className="font-semibold text-black underline decoration-2 underline-offset-1">{currentSort}</span>
        </h3>
        <div className="w-2" />
        <div className="w-6 h-6"><ChevronDownIcon className="stroke-slate-400" /></div>
      </button>
      <div id="popup" className={popupClass}>
        <SortByPopupComponent />
      </div>
    </div>
  );
}

SortByComponent.propTypes = {
  currentSort: PropTypes.string.isRequired,
};
