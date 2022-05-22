import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ComponentWithPopupBuilder from '../../../../common-component/ComponentWithPopupBuilder';
import FilterButtonComponent from '../FilterButtonComponent';
import FilterPopupComponent from '../FilterPopupComponent';
import ResultTextComponent from '../ResultTextComponent';
import { FilterPopupActions, FilterPopupStates } from '../../typedef/FilterTypeDef';

type Props = {
  itemName: string,
  totalFound: number,
  onSubmitFilter: (value: FilterPopupStates) => void,
};

export default function FilterGroupComponent({
  itemName, totalFound, onSubmitFilter,
}: Props) {
  const [meditationFilter, setMeditationFilter] = useState(true);
  const [breathingFilter, setBreathingFilter] = useState(true);
  const [isDescending, setIsDescending] = useState(false);
  const [currentSort, setCurrentSort] = useState('frequently-used');

  const params = useMemo(() => ({
    meditationFilter,
    breathingFilter,
    currentSort,
    isDescending,
  } as FilterPopupStates), [meditationFilter, breathingFilter, isDescending, currentSort]);

  // Initial Fetch
  useEffect(() => {
    onSubmitFilter(params);
  }, []);

  const filterPopupComponentState = useMemo(() => ({
    meditationFilter, breathingFilter, currentSort, isDescending,
  }), [meditationFilter, breathingFilter, currentSort, isDescending]);

  // Could be optimized
  const filterPopupComponentAction = useMemo(() => ({
    onToggleBreathing: (value) => {
      setBreathingFilter(value);
      onSubmitFilter({ ...params, breathingFilter: value });
    },
    onToggleMeditation: (value) => {
      setMeditationFilter(value);
      onSubmitFilter({ ...params, meditationFilter: value });
    },
    onRadioChange:
      (e: React.ChangeEvent<HTMLInputElement>) => setCurrentSort(e.currentTarget.value),
    onToggleDescending: (value) => {
      setIsDescending(value);
      onSubmitFilter({ ...params, isDescending: value });
    },
  } as FilterPopupActions), [params, onSubmitFilter]);

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
          states={filterPopupComponentState}
          actions={filterPopupComponentAction}
        />
      ),
      [filterPopupComponentState, filterPopupComponentAction],
    ),
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
};
