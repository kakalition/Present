import axios, { AxiosResponse } from 'axios';
import { SyntheticEvent, useState } from 'react';

import env from '../../../env';
import RightArrrowIcon from '../../../common-component/icons/RightArrrowIcon';
import FormDialogComponent from '../common/FormDialogComponent';
import { FormDialogBodyBuilder, FormDialogButtonBuilder, FormDialogHeaderBuilder } from '../common/FormDialogUtils';
import SnackbarComponent from '../../../common-component/SnackbarComponent';
import RegisterFormComponent from './components/RegisterFormComponent';
import useInitCsrf from '../../../utils/hooks/useInitCsrf';
import usePublicExclusiveRoute from '../../../utils/hooks/usePublicExclusiveRoute';

function registerCallbackBuilder(
  shouldAnimateSetter: (value: boolean) => void,
  errorMessageSetter: (value: string) => void,
  errorListSetter: (value: string[]) => void,
) {
  return (e: SyntheticEvent) => {
    e.preventDefault();

    const firstName = document.getElementById('firstname') as HTMLInputElement;
    const lastName = document.getElementById('lastname') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    const formData = new FormData();
    formData.append('name', `${firstName.value} ${lastName.value}`);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('password_confirmation', password.value);

    // TODO: Handle all possible response status.
    const onFulfilled = (response: AxiosResponse) => {
      if (response.status === 201) window.location.assign('/home');
    };

    const onRejected = (reason: any) => {
      shouldAnimateSetter(true);
      errorMessageSetter(reason.response.data.message);
      errorListSetter(Object.keys(reason.response.data.errors));

      shouldAnimateSetter(false);
    };

    axios.post('/register', formData)
      .then(onFulfilled, onRejected);
  };
}

export default function RegisterPage() {
  usePublicExclusiveRoute();
  useInitCsrf();

  // Snackbar State
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [errorList, setErrorList] = useState<string[]>([]);

  const formDialogHeader = FormDialogHeaderBuilder('Sign up');
  const formDialogBody = FormDialogBodyBuilder('Already have an account?', 'Login', '/login');
  const formComponent = <RegisterFormComponent errorList={errorList} />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => { window.location.assign('/'); },
    'Sign up',
    registerCallbackBuilder(
      (value: boolean) => setShouldAnimate(value),
      (value: string) => setErrorMessage(value),
      (value: string[]) => setErrorList(value),
    ),
    <RightArrrowIcon />,
  );

  return (
    <div
      className="flex justify-center items-end w-screen min-h-screen bg-center bg-cover md:items-center"
      style={{ backgroundImage: `url(${env.PUBLIC_URL}/bg.png` }}
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
