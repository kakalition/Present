import PropTypes from 'prop-types';
import FilterButtonComponent from '../FilterButtonComponent';
import ResultTextComponent from '../ResultTextComponent';

export default function FilterGroupComponent(props) {
  const { itemName, totalFound } = props;

  return (
    <div className="flex flex-row justify-between items-center px-16 w-full borderize">
      <ResultTextComponent itemName={itemName} total={totalFound} />
      <FilterButtonComponent />
    </div>
  );
}

FilterGroupComponent.propTypes = {
  itemName: PropTypes.string.isRequired,
  totalFound: PropTypes.number.isRequired,
};
