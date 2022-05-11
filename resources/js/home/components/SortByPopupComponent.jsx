import PropTypes from 'prop-types';
import CarbonRadioButton from '../../common-component/CarbonRadioButton';
import CardWrapper from '../../common-component/CardWrapper';

export default function SortByPopupComponent(props) {
  const { currentSort } = props;

  const element = (
    <div id="sort-by" className="p-6 bg-white">
      <CarbonRadioButton inputId="frequently-used" inputName="sortby" inputValue="frequently-used" label="Frequently used" isChecked={currentSort === 'frequently-used'} />
      <div className="h-2" />
      <CarbonRadioButton inputId="name" inputName="sortby" inputValue="name" label="Name" isChecked={currentSort === 'name'} />
      <div className="h-2" />
      <CarbonRadioButton inputId="duration" inputName="sortby" inputValue="duration" label="Duration" isChecked={currentSort === 'duration'} />
      <div className="h-2" />
      <CarbonRadioButton inputId="date-added" inputName="sortby" inputValue="date-added" label="Date added" isChecked={currentSort === 'date-added'} />
      <div className="h-2" />
      <div className="h-2 border-b-2 border-b-slate-300" />
      <div className="h-2" />
      <label className="flex flex-row items-center" htmlFor="descending">
        <input className="carbon-checkbox" name="descending" id="descending" type="checkbox" value="true" />
        <div className="w-2" />
        Descending
      </label>
    </div>
  );

  return CardWrapper.medium(element);
}

SortByPopupComponent.propTypes = {
  currentSort: PropTypes.func.isRequired,
};
