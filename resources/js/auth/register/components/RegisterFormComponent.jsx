import PropTypes from 'prop-types';
import SingleInputComponent from '../../../common-component/SingleInputComponent';

export default function RegisterFormComponent(props) {
  const { errorList } = props;

  return (
    <form id="register-form">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full">
          <SingleInputComponent type="string" id="firstname" label="First name" placeholder="Joseph" isError={errorList.includes('name')} />
        </div>
        <div className="w-16" />
        <div className="w-full">
          <SingleInputComponent type="string" id="lastname" label="Last name" placeholder="Joestar" isError={errorList.includes('name')} />
        </div>

      </div>

      <div className="h-4" />

      <SingleInputComponent type="email" id="email" label="Email address" placeholder="yourname@provider.com" isError={errorList.includes('email')} />
      <div className="h-4" />
      <SingleInputComponent type="password" id="password" label="Password" placeholder="••••••••" isError={errorList.includes('password')} />
    </form>
  );
}

RegisterFormComponent.propTypes = {
  errorList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
