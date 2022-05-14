import PropTypes from 'prop-types';
import CarbonChipComponent from '../../common-component/CarbonChipComponent';
import CommonButtonComponent from '../../common-component/CommonButtonComponent';
import RightArrowIcon from '../../common-component/icons/RightArrrowIcon';

export default function ItemTileComponent(props) {
  const { title, tag, shortDescription } = props;

  return (
    <div className="flex flex-col items-start p-8 bg-white">
      <h2 className="font-ibm-plex-sans text-4xl font-semibold text-black">{title}</h2>
      <div className="h-3" />
      <CarbonChipComponent text={tag} />
      <div className="h-3" />
      <p className="font-ibm-plex-sans text-base leading-tight text-slate-700">{shortDescription}</p>
      <div className="h-3" />
      <CommonButtonComponent buttonType="tertiary" text="Start session" textSize="text-base" icon={<RightArrowIcon />} padding="px-4 py-2" fillX />
    </div>
  );
}

ItemTileComponent.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};
