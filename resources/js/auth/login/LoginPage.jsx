import PropTypes from 'prop-types';
import { useState } from 'react';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import {
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
  FormDialogHeaderBuilder,
} from '../common/FormDialogUtils';
import SnackbarComponent from '../common/SnackbarComponent';
import LoginFormComponent from './components/LoginFormComponent';
import loginCallbackBuilder from './utils/LoginCallbackBuilder';

export default function LoginPage(props) {
  const { publicpath } = props;

  // Snackbar State
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [errorList, setErrorList] = useState([]);

  const formDialogHeader = FormDialogHeaderBuilder('Log in');
  const formDialogBody = FormDialogBodyBuilder(
    "Don't have an account?",
    'Create new account',
    '/register',
  );
  const formComponent = <LoginFormComponent errorList={errorList} />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => { window.location.assign('/'); },
    'Log in',
    loginCallbackBuilder(
      (value) => setShouldAnimate(value),
      (message) => setErrorMessage(message),
      (errList) => setErrorList(errList),
    ),
    <RightArrrowIcon />,
  );

  return (
    <div
      className="flex justify-center items-end w-screen h-screen bg-center bg-cover md:items-center"
      style={{ backgroundImage: `url(${`${publicpath}/bg.png`})` }}
    >
      <FormDialogComponent
        header={formDialogHeader}
        body={formDialogBody}
        formComponent={formComponent}
        buttonComponent={buttonComponent}
      />

      <div className="overflow-hidden absolute bottom-0 p-8 w-full">
        <SnackbarComponent shouldAnimate={shouldAnimate} errorMessage={errorMessage} />
      </div>
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
