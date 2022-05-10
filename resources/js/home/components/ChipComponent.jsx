import PropTypes from 'prop-types';
import CheckIcon from '../../common-component/icons/CheckIcon';

export default function ChipComponent(props) {
  const { text, isActive, onClickCallback } = props;

  let className = 'flex flex-row py-2 px-6 rounded-full items-center';

  let iconComponent;
  if (isActive) {
    iconComponent = (
      <>
        <div className="w-6 h-6 stroke-black"><CheckIcon /></div>
        <div className="w-2" />
      </>
    );
    className += ' bg-green-300';
  } else {
    iconComponent = <div />;
    className += ' bg-green-100';
  }

  return (
    <button type="button" className={className} onClick={onClickCallback}>
      { iconComponent }
      <p className="font-ibm-plex-sans text-lg text-black">
        {text}
      </p>
    </button>
  );
}

ChipComponent.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};
