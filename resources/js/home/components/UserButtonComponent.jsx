import PropTypes from 'prop-types';
import UserIcon from '../../common-component/icons/UserIcon';

/**
 * @param {{padding: TailwindClass}} props
 */
export default function UserButtonComponent(props) {
  const { size, padding } = props;
  const className = `flex justify-center items-center ${size} ${padding}`;

  return (
    <button
      className={className}
      type="button"
    >
      <UserIcon />
    </button>
  );
}

UserButtonComponent.propTypes = {
  size: PropTypes.string,
  padding: PropTypes.string,
};

UserButtonComponent.defaultProps = {
  size: 'w-16 h-16',
  padding: 'p-2',
};
