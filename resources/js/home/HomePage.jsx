import axios from 'axios';
import CommonButtonComponent from '../common-component/CommonButtonComponent';
import UserIcon from '../common-component/icons/UserIcon';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';

function logout() {
  axios.post('/logout').then(() => window.location.assign('/'));
}

function logoutC() {
  return <CommonButtonComponent buttonType="primary" text="Log out" textSize="text-5xl" padding="p-12 pr-32" onClickCallback={logout} />;
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <UIShellComponent />
      <div className="w-full h-full" />
    </div>
  );
}

elementBinder('home-view', <HomePage />);
