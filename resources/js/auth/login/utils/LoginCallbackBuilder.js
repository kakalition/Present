import axios from 'axios';

// eslint-disable-next-line max-len
export default function loginCallbackBuilder(shouldAnimateSetter, errorMessageSetter, errorListSetter) {
  return (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('login-form'));
    const config = {
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name=\'csrf-token\'').content,
      },
    };

    const onFulfilled = (response) => {
      if (response.status === 200) {
        window.location.assign('/home');
      }
    };

    const onRejected = (reason) => {
      shouldAnimateSetter(true);
      errorMessageSetter(reason.response.data.message);
      errorListSetter(Object.keys(reason.response.data.errors));

      setTimeout(() => shouldAnimateSetter(false), 5400);
    };

    axios
      .post('/login', formData, config)
      .then(onFulfilled, onRejected);
  };
}
