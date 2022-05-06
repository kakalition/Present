import PropTypes from 'prop-types';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import { FormDialogBodyBuilder, FormDialogButtonBuilder, FormDialogHeaderBuilder } from '../common/FormDialogUtils';

export default function RegisterPage(props) {
  const { publicpath } = props;

  const formDialogHeader = FormDialogHeaderBuilder('Sign up');
  const formDialogBody = FormDialogBodyBuilder('Already have an account?', 'Login', '');
  const formComponent = <RegisterFormComponent />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => {},
    'Sign up',
    () => {},
    <RightArrrowIcon />,
  );

  return (
    <div
      className="flex justify-center items-end w-screen min-h-screen bg-center bg-cover md:items-center"
      style={{ backgroundImage: `url(${`${publicpath}/bg.png`})` }}
    >
      <FormDialogComponent
        header={formDialogHeader}
        body={formDialogBody}
        formComponent={formComponent}
        buttonComponent={buttonComponent}
      />
    </div>
  );
}

RegisterPage.propTypes = {
  publicpath: PropTypes.string.isRequired,
};

elementBinder('register-view', <RegisterPage />);
