import { SyntheticEvent, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import RightArrrowIcon from '../../../common-component/icons/RightArrrowIcon';
import FormDialogComponent from '../common/FormDialogComponent';
import {
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
  FormDialogHeaderBuilder,
} from '../common/FormDialogUtils';
import SnackbarComponent from '../../../common-component/SnackbarComponent';
import LoginFormComponent from './components/LoginFormComponent';
import env from '../../../env';
import useInitCsrf from '../../../utils/hooks/useInitCsrf';
import usePublicExclusiveRoute from '../../../utils/hooks/usePublicExclusiveRoute';

function loginCallbackBuilder(
  shouldAnimateSetter: (value: boolean) => void,
  errorMessageSetter: (value: string) => void,
  errorListSetter: (value: string[]) => void,
) {
  const DURATION = 5400;

  return (e: SyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('login-form') as HTMLFormElement);

    const onFulfilled = (response: AxiosResponse) => {
      if (response.status === 200) {
        window.location.assign('/home');
      }
    };

    const onRejected = (reason: any) => {
      shouldAnimateSetter(true);
      errorMessageSetter(reason.response.data.message);
      errorListSetter(Object.keys(reason.response.data.errors));

      setTimeout(() => shouldAnimateSetter(false), DURATION);
    };

    axios.post('/login', formData).then(onFulfilled, onRejected);
  };
}

export default function LoginPage() {
  usePublicExclusiveRoute();
  useInitCsrf();

  // Snackbar State
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [errorList, setErrorList] = useState<string[]>([]);

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
      (value: boolean) => setShouldAnimate(value),
      (message: string) => setErrorMessage(message),
      (errList: string[]) => setErrorList(errList),
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
