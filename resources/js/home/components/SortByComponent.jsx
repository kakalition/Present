import PropTypes from 'prop-types';
import ChevronDownIcon from '../../common-component/icons/ChevronDownIcon';

export default function SortByComponent(props) {
  const { currentSort } = props;

  return (
    <button className="flex flex-row items-center" type="button">
      <h3 className="font-ibm-plex-sans text-lg">
        <span className="text-slate-600">Sort by: </span>
        <span className="font-semibold text-black underline decoration-2 underline-offset-1">{currentSort}</span>
      </h3>
      <div className="w-2" />
      <div className="w-6 h-6"><ChevronDownIcon className="stroke-slate-400" /></div>
    </button>
  );
}

SortByComponent.propTypes = {
  currentSort: PropTypes.string.isRequired,
};
