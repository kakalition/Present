import { MouseEventHandler } from 'react';
import CarbonChipComponent from '../../../common-component/CarbonChipComponent';
import CarbonRadioButton from '../../../common-component/CarbonRadioButton';
import CardWrapper from '../../../common-component/CardWrapper';
import { FilterPopupActions, FilterPopupStates } from '../typedef/FilterTypeDef';

type Actions = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  onXClick: MouseEventHandler<HTMLButtonElement>,
};

type Props = {
  states: FilterPopupStates,
  actions: FilterPopupActions,
};

export default function FilterPopupComponent({
  states, actions,
}: Props) {
  const meditationActions: Actions = {
    onClick: () => actions.onToggleMeditation(true),
    onXClick: () => actions.onToggleMeditation(false),
  };

  const breathingActions: Actions = {
    onClick: () => actions.onToggleBreathing(true),
    onXClick: () => actions.onToggleBreathing(false),
  };

  const element = (
    <form id="sort-by" className="p-4 whitespace-nowrap bg-white">
      <p className="text-base font-medium font-ibm-plex-sans">Categories:</p>
      <div className="h-2" />
      <div className="flex flex-row items-start">
        <CarbonChipComponent
          bgClass="bg-[#A3FFE9]"
          text="Meditation"
          isFilter
          isFilterActive={states.meditationFilter}
          actions={meditationActions}
        />
        <div className="w-3" />
        <CarbonChipComponent
          bgClass="bg-[#B9D5FF]"
          text="Breathing"
          isFilter
          isFilterActive={states.breathingFilter}
          actions={breathingActions}
        />
      </div>
      <div className="h-4" />

      <p className="text-base font-medium font-ibm-plex-sans">Sort By:</p>
      <div className="h-2" />
      <CarbonRadioButton
        inputId="name"
        inputName="sortby"
        inputValue="name"
        label="Name"
        isChecked={states.currentSort === 'name'}
        onRadioChange={actions.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="duration"
        inputName="sortby"
        inputValue="duration"
        label="Duration"
        isChecked={states.currentSort === 'duration'}
        onRadioChange={actions.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="date-added"
        inputName="sortby"
        inputValue="date-added"
        label="Date added"
        isChecked={states.currentSort === 'date-added'}
        onRadioChange={actions.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="frequently-used"
        inputName="sortby"
        inputValue="frequently-used"
        label="Frequently used"
        isChecked={states.currentSort === 'frequently-used'}
        onRadioChange={actions.onRadioChange}
      />
      <div className="h-2" />
      <div className="h-2 border-b-2 border-b-slate-300" />
      <div className="h-2" />

      <label className="flex flex-row items-center text-base font-ibm-plex-sans" htmlFor="descending">
        <input
          className="carbon-checkbox"
          name="descending"
          id="descending"
          type="checkbox"
          value="true"
          checked={states.isDescending}
          onChange={() => actions.onToggleDescending(!states.isDescending)}
        />
        <div className="w-2" />
        Descending
      </label>
    </form>
  );

  return CardWrapper.medium(element);
}
