import PropTypes from 'prop-types';
import CarbonChipComponent from '../../../common-component/CarbonChipComponent';
import CarbonRadioButton from '../../../common-component/CarbonRadioButton';
import CardWrapper from '../../../common-component/CardWrapper';

export default function FilterPopupComponent(props) {
  const { state, action } = props;

  const element = (
    <form id="sort-by" className="p-4 whitespace-nowrap bg-white">
      <p className="text-base font-medium font-ibm-plex-sans">Categories:</p>
      <div className="h-2" />
      <div className="flex flex-row items-start">
        <CarbonChipComponent
          bgClass="bg-[#A3FFE9]"
          text="Meditation"
          isFilter
          isFilterActive={state.meditationFilter}
          onClick={() => action.onToggleMeditation(true)}
          onXClick={() => action.onToggleMeditation(false)}
        />
        <div className="w-3" />
        <CarbonChipComponent
          bgClass="bg-[#B9D5FF]"
          text="Breathing"
          isFilter
          isFilterActive={state.breathingFilter}
          onClick={() => action.onToggleBreathing(true)}
          onXClick={() => action.onToggleBreathing(false)}
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
        isChecked={state.currentSort === 'name'}
        onRadioChange={action.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="duration"
        inputName="sortby"
        inputValue="duration"
        label="Duration"
        isChecked={state.currentSort === 'duration'}
        onRadioChange={action.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="date-added"
        inputName="sortby"
        inputValue="date-added"
        label="Date added"
        isChecked={state.currentSort === 'date-added'}
        onRadioChange={action.onRadioChange}
      />
      <div className="h-2" />
      <CarbonRadioButton
        inputId="frequently-used"
        inputName="sortby"
        inputValue="frequently-used"
        label="Frequently used"
        isChecked={state.currentSort === 'frequently-used'}
        onRadioChange={action.onRadioChange}
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
          checked={state.isDescending}
          onChange={() => action.onToggleDescending(!state.isDescending)}
        />
        <div className="w-2" />
        Descending
      </label>
    </form>
  );

  return CardWrapper.medium(element);
}

FilterPopupComponent.propTypes = {
  state: PropTypes.shape({
    meditationFilter: PropTypes.bool.isRequired,
    breathingFilter: PropTypes.bool.isRequired,
    currentSort: PropTypes.string.isRequired,
    isDescending: PropTypes.bool.isRequired,
  }),
  action: PropTypes.shape({
    onToggleMeditation: PropTypes.func.isRequired,
    onToggleBreathing: PropTypes.func.isRequired,
    onRadioChange: PropTypes.func.isRequired,
    onToggleDescending: PropTypes.func.isRequired,
  }),
};
