import PropTypes from 'prop-types';
import XIcon from './icons/XIcon';

export default function CarbonChipComponent(props) {
  const {
    text, bgClass, isFilter, onXClicked,
  } = props;

  const deselectPart = (
    <button
      className={`${bgClass} hover:brightness-90 flex items-center justify-center rounded-full ml-0 h-full w-full p-2`}
      onClick={onXClicked}
      type="button"
    >
      <div className="w-4 h-4 stroke-black stroke-2"><XIcon /></div>
    </button>
  );

  return (
    <div className={`flex flex-row justify-center items-center pl-3 rounded-full ${isFilter ? '' : 'py-1'} ${bgClass}`}>
      <p className="font-ibm-plex-sans text-base text-black whitespace-nowrap">{text}</p>
      {isFilter ? deselectPart : <div className="w-3" />}
    </div>
  );
}

CarbonChipComponent.propTypes = {
  text: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
  isFilter: PropTypes.bool,
  onXClicked: PropTypes.func,
};

CarbonChipComponent.defaultProps = {
  bgClass: 'bg-green-200',
  isFilter: false,
  onXClicked: () => {},
};
