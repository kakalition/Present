import PropTypes from 'prop-types';
import CommonButtonComponent from '../../common-component/CommonButtonComponent';

export default function WelcomeHeader(props) {
  const { buttonCallback } = props;

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <p className="font-poppins text-xl font-semibold text-black md:text-2xl lg:text-3xl">
        Present
      </p>
      <div className="col-end-13 justify-self-end">
        <CommonButtonComponent buttonType="tertiary" text="Login" onClickCallback={buttonCallback} />
      </div>
    </div>
  );
}

WelcomeHeader.propTypes = {
  buttonCallback: PropTypes.func.isRequired,
};
