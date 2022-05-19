import PropTypes from 'prop-types';

export default function ResultTextComponent(props) {
  const { total, itemName } = props;

  return (
    <h3 className="text-base text-black font-ibm-plex-sans">
      Showing
      {' '}
      {total}
      {' '}
      {itemName}
      .
    </h3>
  );
}

ResultTextComponent.propTypes = {
  total: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
};
