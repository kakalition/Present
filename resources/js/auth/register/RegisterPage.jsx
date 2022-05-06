import axios from 'axios';
import PropTypes from 'prop-types';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import { FormDialogBodyBuilder, FormDialogButtonBuilder, FormDialogHeaderBuilder } from '../common/FormDialogUtils';
import RegisterFormComponent from './components/RegisterFormComponent';

function registerCallback(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', `${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`);
  formData.append('email', document.getElementById('email').value);
  formData.append('password', document.getElementById('password').value);
  formData.append('password_confirmation', document.getElementById('password').value);

  const config = {
    headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name=\'csrf-token\'').content,
    },
  };

  axios
    .post('/register', formData, config)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.request);
      if (response.status === 201) { window.location.assign('/home'); }
    });
}

export default function RegisterPage(props) {
  const { publicpath } = props;

  const formDialogHeader = FormDialogHeaderBuilder('Sign up');
  const formDialogBody = FormDialogBodyBuilder('Already have an account?', 'Login', '/login');
  const formComponent = <RegisterFormComponent />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => { window.location.assign('/'); },
    'Sign up',
    registerCallback,
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

RegisterPage.propTypes = {
  publicpath: PropTypes.string,
};

RegisterPage.defaultProps = {
  publicpath: '',
};

elementBinder('register-view', <RegisterPage />);
