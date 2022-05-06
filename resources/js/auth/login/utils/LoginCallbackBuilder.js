import axios from 'axios';

export default function loginCallbackBuilder(isAnimatedSetter, errorMessageSetter) {
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
      isAnimatedSetter(true);
      errorMessageSetter(reason.response.data.message);

      setTimeout(() => isAnimatedSetter(false), 2000);
    };

    axios
      .post('/login', formData, config)
      .then(onFulfilled, onRejected)
      .catch();
  };
}
