import axios from 'axios';

// eslint-disable-next-line max-len
export default function loginCallbackBuilder(shouldAnimateSetter, errorMessageSetter, errorListSetter) {
  return (e) => {
    e.preventDefault();
    console.log(document.querySelector('meta[name=\'csrf-token\''));

    const formData = new FormData(document.getElementById('login-form'));

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

    axios({
      method: 'post',
      url: 'http://localhost/login',
      data: formData,
      headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name=\'csrf-token\'') },
    }).then(onFulfilled, onRejected);
  };
}
