import PropTypes from 'prop-types';
import UserIcon from '../../../common-component/icons/UserIcon';

export default function UserButtonComponent(props) {
  const { size, adjustmentClass, onClickCallback } = props;
  const className = `flex justify-center items-center rounded-full ${size} ${adjustmentClass}`;

  return (
    <button
      className={className}
      type="button"
      onClick={onClickCallback}
    >
      <UserIcon />
    </button>
  );
}

UserButtonComponent.propTypes = {
  size: PropTypes.string,
  adjustmentClass: PropTypes.string,
  onClickCallback: PropTypes.func.isRequired,
};

UserButtonComponent.defaultProps = {
  size: 'w-16 h-16',
  adjustmentClass: 'p-2',
};
