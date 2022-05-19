import axios from 'axios';
import PropTypes from 'prop-types';
import CommonButtonComponent from './CommonButtonComponent';
import RightArrowIcon from './icons/RightArrrowIcon';

export default function UserPopupComponent(props) {
  const { username } = props;

  const logout = () => axios.post('/logout').then(() => window.location.assign('/'));

  return (
    <div
      className="flex flex-col p-4 pr-16 min-w-[12rem] bg-ui-shell"
    >
      <p className="text-2xl font-semibold text-white whitespace-nowrap font-ibm-plex-sans">{username}</p>
      <div className="h-4" />
      <div className="">
        <CommonButtonComponent
          buttonType="white-tertiary"
          text="Log out"
          icon={<RightArrowIcon />}
          padding="px-5 py-3 w-[70%]"
          onClickCallback={logout}
        />
      </div>
    </div>
  );
}

UserPopupComponent.propTypes = {
  username: PropTypes.string.isRequired,
};
