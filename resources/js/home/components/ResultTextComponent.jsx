import PropTypes from 'prop-types';

export default function ResultTextComponent(props) {
  const { total, itemName } = props;

  return (
    <h3 className="font-ibm-plex-sans text-lg text-black">
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
