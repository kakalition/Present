import PropTypes from 'prop-types';
import RightArrrowIcon from '../../common-component/icons/RightArrrowIcon';
import { elementBinder } from '../../utils/ElementBinder';
import FormDialogComponent from '../common/FormDialogComponent';
import {
  FormDialogBodyBuilder,
  FormDialogButtonBuilder,
  FormDialogHeaderBuilder,
} from '../common/FormDialogUtils';
import LoginFormComponent from './components/LoginFormComponent';

export default function LoginPage(props) {
  const { publicpath } = props;

  const formDialogHeader = FormDialogHeaderBuilder('Log in');
  const formDialogBody = FormDialogBodyBuilder(
    "Don't have an account?",
    'Create new account',
    '',
  );
  const formComponent = <LoginFormComponent />;
  const buttonComponent = FormDialogButtonBuilder(
    'Go back',
    () => {},
    'Log in',
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

LoginPage.propTypes = {
  publicpath: PropTypes.string.isRequired,
};

elementBinder('login-view', <LoginPage />);
