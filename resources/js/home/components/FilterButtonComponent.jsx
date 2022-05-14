/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import CardWrapper from '../../common-component/CardWrapper';
import FilterIcon from '../../common-component/icons/FilterIcon';

export default function FilterButtonComponent(props) {
  const { onClickCallback } = props;
  const component = (
    <button className="flex flex-row items-center py-2 px-4 bg-white" type="button" onClick={onClickCallback}>
      <div className="w-5 h-5 stroke-black stroke-[1.2px]"><FilterIcon /></div>
      <div className="w-2" />
      <p className="font-ibm-plex-sans text-base text-black">Filter</p>
    </button>
  );

  return CardWrapper.small(component);
}

FilterButtonComponent.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
};
