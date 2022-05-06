import axios from 'axios';
import CommonButtonComponent from '../common-component/CommonButtonComponent';
import { elementBinder } from '../utils/ElementBinder';

function logout() {
  axios.post('/logout').then(() => window.location.assign('/'));
}

export default function HomePage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-900">
      <CommonButtonComponent buttonType="primary" text="Log out" textSize="text-5xl" padding="p-12 pr-32" onClickCallback={logout} />
    </div>
  );
}

elementBinder('home-view', <HomePage />);
