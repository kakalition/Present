import PropTypes from 'prop-types';
import SingleInputComponent from '../../../../common-component/SingleInputComponent';
import RememberMeComponent from './RememberMeComponent';

export default function LoginFormComponent(props) {
  const { errorList } = props;

  const inlineComponent = (
    <span
      className="text-base text-sky-500 underline underline-offset-2 md:text-lg
      font-ibm-plex-sans"
    >
      <a href="/forgot-password">Forgot password?</a>
    </span>
  );

  return (
    <form id="login-form">
      <SingleInputComponent
        type="email"
        id="email"
        label="Email address"
        placeholder="yourname@gmail.com"
        isError={errorList.includes('email')}
      />
      <div className="h-4" />
      <SingleInputComponent
        type="password"
        id="password"
        label="Password"
        placeholder="••••••••"
        isError={errorList.includes('password')}
        inlineComponent={inlineComponent}
      />
      <div className="h-4" />
      <RememberMeComponent />
    </form>
  );
}

LoginFormComponent.propTypes = {
  errorList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
