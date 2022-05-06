import SingleInputComponent from '../../common/SingleInputComponent';

export default function RegisterFormComponent() {
  return (
    <form id="register-form">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full">
          <SingleInputComponent type="string" id="firstname" label="First name" placeholder="Joseph" />
        </div>
        <div className="w-16" />
        <div className="w-full">
          <SingleInputComponent type="string" id="lastname" label="Last name" placeholder="Joestar" />
        </div>

      </div>

      <div className="h-4" />

      <SingleInputComponent type="email" id="email" label="Email address" placeholder="yourname@provider.com" />
      <div className="h-4" />
      <SingleInputComponent type="password" id="password" label="Password" placeholder="••••••••" />
    </form>
  );
}
