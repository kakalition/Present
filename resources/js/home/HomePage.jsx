import axios from 'axios';
import CommonButtonComponent from '../common-component/CommonButtonComponent';
import UserIcon from '../common-component/icons/UserIcon';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';

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
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row w-[80%]">
          <AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" clickCallback={() => {}} fillSpace />
          <div className="w-8" />
          <AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" clickCallback={() => {}} fillSpace />
        </div>

      </div>
    </div>
  );
}

elementBinder('home-view', <HomePage />);
