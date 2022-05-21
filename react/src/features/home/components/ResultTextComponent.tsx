import PropTypes from 'prop-types';

type Props = {
  itemName: string
  total: number,
};

export default function ResultTextComponent({
  total, itemName,
}: Props) {
  return (
    <h3 className="text-base text-black font-ibm-plex-sans">
      Showing
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
