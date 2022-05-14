import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ComponentWithPopupBuilder from '../../../common-component/ComponentWithPopupBuilder';
import FilterButtonComponent from '../FilterButtonComponent';
import FilterPopupComponent from '../FilterPopupComponent';
import ResultTextComponent from '../ResultTextComponent';

export default function FilterGroupComponent(props) {
  const {
    itemName, totalFound, onSubmitFilter,
  } = props;

  const [meditationFilter, setMeditationFilter] = useState(true);
  const [breathingFilter, setBreathingFilter] = useState(true);
  const [currentSort, setCurrentSort] = useState('frequently-used');

  const filterPopupComponentState = useMemo(() => ({
    meditationFilter, breathingFilter, currentSort,
  }), [meditationFilter, breathingFilter, currentSort]);

  const filterPopupComponentAction = useMemo(() => ({
    onSelectMeditation: () => setMeditationFilter(true),
    onDeselectMeditation: () => setMeditationFilter(false),
    onSelectBreathing: () => setBreathingFilter(true),
    onDeselectBreathing: () => setBreathingFilter(false),
    onRadioChange: (e) => setCurrentSort(e.currentTarget.value),
  }), []);

  const popupComponent = ComponentWithPopupBuilder({
    id: 'filter-popup',
    alignClass: 'items-end',
    mainComponent: useCallback(
      (animationCallback) => <FilterButtonComponent onClickCallback={animationCallback} />,
      [],
    ),
    popupComponent: useCallback(
      () => (
        <FilterPopupComponent
          state={filterPopupComponentState}
          action={filterPopupComponentAction}
        />
      ),
      [filterPopupComponentState],
    ),
    fromY: '4rem',
    toY: '3.5rem',
    afterHideCallback: onSubmitFilter,
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
  onSubmitFilter: PropTypes.func.isRequired,
};
