import PropTypes from 'prop-types';
import { useCallback } from 'react';
import ComponentWithPopupBuilder from '../../../common-component/ComponentWithPopupBuilder';
import FilterButtonComponent from '../FilterButtonComponent';
import FilterPopupComponent from '../FilterPopupComponent';
import ResultTextComponent from '../ResultTextComponent';

export default function FilterGroupComponent(props) {
  const { itemName, totalFound } = props;
  const popupComponent = ComponentWithPopupBuilder({
    id: 'filter-popup',
    alignClass: 'items-end',
    mainComponent: useCallback(
      (animationCallback) => <FilterButtonComponent onClickCallback={animationCallback} />,
      [],
    ),
    popupComponent: useCallback(() => <FilterPopupComponent />, []),
    fromY: '4rem',
    toY: '3.5rem',
  });

  return (
    <div className="flex flex-row justify-between items-center px-16 w-full">
      <ResultTextComponent itemName={itemName} total={totalFound} />
      {popupComponent}
    </div>
  );
}

FilterGroupComponent.propTypes = {
  itemName: PropTypes.string.isRequired,
  totalFound: PropTypes.number.isRequired,
};
