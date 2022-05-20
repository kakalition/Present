import { useState } from 'react';

import RightArrrowIcon from '../../../common-component/icons/RightArrrowIcon';
import FormDialogComponent from '../common/FormDialogComponent';
import {
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
  FormDialogHeaderBuilder,
} from '../common/FormDialogUtils';
import SnackbarComponent from '../../../common-component/SnackbarComponent';
import LoginFormComponent from './components/LoginFormComponent';
import loginCallbackBuilder from './utils/LoginCallbackBuilder';
import env from '../../../env';
import useInitCsrf from '../../../utils/hooks/useInitCsrf';
import usePublicExclusiveRoute from '../../../utils/hooks/usePublicExclusiveRoute';

export default function LoginPage() {
  usePublicExclusiveRoute();
  useInitCsrf();

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
      style={{ backgroundImage: `url(${env.PUBLIC_URL}/bg.png)` }}
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
