import PropTypes from 'prop-types';
import CommonButtonComponent from '../../common-component/CommonButtonComponent';
import RightArrowIcon from '../../common-component/icons/RightArrrowIcon';

export default function UserPopupComponent(props) {
  const { username } = props;

  return (
    <div
      className="flex absolute flex-col"
    >
      <div className="h-4 bg-transparent" />
      <div className="flex flex-col p-4 bg-ui-shell">
        <p className="font-ibm-plex-sans text-2xl font-semibold text-white ">{username}</p>
        <div className="h-4" />
        <div className="w-48">
          <CommonButtonComponent buttonType="white-tertiary" text="Log out" icon={<RightArrowIcon />} padding="px-6 py-4" fillSpace />
        </div>
      </div>
    </div>
  );
}

UserPopupComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
