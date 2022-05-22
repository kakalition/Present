import SingleInputComponent from '../../../../common-component/SingleInputComponent';

export default function RegisterFormComponent({ errorList }: { errorList: string[] }) {
  return (
    <form id="register-form">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full">
          <SingleInputComponent
            inputType="string"
            id="firstname"
            label="First name"
            placeholder="Joseph"
            isError={errorList.includes('name')}
          />
        </div>
        <div className="w-16" />
        <div className="w-full">
          <SingleInputComponent
            inputType="string"
            id="lastname"
            label="Last name"
            placeholder="Joestar"
            isError={errorList.includes('name')}
          />
        </div>

      </div>

      <div className="h-4" />

      <SingleInputComponent
        inputType="email"
        id="email"
        label="Email address"
        placeholder="yourname@provider.com"
        isError={errorList.includes('email')}
      />
      <div className="h-4" />
      <SingleInputComponent
        inputType="password"
        id="password"
        label="Password"
        placeholder="••••••••"
        isError={errorList.includes('password')}
      />
    </form>
  );
}
