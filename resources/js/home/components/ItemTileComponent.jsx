import PropTypes from 'prop-types';
import CarbonChipComponent from '../../common-component/CarbonChipComponent';
import CommonButtonComponent from '../../common-component/CommonButtonComponent';
import RightArrowIcon from '../../common-component/icons/RightArrrowIcon';

export default function ItemTileComponent(props) {
  const { title, tag, shortDescription } = props;

  return (
    <div className="flex flex-col items-start p-6 bg-white">
      <h2 className="font-ibm-plex-sans text-4xl font-semibold text-black">{title}</h2>
      <div className="h-4" />
      <CarbonChipComponent text={tag} />
      <div className="h-6" />
      <p className="font-ibm-plex-sans text-lg text-slate-500 leading-tight">{shortDescription}</p>
      <div className="h-6" />
      <CommonButtonComponent buttonType="tertiary" text="Start session" icon={<RightArrowIcon />} padding="p-3" fillSpace />
    </div>
  );
}

ItemTileComponent.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};
