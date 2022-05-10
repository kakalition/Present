import PropTypes from 'prop-types';

export default function CarbonChipComponent(props) {
  const { text, bgClass } = props;

  return (
    <div className={`flex justify-center items-center px-3 py-1 rounded-full ${bgClass}`}>
      <p className="font-ibm-plex-sans text-base text-black">{text}</p>
    </div>
  );
}

CarbonChipComponent.propTypes = {
  text: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
};

CarbonChipComponent.defaultProps = {
  bgClass: 'bg-green-200',
};
