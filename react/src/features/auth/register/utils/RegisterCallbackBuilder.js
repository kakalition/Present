import axios from 'axios';

// eslint-disable-next-line max-len
export default function registerCallbackBuilder(shouldAnimateSetter, errorMessageSetter, errorListSetter) {
  return (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', `${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('password_confirmation', document.getElementById('password').value);

    const onFulfilled = (response) => {
      if (response.status === 201) {
        window.location.assign('/home');
      }
    };

    const onRejected = (reason) => {
      shouldAnimateSetter(true);
      errorMessageSetter(reason.response.data.message);
      errorListSetter(Object.keys(reason.response.data.errors));

      shouldAnimateSetter(false);
    };

    axios.post('/register', formData)
      .then(onFulfilled, onRejected);
  };
}
