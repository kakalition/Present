import PropTypes from 'prop-types';
import XIcon from './icons/XIcon';

export default function CarbonChipComponent(props) {
  const {
    text, bgClass, isFilter, isFilterActive, onClick, onXClick,
  } = props;

  const deselectPart = (
    <button
      className={`${bgClass} hover:brightness-90 flex items-center justify-center rounded-full ml-0 h-full w-full p-2`}
      onClick={(e) => {
        e.stopPropagation();
        onXClick();
      }}
      type="button"
    >
      <div className="w-4 h-4 stroke-black stroke-2"><XIcon /></div>
    </button>
  );

  return (
    <button type="button" onClick={onClick} disabled={!isFilter || isFilterActive}>
      <div className={`flex flex-row justify-center items-center pl-3 rounded-full ${isFilterActive ? '' : 'py-1'} ${bgClass}`}>
        <p className="font-ibm-plex-sans text-base text-black whitespace-nowrap">{text}</p>
        {isFilterActive ? deselectPart : <div className="w-3" />}
      </div>
    </button>
  );
}

CarbonChipComponent.propTypes = {
  text: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
  isFilter: PropTypes.bool,
  isFilterActive: PropTypes.bool,
  onClick: PropTypes.func,
  onXClick: PropTypes.func,
};

CarbonChipComponent.defaultProps = {
  bgClass: 'bg-green-200',
  isFilter: false,
  isFilterActive: false,
  onClick: () => {},
  onXClick: () => {},
};
