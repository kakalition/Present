import PropTypes from 'prop-types';
import { useState } from 'react';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import { FormDialogBodyBuilder, FormDialogButtonBuilder, FormDialogHeaderBuilder } from '../common/FormDialogUtils';
import SnackbarComponent from '../../common-component/SnackbarComponent';
import RegisterFormComponent from './components/RegisterFormComponent';
import registerCallbackBuilder from './utils/RegisterCallbackBuilder';

export default function RegisterPage(props) {
  const { publicpath } = props;

  // Snackbar State
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [errorList, setErrorList] = useState([]);

  const formDialogHeader = FormDialogHeaderBuilder('Sign up');
  const formDialogBody = FormDialogBodyBuilder('Already have an account?', 'Login', '/login');
  const formComponent = <RegisterFormComponent errorList={errorList} />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => { window.location.assign('/'); },
    'Sign up',
    registerCallbackBuilder(setShouldAnimate, setErrorMessage, setErrorList),
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

      <div className="overflow-hidden absolute top-0 bottom-auto p-8 w-full md:top-auto md:bottom-0">
        <SnackbarComponent shouldAnimate={shouldAnimate} errorMessage={errorMessage} />
      </div>
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
