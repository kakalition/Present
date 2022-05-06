import axios from 'axios';
import PropTypes from 'prop-types';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import {
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
  FormDialogHeaderBuilder,
} from '../common/FormDialogUtils';
import LoginFormComponent from './components/LoginFormComponent';

function loginCallback(e) {
  e.preventDefault();

  const formData = new FormData(document.getElementById('register-form'));
  const config = {
    headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name=\'csrf-token\'').content,
    },
  };

  axios
    .post('/login', formData, config)
    .then((response) => {
      if (response.status === 200) { window.location.assign('/home'); }
    });
}

export default function LoginPage(props) {
  const { publicpath } = props;

  const formDialogHeader = FormDialogHeaderBuilder('Log in');
  const formDialogBody = FormDialogBodyBuilder(
    "Don't have an account?",
    'Create new account',
    '/register',
  );
  const formComponent = <LoginFormComponent />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => { window.location.assign('/'); },
    'Log in',
    loginCallback,
    <RightArrrowIcon />,
  );

  return (
    <div
      className="flex justify-center items-end w-screen min-h-screen bg-center bg-cover md:items-center"
      style={{ backgroundImage: `url(${`${publicpath}/bg.png`})` }}
    >
      <FormDialogComponent
        header={formDialogHeader}
        body={formDialogBody}
        formComponent={formComponent}
        buttonComponent={buttonComponent}
      />
    </div>
  );
}

LoginPage.propTypes = {
  publicpath: PropTypes.string,
};

LoginPage.defaultProps = {
  publicpath: '',
};

elementBinder('login-view', <LoginPage />);
