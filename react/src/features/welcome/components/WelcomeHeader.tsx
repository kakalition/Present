import CommonButtonComponent from '../../../common-component/CommonButtonComponent';

interface Props {
  buttonCallback: () => void
}

export default function WelcomeHeader(props: Props) {
  const { buttonCallback } = props;

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <p className="text-xl font-semibold text-black md:text-2xl lg:text-3xl font-poppins">
        Present
      </p>
      <div className="col-end-13 justify-self-end">
        <CommonButtonComponent buttonType="tertiary" text="Login" onClickCallback={buttonCallback} />
      </div>
    </div>
  );
}
